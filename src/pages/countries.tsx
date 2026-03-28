import { Fragment, useCallback, useMemo, useState, type CSSProperties } from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import { Country, type ClaimData, type CountryData } from '../schema'
import { GROUPS, type GroupDef } from '../schema/policyGroups'
import { allCountries } from '../countries'
import { groupLabels, fieldLabels, claimLabels, countryLabels, Locale } from '../translations'
import type { IndexPageProps } from './index'
import {
  FIELD_COL,
  GRID_GAP,
  LeaderBadge,
  FieldCell,
  SingleClaimCell,
  avgScore,
  leadersForClaim,
  leadersForField,
  orderedClaimKeys,
  rowKey,
  ScoreDots,
  stickyCornerHeaderCol,
  stickyFirstCol,
  stickyGroupFirstCol,
  getClaimScaleLegendLines,
  useExpandRowHoverHighlight,
  claimRowGridStyle,
  claimRowStickyColStyle,
  claimTodoModel,
} from './index'

function isCountryParam(id: string | undefined): id is Country {
  if (!id) return false
  return (Object.values(Country) as string[]).includes(id)
}

const leadersCellWrap: CSSProperties = {
  border: '1px solid var(--border)',
  borderRadius: 6,
  padding: '6px 10px',
  boxSizing: 'border-box',
  minHeight: 44,
  minWidth: 0,
  width: '100%',
  background: 'var(--cell-bg)',
  transition: 'border-color 0.15s',
}

function todoCellShell(rh: boolean | undefined): CSSProperties {
  return {
    border: '1px solid var(--border)',
    borderRadius: 6,
    padding: '8px 10px',
    minHeight: 44,
    boxSizing: 'border-box',
    minWidth: 0,
    width: '100%',
    background: rh ? 'transparent' : 'var(--cell-bg)',
    transition: 'background 0.12s ease',
  }
}

function legendLineLeadingLevel(line: string): number | null {
  const m = line.match(/^(\d+)/)
  return m ? Number(m[1]) : null
}

function countryLevelFloor(score: number, maxScore: number): number {
  return Math.min(maxScore, Math.max(1, Math.floor(Number(score))))
}

function fieldTodoAggregate(
  field: string,
  claimKeysOrdered: string[],
  selectedFieldRec: Record<string, ClaimData> | undefined,
  maxScore: number,
): { pending: number; fieldDone: boolean } {
  if (!selectedFieldRec) return { pending: 0, fieldDone: false }
  let pending = 0
  let hasData = false
  let allDone = true
  for (const ck of claimKeysOrdered) {
    const d = selectedFieldRec[ck]
    if (!d) continue
    hasData = true
    const m = claimTodoModel(field, ck, d.score ?? null, maxScore)
    if (m.kind === 'next') {
      pending += m.items.length
      allDone = false
    } else if (m.kind === 'none') {
      allDone = false
    }
  }
  return { pending, fieldDone: hasData && allDone }
}

const LEADER_SNIPPET_MAX = 320
const LEADER_BLOCKS_MAX = 5

function truncateSnippet(s: string, max = LEADER_SNIPPET_MAX): string {
  const t = s.trim()
  if (!t) return ''
  if (t.length <= max) return t
  return `${t.slice(0, max - 1).trimEnd()}…`
}

function snippetFromClaimData(c: ClaimData | undefined): string | null {
  if (!c) return null
  const t = c.text?.trim()
  if (t) return truncateSnippet(t)
  const link = c.links?.[0]
  if (link?.label?.trim()) return link.label.trim()
  return null
}

function snippetFromLeaderField(
  accessor: (c: CountryData) => Record<string, Record<string, ClaimData>>,
  field: string,
  leader: CountryData,
): string | null {
  const fd = accessor(leader)[field]
  if (!fd) return null
  for (const key of Object.keys(fd)) {
    const sn = snippetFromClaimData(fd[key]!)
    if (sn) return sn
  }
  return null
}

function filterLeadersExcludingSelf<T extends { data: CountryData }>(leaders: T[], self: Country): T[] {
  return leaders.filter(l => l.data.country !== self)
}

function formatScoreDelta(leaderScore: number, baseline: number | null): string | null {
  if (baseline == null || !Number.isFinite(baseline)) return null
  const d0 = leaderScore - baseline
  const d = Math.round(d0 * 10) / 10
  if (Math.abs(d) < 0.05) return '0'
  const abs = Math.abs(d)
  const body = Number.isInteger(abs) ? String(abs) : abs.toFixed(1).replace(/\.0$/, '')
  if (d > 0) return `+${body}`
  return `-${body}`
}

function LeadersEvidenceColumn({
  filtered,
  accessor,
  field,
  claimKey,
  maxScore,
  selectedBaseline,
  claimDetailOpen,
  onToggleClaimDetail,
}: {
  filtered: { data: CountryData; score: number }[]
  accessor: (c: CountryData) => Record<string, Record<string, ClaimData>>
  field: string
  claimKey?: string
  maxScore?: number
  selectedBaseline: number | null
  claimDetailOpen?: boolean
  onToggleClaimDetail?: () => void
}) {
  const isClaimRow = claimKey != null
  const [snippetOpen, setSnippetOpen] = useState<Set<Country>>(() => new Set())
  const toggleSnippet = useCallback((c: Country) => {
    setSnippetOpen(prev => {
      const n = new Set(prev)
      if (n.has(c)) n.delete(c)
      else n.add(c)
      return n
    })
  }, [])

  const hi = maxScore != null && maxScore > 0 ? maxScore : 5
  if (filtered.length === 0) {
    return <span style={{ color: 'var(--border-hi)', fontSize: 11 }}>—</span>
  }
  const shown = filtered.slice(0, LEADER_BLOCKS_MAX)
  const more = filtered.length - shown.length
  return (
    <div
      onClick={e => e.stopPropagation()}
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '10px 14px',
        alignItems: 'flex-start',
        minWidth: 0,
        width: '100%',
      }}
    >
      {shown.map(({ data, score }) => {
        const snip = claimKey != null
          ? snippetFromClaimData(accessor(data)[field]?.[claimKey])
          : snippetFromLeaderField(accessor, field, data)
        const deltaStr = formatScoreDelta(score, selectedBaseline)
        const snipExpanded = isClaimRow ? Boolean(claimDetailOpen) : snippetOpen.has(data.country)
        const toggleSnip = isClaimRow && onToggleClaimDetail
          ? onToggleClaimDetail
          : () => toggleSnippet(data.country)
        return (
          <div
            key={data.country}
            style={{
              display: 'inline-flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              columnGap: 12,
              rowGap: 6,
              flex: '0 1 auto',
              minWidth: 0,
              maxWidth: '100%',
            }}
          >
            <div
              role={snip ? 'button' : undefined}
              tabIndex={snip ? 0 : undefined}
              aria-expanded={snip ? snipExpanded : undefined}
              aria-label={snip ? `${countryLabels[data.country][Locale.EN]} evidence` : undefined}
              onClick={snip ? () => toggleSnip() : undefined}
              onKeyDown={snip ? e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleSnip()
                }
              } : undefined}
              style={{ cursor: snip ? 'pointer' : 'default', flexShrink: 0 }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ flexShrink: 0, lineHeight: 1, paddingTop: 1 }}>
                  <LeaderBadge countryKey={data.country} />
                </span>
                <span style={{
                  minWidth: 0,
                  fontSize: 11,
                  fontWeight: 500,
                  color: 'var(--cell-text)',
                  lineHeight: 1.4,
                  opacity: 0.92,
                }}>
                  {countryLabels[data.country][Locale.EN]}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, flexShrink: 0, flexWrap: 'wrap' }}>
                  <ScoreDots score={score} maxScore={hi} size={6} />
                  {deltaStr != null && (
                    <span style={{ fontSize: 10, color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
                      {deltaStr}
                    </span>
                  )}
                </span>
              </div>
            </div>
            {snip && snipExpanded ? (
              <div style={{
                flex: '1 1 200px',
                minWidth: 140,
                fontSize: 11,
                color: 'var(--cell-muted)',
                lineHeight: 1.55,
                wordBreak: 'break-word',
              }}>
                {snip}
              </div>
            ) : null}
          </div>
        )
      })}
      {more > 0 && (
        <div style={{ fontSize: 10, color: 'var(--muted)', alignSelf: 'center', lineHeight: 1.4 }}>
          +{more} tied
        </div>
      )}
    </div>
  )
}

export default function CountryPage(props: IndexPageProps) {
  const { visibleGroups, visibleCountries, showLeaders } = props

  const { countryId: countryIdParam } = useParams<{ countryId: string }>()
  const { search: locationSearch } = useLocation()

  const selected = useMemo(() => {
    if (!countryIdParam || !isCountryParam(countryIdParam)) return undefined
    return allCountries.find(c => c.country === countryIdParam)
  }, [countryIdParam])

  const groupsFiltered = useMemo(
    () => GROUPS.filter((g: GroupDef) => visibleGroups.has(g.group)),
    [visibleGroups],
  )
  const countries = useMemo(
    () => allCountries.filter(c => visibleCountries.has(c.country)),
    [visibleCountries],
  )

  const leadersColWidth = 340
  const todoColMin = 200
  const countryColMin = 200
  const countryColMax = 260
  const todoColTrack = `minmax(${todoColMin}px, 1fr)`
  const gridCols = showLeaders
    ? `${FIELD_COL}px minmax(${countryColMin}px, ${countryColMax}px) minmax(${leadersColWidth}px, 1fr) ${todoColTrack}`
    : `${FIELD_COL}px minmax(${countryColMin}px, ${countryColMax}px) ${todoColTrack}`

  const numCols = 2 + (showLeaders ? 1 : 0) + 1
  const gapTotal = GRID_GAP * Math.max(0, numCols - 1)
  const tableMinWidth = FIELD_COL + countryColMin + (showLeaders ? leadersColWidth : 0) + todoColMin + gapTotal

  const [expandedRows, setExpandedRows] = useState<Set<string>>(() => new Set())
  const [expandedClaimDetails, setExpandedClaimDetails] = useState<Set<string>>(() => new Set())
  const bindClaimRowHover = useExpandRowHoverHighlight()

  const toggleRow = (key: string) => {
    setExpandedRows(prev => {
      const next = new Set(prev)
      if (next.has(key)) {
        next.delete(key)
        setExpandedClaimDetails(prevD => {
          const n = new Set(prevD)
          const prefix = `${key}::`
          for (const k of prevD) {
            if (k.startsWith(prefix)) n.delete(k)
          }
          return n
        })
      } else {
        next.add(key)
      }
      return next
    })
  }

  const toggleClaimDetail = useCallback((detailKey: string) => {
    setExpandedClaimDetails(prev => {
      const next = new Set(prev)
      if (next.has(detailKey)) next.delete(detailKey)
      else next.add(detailKey)
      return next
    })
  }, [])

  if (!countryIdParam || !isCountryParam(countryIdParam)) {
    return <Navigate to={{ pathname: '/', search: locationSearch }} replace />
  }
  if (!selected) {
    return <Navigate to={{ pathname: '/', search: locationSearch }} replace />
  }

  const countryId = countryIdParam
  const hiddenByFilter = !visibleCountries.has(countryId)

  const renderSelectedCell = (
    accessor: (c: CountryData) => Record<string, Record<string, ClaimData>>,
    field: string,
    rk: string,
    open: boolean,
  ) => {
    const fieldData = accessor(selected)[field]
    if (!fieldData) {
      return (
        <div
          role="button"
          tabIndex={0}
          onClick={() => toggleRow(rk)}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              toggleRow(rk)
            }
          }}
          style={{
            background: 'var(--cell-bg)',
            border: '1px dashed var(--border)',
            borderRadius: 6,
            minHeight: 44,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <span style={{ color: 'var(--border-hi)', fontSize: 11 }}>—</span>
        </div>
      )
    }
    return (
      <FieldCell
        fieldKey={field}
        claims={fieldData}
        maxScore={fieldLabels[field]?.[Locale.EN]?.maxScore ?? 5}
        expanded={open}
        showInlineClaimList={!open}
        fieldRowKey={rk}
        expandedClaimDetails={expandedClaimDetails}
        onToggleClaimDetail={toggleClaimDetail}
        onToggleRow={() => toggleRow(rk)}
        hideInlineClaimChevrons
      />
    )
  }

  return (
    <>
      {hiddenByFilter && (
        <div style={{ padding: '8px 32px 0', maxWidth: 900 }}>
          <p style={{ color: 'var(--muted)', fontSize: 12, margin: 0, lineHeight: 1.5 }}>
            Hidden by country filter — enable it on the matrix to include this country in columns and leader set.
          </p>
        </div>
      )}

      <div style={{
        margin: '24px 0 0',
        width: '100%',
        boxSizing: 'border-box',
        background: 'var(--cell-bg)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          position: 'sticky',
          top: 0,
          zIndex: 25,
          background: 'var(--cell-bg)',
          borderRadius: 0,
        }}>
          <div className="hide-scrollbar" style={{ overflowX: 'auto', overflowY: 'hidden', padding: '0 32px' }}>
            <div style={{ minWidth: tableMinWidth, padding: `${GRID_GAP}px 0`, paddingBottom: 8, boxSizing: 'border-box' }}>
              <div style={{ display: 'grid', gridTemplateColumns: gridCols, gap: GRID_GAP }}>
                <div style={{ ...stickyCornerHeaderCol, minHeight: 1 }} />
                <div style={{
                  padding: '8px 12px',
                  borderBottom: '2px solid var(--accent)',
                  fontSize: 10,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-mono)',
                }}>
                  In country
                </div>
                {showLeaders && (
                  <div style={{
                    padding: '8px 10px 8px 0',
                    borderBottom: '2px solid var(--accent)',
                    background: 'var(--cell-bg)',
                  }}>
                    <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                      Leaders
                    </span>
                  </div>
                )}
                <div style={{
                  padding: '8px 10px 8px 0',
                  borderBottom: '2px solid var(--accent)',
                  background: 'var(--cell-bg)',
                }}>
                  <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                    Todo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ overflowX: 'auto', overflowY: 'visible', padding: '0 32px' }}>
          <div style={{ minWidth: tableMinWidth, padding: `${GRID_GAP}px 0`, paddingTop: 0, boxSizing: 'border-box' }}>
            {groupsFiltered.map(({ group, fields, accessor }: GroupDef, gi: number) => {
              const headerBand = gi % 2 === 0 ? 'var(--group-tone-a)' : 'var(--group-tone-b)'
              return (
                <div key={group} style={{ marginTop: gi === 0 ? 12 : 28 }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: gridCols,
                    gap: GRID_GAP,
                    marginBottom: 6,
                  }}>
                    <div style={{
                      ...stickyGroupFirstCol,
                      background: headerBand,
                      paddingTop: 10,
                      paddingRight: 20,
                      paddingBottom: 8,
                      borderTop: gi > 0 ? '1px solid var(--border)' : undefined,
                      borderBottom: '1px solid var(--group-outline)',
                    }}>
                      <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                        {groupLabels[group][Locale.EN]}
                      </span>
                    </div>
                    <div style={{
                      background: headerBand,
                      borderTop: gi > 0 ? '1px solid var(--border)' : undefined,
                      borderBottom: '1px solid var(--group-outline)',
                    }} />
                    {showLeaders && (
                      <div style={{
                        background: headerBand,
                        borderTop: gi > 0 ? '1px solid var(--border)' : undefined,
                        borderBottom: '1px solid var(--group-outline)',
                      }} />
                    )}
                    <div style={{
                      background: headerBand,
                      borderTop: gi > 0 ? '1px solid var(--border)' : undefined,
                      borderBottom: '1px solid var(--group-outline)',
                    }} />
                  </div>

                  {fields.map(field => {
                    const ft = fieldLabels[field]?.[Locale.EN]
                    const maxScore = ft?.maxScore ?? 5
                    const rk = rowKey(group, field)
                    const open = expandedRows.has(rk)
                    const leaders = filterLeadersExcludingSelf(
                      leadersForField(countries, accessor, field),
                      countryId,
                    )
                    const claimCountMax = countries.reduce((m, c) => {
                      const fd = accessor(c)[field]
                      return Math.max(m, fd ? Object.keys(fd).length : 0)
                    }, 0)
                    const claimKeysOrdered = orderedClaimKeys(countries, accessor, field)
                    const selectedFieldRec = accessor(selected)[field]
                    const selectedFieldBaseline = selectedFieldRec && Object.keys(selectedFieldRec).length > 0
                      ? avgScore(selectedFieldRec)
                      : null
                    const { pending: fieldPendingTodos, fieldDone: fieldTodoAllDone } = fieldTodoAggregate(
                      field,
                      claimKeysOrdered,
                      selectedFieldRec,
                      maxScore,
                    )

                    return (
                      <Fragment key={field}>
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: gridCols,
                          gap: GRID_GAP,
                          marginBottom: 6,
                          alignItems: 'stretch',
                        }}>
                          <div
                            role="button"
                            tabIndex={0}
                            onClick={() => toggleRow(rk)}
                            onKeyDown={e => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                toggleRow(rk)
                              }
                            }}
                            style={{ ...stickyFirstCol, paddingTop: 10, paddingRight: 20, cursor: 'pointer' }}
                          >
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                              <div style={{ minWidth: 0 }}>
                                <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text)', lineHeight: 1.35 }}>
                                  {ft?.title ?? field}
                                </div>
                                {!open && claimCountMax > 0 && (
                                  <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 4 }}>
                                    {claimCountMax} claims
                                  </div>
                                )}
                                {fieldPendingTodos > 0 && (
                                  <div style={{
                                    fontSize: 10,
                                    color: 'var(--muted)',
                                    marginTop: !open && claimCountMax > 0 ? 2 : 4,
                                  }}>
                                    {fieldPendingTodos} todo{fieldPendingTodos === 1 ? '' : 's'}
                                  </div>
                                )}
                                {open && ft?.description && (
                                  <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4, lineHeight: 1.5 }}>
                                    {ft.description}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div style={{ minHeight: 44, alignSelf: 'stretch' }}>
                            {renderSelectedCell(accessor, field, rk, open)}
                          </div>

                          {showLeaders && (
                            <div
                              role="button"
                              tabIndex={0}
                              onClick={() => toggleRow(rk)}
                              onKeyDown={e => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault()
                                  toggleRow(rk)
                                }
                              }}
                              style={{
                                cursor: 'pointer',
                                alignSelf: 'stretch',
                                padding: 0,
                                background: 'transparent',
                              }}
                            >
                              <div
                                style={leadersCellWrap}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hi)' }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
                              >
                                <LeadersEvidenceColumn
                                  filtered={leaders}
                                  accessor={accessor}
                                  field={field}
                                  maxScore={maxScore}
                                  selectedBaseline={selectedFieldBaseline}
                                />
                              </div>
                            </div>
                          )}
                          <div style={{ alignSelf: 'stretch', paddingTop: 4 }}>
                            <div style={todoCellShell(undefined)}>
                              {fieldPendingTodos > 0 ? (
                                <span style={{
                                  fontSize: 11,
                                  fontWeight: 600,
                                  color: 'var(--text)',
                                  fontFamily: 'var(--font-mono)',
                                }}>
                                  {fieldPendingTodos}
                                </span>
                              ) : fieldTodoAllDone ? (
                                <span style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 600 }}>Done</span>
                              ) : (
                                <span style={{ color: 'var(--border-hi)', fontSize: 11 }}>—</span>
                              )}
                            </div>
                          </div>
                        </div>

                        {open && claimKeysOrdered.map(claimKey => {
                          const claimDetailKey = `${rk}::${claimKey}`
                          const claimDetailOpen = expandedClaimDetails.has(claimDetailKey)
                          const claimLeaders = filterLeadersExcludingSelf(
                            leadersForClaim(countries, accessor, field, claimKey),
                            countryId,
                          )
                          const ct = claimLabels[field]?.[claimKey]?.[Locale.EN]
                          const fieldData = accessor(selected)[field]
                          const data = fieldData?.[claimKey]
                          const selectedClaimBaseline = data != null ? Number(data.score) : null
                          const countryLv = data != null ? countryLevelFloor(data.score, maxScore) : null
                          const rowHover = bindClaimRowHover(claimDetailKey)
                          const rh = rowHover.isHovered
                          const claimTodo = claimTodoModel(field, claimKey, data?.score ?? null, maxScore)

                          return (
                            <div
                              key={claimKey}
                              tabIndex={0}
                              onClick={() => toggleClaimDetail(claimDetailKey)}
                              onKeyDown={e => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault()
                                  toggleClaimDetail(claimDetailKey)
                                }
                              }}
                              onMouseEnter={rowHover.onMouseEnter}
                              onMouseLeave={rowHover.onMouseLeave}
                              style={{
                                display: 'grid',
                                gridTemplateColumns: gridCols,
                                gap: GRID_GAP,
                                marginBottom: 6,
                                alignItems: 'stretch',
                                cursor: 'pointer',
                                ...claimRowGridStyle(rh),
                              }}
                            >
                              <div style={{ ...stickyFirstCol, ...claimRowStickyColStyle(rh), paddingTop: 8, paddingRight: 20, paddingLeft: 10 }}>
                                <div style={{ marginLeft: 16 }}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                                    <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--text)', lineHeight: 1.4 }}>
                                      {ct?.title ?? claimKey}
                                    </span>
                                    {data != null && (
                                      <span style={{ display: 'inline-flex', alignItems: 'center' }} aria-hidden>
                                        <ScoreDots score={data.score} maxScore={maxScore} size={5} />
                                      </span>
                                    )}
                                  </div>
                                </div>
                                {claimDetailOpen && (
                                  <div
                                    style={{ marginTop: 10, marginLeft: 16, paddingLeft: 18, paddingBottom: 4 }}
                                    onClick={e => e.stopPropagation()}
                                  >
                                    {getClaimScaleLegendLines(field, claimKey).map((line, i) => {
                                      const lineLv = legendLineLeadingLevel(line)
                                      const hl = countryLv != null && lineLv != null && lineLv === countryLv
                                      return (
                                        <div
                                          key={i}
                                          style={{
                                            fontSize: 10,
                                            lineHeight: 1.55,
                                            marginBottom: 3,
                                            color: hl ? 'var(--text)' : 'var(--muted)',
                                            fontWeight: hl ? 600 : 400,
                                            padding: hl ? '4px 8px' : undefined,
                                            marginLeft: hl ? -8 : undefined,
                                            borderRadius: hl ? 4 : undefined,
                                            background: hl ? 'var(--cell-max-highlight-bg)' : undefined,
                                            borderLeft: hl ? '3px solid var(--accent)' : undefined,
                                          }}
                                        >
                                          {line}
                                        </div>
                                      )
                                    })}
                                  </div>
                                )}
                              </div>

                              <div style={{ minHeight: 44 }}>
                                {!data ? (
                                  <div style={{
                                    background: rh ? 'transparent' : 'var(--cell-bg)',
                                    border: '1px dashed var(--border)',
                                    borderRadius: 6,
                                    minHeight: 44,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'background 0.12s ease',
                                  }}>
                                    <span style={{ color: 'var(--border-hi)', fontSize: 11 }}>—</span>
                                  </div>
                                ) : (
                                  <SingleClaimCell
                                    fieldKey={field}
                                    claimKey={claimKey}
                                    data={data}
                                    maxScore={maxScore}
                                    detailExpanded={expandedClaimDetails.has(claimDetailKey)}
                                    onDetailToggle={() => toggleClaimDetail(claimDetailKey)}
                                    rowHoverHighlight={rh}
                                    hideChevron
                                    detailToggleOnClick={false}
                                    stopOuterClickPropagation={false}
                                  />
                                )}
                              </div>

                              {showLeaders && (
                                <div style={{ alignSelf: 'stretch' }} onClick={e => e.stopPropagation()}>
                                  <div
                                    style={{
                                      ...leadersCellWrap,
                                      ...(rh ? { background: 'transparent' } : {}),
                                      transition: 'background 0.12s ease, border-color 0.15s',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hi)' }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
                                  >
                                    <LeadersEvidenceColumn
                                      filtered={claimLeaders}
                                      accessor={accessor}
                                      field={field}
                                      claimKey={claimKey}
                                      maxScore={maxScore}
                                      selectedBaseline={selectedClaimBaseline}
                                      claimDetailOpen={claimDetailOpen}
                                      onToggleClaimDetail={() => toggleClaimDetail(claimDetailKey)}
                                    />
                                  </div>
                                </div>
                              )}
                              <div style={{ alignSelf: 'stretch' }} onClick={e => e.stopPropagation()}>
                                <div style={todoCellShell(rh)}>
                                  {claimTodo.kind === 'none' && (
                                    <span style={{ color: 'var(--border-hi)', fontSize: 11 }}>—</span>
                                  )}
                                  {claimTodo.kind === 'done' && (
                                    <span style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 600 }}>Done</span>
                                  )}
                                  {claimTodo.kind === 'next' && (
                                    <ul style={{
                                      margin: 0,
                                      paddingLeft: 16,
                                      color: 'var(--cell-text)',
                                      lineHeight: 1.45,
                                    }}>
                                      {claimTodo.items.map((line, i) => (
                                        <li key={i} style={{ fontSize: 11, marginBottom: 2 }}>{line}</li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </Fragment>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
