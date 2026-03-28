import React, { useEffect, useMemo, useState } from 'react'
import {
  Country,
  PolicyGroup,
  TalentsField, ScienceField, TranslationField, HealthcareField, DataField, InternationalField, SocietalField,
  ResearcherImmigrationClaim, ClinicianImmigrationClaim, ResearchTrainingClaim, ClinicianAgingTrainingClaim, ClinicianScientistClaim,
  TALENTS_CLAIM_SCALES,
  BreakthroughAgencyClaim, BREAKTHROUGH_AGENCY_CLAIM_SCALES,
  AdaptiveLicensingClaim, ADAPTIVE_LICENSING_CLAIM_SCALES,
  TrialDesignClaim, TRIAL_DESIGN_CLAIM_SCALES,
  RegulatorySandboxClaim, REGULATORY_SANDBOX_CLAIM_SCALES,
  AgingEndpointClaim, AGING_ENDPOINT_CLAIM_SCALES,
  ResearchFundingClaim, RESEARCH_FUNDING_CLAIM_SCALES,
  GeneEditingClaim, GENE_EDITING_CLAIM_SCALES,
  BiomarkerCollectionClaim, BIOMARKER_CLAIM_SCALES,
  PreventiveTrialsClaim, PREVENTIVE_TRIAL_CLAIM_SCALES,
  GeroEndpointsClaim, GERO_ENDPOINT_CLAIM_SCALES,
  OpenDataClaim, OPEN_DATA_CLAIM_SCALES,
  InteroperabilityClaim, INTEROPERABILITY_CLAIM_SCALES,
  ResearchClinicalClaim, RESEARCH_CLINICAL_CLAIM_SCALES,
  RegulatoryHarmonizationClaim, REGULATORY_HARMONIZATION_CLAIM_SCALES,
  SharedPhysicalInfraClaim, SHARED_PHYSICAL_INFRA_CLAIM_SCALES,
  IntlResearchNetworkClaim, INTL_RESEARCH_NETWORK_CLAIM_SCALES,
  SocietalReadinessClaim, SOCIETAL_READINESS_CLAIM_SCALES,
  type CountryData, type ClaimData,
} from '../schema'
import { allCountries } from '../countries'
import { groupLabels, fieldLabels, claimLabels, countryLabels, countryFlags, SCREENING_SCALE, Locale } from '../translations'

// ─── Types ───────────────────────────────────────────────────────────────────

type AnyField =
  | TalentsField | ScienceField | TranslationField
  | HealthcareField | DataField | InternationalField | SocietalField

interface GroupDef {
  group: PolicyGroup
  fields: AnyField[]
  accessor: (c: CountryData) => Record<string, Record<string, ClaimData>>
}

const GROUPS: GroupDef[] = [
  { group: PolicyGroup.TALENTS,       fields: Object.values(TalentsField),       accessor: c => c.talents as Record<string, Record<string, ClaimData>> },
  { group: PolicyGroup.SCIENCE,       fields: Object.values(ScienceField),       accessor: c => c.science as Record<string, Record<string, ClaimData>> },
  { group: PolicyGroup.TRANSLATION,   fields: Object.values(TranslationField),   accessor: c => c.translation as Record<string, Record<string, ClaimData>> },
  { group: PolicyGroup.HEALTHCARE,    fields: Object.values(HealthcareField),    accessor: c => c.healthcare as Record<string, Record<string, ClaimData>> },
  { group: PolicyGroup.DATA,          fields: Object.values(DataField),          accessor: c => c.data as Record<string, Record<string, ClaimData>> },
  { group: PolicyGroup.INTERNATIONAL, fields: Object.values(InternationalField), accessor: c => c.international as Record<string, Record<string, ClaimData>> },
  { group: PolicyGroup.SOCIETAL,      fields: Object.values(SocietalField),      accessor: c => c.societal as Record<string, Record<string, ClaimData>> },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Round to nearest 0.5 */
function avgScore(claims: Record<string, ClaimData>): number {
  const scores = Object.values(claims).map(c => c.score as number)
  const mean = scores.reduce((a, b) => a + b, 0) / scores.length
  return Math.round(mean * 2) / 2
}

function leadersForField(
  list: CountryData[],
  accessor: (c: CountryData) => Record<string, Record<string, ClaimData>>,
  field: string,
): { data: CountryData; score: number }[] {
  const scored: { data: CountryData; score: number }[] = []
  for (const c of list) {
    const fd = accessor(c)[field]
    if (fd && Object.keys(fd).length > 0) scored.push({ data: c, score: avgScore(fd) })
  }
  if (scored.length === 0) return []
  const best = Math.max(...scored.map(s => s.score))
  const atTop = scored.filter(s => s.score === best)
  const order = new Map(list.map((c, i) => [c.country, i]))
  atTop.sort((a, b) => (order.get(a.data.country) ?? 0) - (order.get(b.data.country) ?? 0))
  return atTop
}

/** Map score/maxScore → hue: red at 0, yellow-green at mid, bright green at max */
function scoreColor(score: number, maxScore: number): string {
  if (maxScore === 0) return 'var(--border-hi)'
  const t = score / maxScore
  if (t === 0)   return '#1a0a0a'
  if (t <= 0.17) return '#7f2020'
  if (t <= 0.33) return '#c26020'
  if (t <= 0.50) return '#8aaf30'
  if (t <= 0.67) return '#6dcc50'
  if (t <= 0.83) return '#44ee70'
  return '#00f090'
}

function scoreBg(score: number, maxScore: number): string {
  if (maxScore === 0 || score === 0) return '#110808'
  const t = score / maxScore
  if (t <= 0.17) return '#1a0f0f'
  if (t <= 0.33) return '#1a1505'
  if (t <= 0.50) return '#111318'
  if (t <= 0.67) return '#0f1a0f'
  return '#0c1a10'
}

// ─── Scale text lookup ────────────────────────────────────────────────────────

const STANDARD_SCALE_LABELS: Record<number, string> = {
  1: 'Absent',
  2: 'Weak',
  3: 'Partial',
  4: 'Strong',
  5: 'Exemplary',
}

/** Returns a human-readable description for a given score within its field/claim context. */
function getTalentsClaimKey(fieldKey: string, claimKey: string):
  | ResearcherImmigrationClaim | ClinicianImmigrationClaim
  | ResearchTrainingClaim | ClinicianAgingTrainingClaim | ClinicianScientistClaim | null {
  if (fieldKey === TalentsField.RESEARCHER_IMMIGRATION)      return claimKey as ResearcherImmigrationClaim
  if (fieldKey === TalentsField.CLINICIAN_IMMIGRATION)       return claimKey as ClinicianImmigrationClaim
  if (fieldKey === TalentsField.RESEARCH_TRAINING_PIPELINE)  return claimKey as ResearchTrainingClaim
  if (fieldKey === TalentsField.CLINICIAN_AGING_TRAINING)    return claimKey as ClinicianAgingTrainingClaim
  if (fieldKey === TalentsField.CLINICIAN_SCIENTIST_PATHWAY) return claimKey as ClinicianScientistClaim
  return null
}

/** Returns a human-readable description for a given score within its field/claim context. */
function getScaleLevelText(fieldKey: string, claimKey: string, score: number): string | null {
  const level = Math.floor(score) // half-points floor to the level below
  // ── Talents ──
  const talentsKey = getTalentsClaimKey(fieldKey, claimKey)
  if (talentsKey !== null) {
    const fieldScales = TALENTS_CLAIM_SCALES[fieldKey as TalentsField] as Record<string, Record<number, string>> | undefined
    if (!fieldScales) return null
    const scales = fieldScales[claimKey]
    if (!scales) return null
    const desc = scales[level]
    return desc ?? null
  }
  if (fieldKey === HealthcareField.POPULATION_SCREENINGS) {
    const entry = SCREENING_SCALE[level]
    if (!entry) return null
    const suffix = score % 1 !== 0 ? ' (narrow subset)' : ''
    return `${entry.label}${suffix}: ${entry.description}`
  }
  if (fieldKey === HealthcareField.AGING_BIOMARKER_COLLECTIONS) {
    const scales = BIOMARKER_CLAIM_SCALES[claimKey as BiomarkerCollectionClaim]
    if (!scales) return null
    const desc = scales[level]
    return desc ?? null
  }
  if (fieldKey === HealthcareField.PREVENTIVE_TRIALS) {
    const scales = PREVENTIVE_TRIAL_CLAIM_SCALES[claimKey as PreventiveTrialsClaim]
    if (!scales) return null
    const desc = scales[level]
    return desc ?? null
  }
  if (fieldKey === HealthcareField.GERO_THERAPEUTIC_ENDPOINTS) {
    const scales = GERO_ENDPOINT_CLAIM_SCALES[claimKey as GeroEndpointsClaim]
    if (!scales) return null
    const desc = scales[level]
    return desc ?? null
  }
  if (fieldKey === DataField.OPEN_ACCESS_TO_HEALTH_DATA) {
    const scales = OPEN_DATA_CLAIM_SCALES[claimKey as OpenDataClaim]
    if (!scales) return null
    const desc = scales[level]
    return desc ?? null
  }
  if (fieldKey === DataField.INTEROPERABILITY_STANDARDS) {
    const scales = INTEROPERABILITY_CLAIM_SCALES[claimKey as InteroperabilityClaim]
    if (!scales) return null
    const desc = scales[level]
    return desc ?? null
  }
  if (fieldKey === DataField.STANDARDIZED_TRIAL_ENDPOINTS) {
    const scales = RESEARCH_CLINICAL_CLAIM_SCALES[claimKey as ResearchClinicalClaim]
    if (!scales) return null
    const desc = scales[level]
    return desc ?? null
  }
  if (fieldKey === ScienceField.RESEARCH_FUNDING) {
    const scales = RESEARCH_FUNDING_CLAIM_SCALES[claimKey as ResearchFundingClaim]
    if (!scales) return null
    const desc = scales[level]
    return desc ?? null
  }
  if (fieldKey === ScienceField.GENE_EDITING_REGULATION) {
    const scales = GENE_EDITING_CLAIM_SCALES[claimKey as GeneEditingClaim]
    if (!scales) return null
    const desc = scales[level]
    return desc ?? null
  }
  if (fieldKey === TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES) {
    const scales = BREAKTHROUGH_AGENCY_CLAIM_SCALES[claimKey as BreakthroughAgencyClaim]
    if (!scales) return null
    const desc = scales[level]
    return desc ?? null
  }
  if (fieldKey === TranslationField.ADAPTIVE_LICENSING) {
    const scales = ADAPTIVE_LICENSING_CLAIM_SCALES[claimKey as AdaptiveLicensingClaim]
    if (!scales) return null
    const desc = scales[level]
    return desc ?? null
  }
  if (fieldKey === TranslationField.TRIAL_DESIGN_MODERNIZATION) {
    const scales = TRIAL_DESIGN_CLAIM_SCALES[claimKey as TrialDesignClaim]
    if (!scales) return null
    const desc = scales[level]
    return desc ?? null
  }
  if (fieldKey === TranslationField.REGULATORY_SANDBOXES) {
    const scales = REGULATORY_SANDBOX_CLAIM_SCALES[claimKey as RegulatorySandboxClaim]
    if (!scales) return null
    const desc = scales[level]
    return desc ?? null
  }
  if (fieldKey === TranslationField.AGING_ENDPOINT_ECOSYSTEM) {
    const scales = AGING_ENDPOINT_CLAIM_SCALES[claimKey as AgingEndpointClaim]
    if (!scales) return null
    const desc = scales[level]
    return desc ?? null
  }
  if (fieldKey === InternationalField.REGULATORY_HARMONIZATION) {
    const scales = REGULATORY_HARMONIZATION_CLAIM_SCALES[claimKey as RegulatoryHarmonizationClaim]
    if (!scales) return null
    const desc = scales[level]
    return desc ?? null
  }
  if (fieldKey === InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE) {
    const scales = SHARED_PHYSICAL_INFRA_CLAIM_SCALES[claimKey as SharedPhysicalInfraClaim]
    if (!scales) return null
    const desc = scales[level]
    return desc ?? null
  }
  if (fieldKey === InternationalField.INTERNATIONAL_RESEARCH_NETWORK) {
    const scales = INTL_RESEARCH_NETWORK_CLAIM_SCALES[claimKey as IntlResearchNetworkClaim]
    if (!scales) return null
    const desc = scales[level]
    return desc ?? null
  }
  if (fieldKey === SocietalField.SOCIETAL_READINESS) {
    const scales = SOCIETAL_READINESS_CLAIM_SCALES[claimKey as SocietalReadinessClaim]
    if (!scales) return null
    const desc = scales[level]
    return desc ?? null
  }
  // Standard 1–5
  const label = STANDARD_SCALE_LABELS[Math.round(score)]
  return label ?? null
}

// ─── Tooltip ─────────────────────────────────────────────────────────────────

function Tooltip({ text, children }: { text: string | null; children: React.ReactNode }) {
  const [visible, setVisible] = useState(false)
  if (!text) return <>{children}</>
  return (
    <span
      style={{ position: 'relative', display: 'inline-flex', cursor: 'default' }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span style={{
          position: 'absolute',
          bottom: 'calc(100% + 6px)',
          left: 0,
          background: '#12121e',
          border: '1px solid var(--border-hi)',
          borderRadius: 5,
          padding: '6px 10px',
          fontSize: 10,
          color: 'var(--text)',
          whiteSpace: 'normal',
          maxWidth: 260,
          zIndex: 200,
          lineHeight: 1.55,
          pointerEvents: 'none',
          boxShadow: '0 4px 16px rgba(0,0,0,0.6)',
        }}>
          {text}
        </span>
      )}
    </span>
  )
}

// ─── Score dots ──────────────────────────────────────────────────────────────

function ScoreDots({ score, maxScore = 5, size = 7 }: { score: number; maxScore?: number; size?: number }) {
  const color = scoreColor(score, maxScore)
  const dots = Array.from({ length: maxScore }, (_, i) => i + 1)
  return (
    <span style={{ display: 'inline-flex', gap: 3, alignItems: 'center' }}>
      {dots.map(i => {
        const fill = Math.min(Math.max(score - (i - 1), 0), 1)
        const pct = fill * 100
        let bg: string
        if (fill >= 1) bg = color
        else if (fill <= 0) bg = 'var(--border-hi)'
        else bg = `linear-gradient(90deg, ${color} ${pct}%, var(--border-hi) ${pct}%)`
        return (
          <span key={i} style={{
            width: size, height: size, borderRadius: '50%',
            background: bg,
            flexShrink: 0,
          }} />
        )
      })}
    </span>
  )
}

// ─── Single claim row ─────────────────────────────────────────────────────────

function ClaimRow({ fieldKey, claimKey, data, maxScore = 5 }: { fieldKey: string; claimKey: string; data: ClaimData; maxScore?: number }) {
  const [open, setOpen] = useState(false)
  const t = claimLabels[fieldKey]?.[claimKey]?.[Locale.EN]

  return (
    <div
      onClick={e => { e.stopPropagation(); setOpen(o => !o) }}
      style={{
        borderTop: '1px solid var(--border)',
        padding: '8px 0',
        cursor: 'pointer',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
        <Tooltip text={getScaleLevelText(fieldKey, claimKey, data.score)}>
          <ScoreDots score={data.score} maxScore={maxScore} size={6} />
        </Tooltip>
        <span style={{ fontSize: 11, color: 'var(--text)', opacity: 0.75, flex: 1, lineHeight: 1.4 }}>
          {t?.title ?? claimKey}
        </span>
        <span style={{ color: 'var(--muted)', fontSize: 9, flexShrink: 0 }}>
          {open ? '▲' : '▼'}
        </span>
      </div>

      {open && (
        <div style={{ marginTop: 6, paddingLeft: 18 }}>
          {data.text && (
            <p style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 6 }}>
              {data.text}
            </p>
          )}
          {data.links.map((l, i) => (
            <div key={i} style={{ marginBottom: 3 }}>
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                style={{ color: 'var(--accent)', fontSize: 11, textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
              >
                ↗ {l.label}
              </a>
              {l.comment && (
                <span style={{ color: 'var(--muted)', fontSize: 10, marginLeft: 6 }}>
                  — {l.comment}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Field cell (summary + claims when row expanded) ─────────────────────────

function FieldCell({
  fieldKey,
  claims,
  maxScore = 5,
  expanded,
  onToggleRow,
}: {
  fieldKey: string
  claims: Record<string, ClaimData>
  maxScore?: number
  expanded: boolean
  onToggleRow: () => void
}) {
  const score = avgScore(claims)

  return (
    <div
      onClick={onToggleRow}
      style={{
        background: scoreBg(score, maxScore),
        border: `1px solid var(--border)`,
        borderRadius: 6,
        padding: '10px 12px',
        transition: 'border-color 0.15s',
        minHeight: 44,
        cursor: 'pointer',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-hi)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <ScoreDots score={score} maxScore={maxScore} />
        <span style={{ color: 'var(--muted)', fontSize: 10 }}>
          {Object.keys(claims).length} claims
        </span>
      </div>

      {expanded && (
        <div style={{ marginTop: 8 }} onClick={e => e.stopPropagation()}>
          {Object.entries(claims).map(([key, data]) => (
            <ClaimRow key={key} fieldKey={fieldKey} claimKey={key} data={data} maxScore={maxScore} />
          ))}
        </div>
      )}
    </div>
  )
}

const stickyFirstCol: React.CSSProperties = {
  position: 'sticky',
  left: 0,
  zIndex: 8,
  background: 'var(--bg)',
  boxShadow: '4px 0 12px -4px rgba(0,0,0,0.45)',
}

const stickyCorner: React.CSSProperties = {
  position: 'sticky',
  left: 0,
  top: 0,
  zIndex: 30,
  background: 'var(--bg)',
  boxShadow: '4px 4px 12px -4px rgba(0,0,0,0.45)',
}

const stickyGroupFirstCol: React.CSSProperties = {
  position: 'sticky',
  left: 0,
  zIndex: 9,
  background: 'var(--bg)',
  boxShadow: '4px 0 12px -4px rgba(0,0,0,0.45)',
}

function stickyLeadersCol(fieldCol: number): React.CSSProperties {
  return {
    position: 'sticky',
    left: fieldCol,
    zIndex: 7,
    background: 'var(--bg)',
    boxShadow: '4px 0 12px -4px rgba(0,0,0,0.45)',
  }
}

function LeaderBadge({
  countryKey,
  score,
  maxScore,
}: {
  countryKey: CountryData['country']
  score: number
  maxScore: number
}) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        flexWrap: 'wrap',
        padding: '5px 9px',
        borderRadius: 8,
        border: '1px solid var(--border-hi)',
        background: scoreBg(score, maxScore),
      }}
    >
      <span style={{ fontSize: 14, lineHeight: 1 }} aria-hidden>{countryFlags[countryKey]}</span>
      <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--text)' }}>
        {countryLabels[countryKey][Locale.EN]}
      </span>
      <ScoreDots score={score} maxScore={maxScore} size={5} />
    </div>
  )
}

function rowKey(group: PolicyGroup, field: string) {
  return `${group}::${field}`
}

const selectBase: React.CSSProperties = {
  padding: '6px 10px',
  borderRadius: 6,
  border: '1px solid var(--border)',
  background: 'var(--surface)',
  color: 'var(--text)',
  fontFamily: 'inherit',
  fontSize: 12,
  cursor: 'pointer',
}

function ToolbarMulti({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <details style={{ position: 'relative' }}>
      <summary
        style={{
          ...selectBase,
          listStyle: 'none',
          userSelect: 'none',
        }}
      >
        {label}
      </summary>
      <div
        style={{
          position: 'absolute',
          top: 'calc(100% + 4px)',
          left: 0,
          zIndex: 400,
          minWidth: 220,
          maxHeight: 280,
          overflowY: 'auto',
          padding: 8,
          background: 'var(--surface)',
          border: '1px solid var(--border-hi)',
          borderRadius: 6,
          boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </details>
  )
}

const toolbarRow: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 10,
  marginBottom: 28,
  padding: '12px 14px',
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 8,
}

const checkboxLabel: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  fontSize: 12,
  color: 'var(--text)',
  padding: '4px 0',
  cursor: 'pointer',
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const FIELD_COL = 260
  const LEADERS_COL = 248
  const COUNTRY_COL = 300

  const [theme, setTheme] = useState<'night' | 'day'>('night')
  const [visibleGroups, setVisibleGroups] = useState<Set<PolicyGroup>>(
    () => new Set(GROUPS.map(g => g.group)),
  )
  const [visibleCountries, setVisibleCountries] = useState<Set<Country>>(
    () => new Set(allCountries.map(c => c.country)),
  )
  const [showLeaders, setShowLeaders] = useState(true)

  useEffect(() => {
    if (theme === 'day') document.documentElement.dataset.theme = 'light'
    else document.documentElement.removeAttribute('data-theme')
  }, [theme])

  const groupsFiltered = useMemo(
    () => GROUPS.filter(g => visibleGroups.has(g.group)),
    [visibleGroups],
  )
  const countries = useMemo(
    () => allCountries.filter(c => visibleCountries.has(c.country)),
    [visibleCountries],
  )

  const gridCols = showLeaders
    ? `${FIELD_COL}px ${LEADERS_COL}px repeat(${countries.length}, ${COUNTRY_COL}px)`
    : `${FIELD_COL}px repeat(${countries.length}, ${COUNTRY_COL}px)`

  const [expandedRows, setExpandedRows] = useState<Set<string>>(() => new Set())

  const toggleRow = (key: string) => {
    setExpandedRows(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const totalFields = groupsFiltered.reduce((n, g) => n + g.fields.length, 0)
  const totalClaims = countries.reduce(
    (acc, c) =>
      acc +
      groupsFiltered.reduce(
        (gAcc, g) =>
          gAcc + g.fields.reduce((fAcc, field) => {
            const fd = g.accessor(c)[field]
            return fAcc + (fd ? Object.keys(fd).length : 0)
          }, 0),
        0,
      ),
    0,
  )

  return (
    <div style={{ minHeight: '100vh', padding: '40px 32px 80px' }}>

      {/* Header */}
      <header style={{ marginBottom: 48, maxWidth: 700 }}>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 14 }}>
          Longevity State
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.7 }}>
          {countries.length} countries · {groupsFiltered.length} policy groups · {totalFields} fields · {totalClaims.toLocaleString('en-US')} claims · claim-level evidence.
        </p>
      </header>

      <nav style={toolbarRow} aria-label="View options">
        <select
          value={theme}
          onChange={e => setTheme(e.target.value as 'night' | 'day')}
          style={selectBase}
          aria-label="Theme"
        >
          <option value="night">Night</option>
          <option value="day">Day</option>
        </select>

        <ToolbarMulti label={`Policy groups (${visibleGroups.size})`}>
          <div style={{ marginBottom: 8 }}>
            <button
              type="button"
              style={{ ...selectBase, padding: '4px 8px', fontSize: 11 }}
              onClick={() => setVisibleGroups(new Set(GROUPS.map(g => g.group)))}
            >
              All groups
            </button>
          </div>
          {GROUPS.map(({ group }) => (
            <label key={group} style={checkboxLabel}>
              <input
                type="checkbox"
                checked={visibleGroups.has(group)}
                onChange={() => {
                  setVisibleGroups(prev => {
                    const next = new Set(prev)
                    if (next.has(group)) {
                      if (next.size <= 1) return prev
                      next.delete(group)
                    } else next.add(group)
                    return next
                  })
                }}
              />
              {groupLabels[group][Locale.EN]}
            </label>
          ))}
        </ToolbarMulti>

        <ToolbarMulti label={`Countries (${visibleCountries.size})`}>
          <div style={{ marginBottom: 8 }}>
            <button
              type="button"
              style={{ ...selectBase, padding: '4px 8px', fontSize: 11 }}
              onClick={() => setVisibleCountries(new Set(allCountries.map(c => c.country)))}
            >
              All countries
            </button>
          </div>
          {allCountries.map(c => (
            <label key={c.country} style={checkboxLabel}>
              <input
                type="checkbox"
                checked={visibleCountries.has(c.country)}
                onChange={() => {
                  setVisibleCountries(prev => {
                    const next = new Set(prev)
                    if (next.has(c.country)) {
                      if (next.size <= 1) return prev
                      next.delete(c.country)
                    } else next.add(c.country)
                    return next
                  })
                }}
              />
              <span aria-hidden style={{ marginRight: 2 }}>{countryFlags[c.country]}</span>
              {countryLabels[c.country][Locale.EN]}
            </label>
          ))}
        </ToolbarMulti>

        <select
          value={showLeaders ? 'yes' : 'no'}
          onChange={e => setShowLeaders(e.target.value === 'yes')}
          style={selectBase}
          aria-label="Leaders column"
        >
          <option value="yes">Leaders: on</option>
          <option value="no">Leaders: off</option>
        </select>
      </nav>

      <div style={{ overflowX: 'auto', marginRight: -32, paddingRight: 32 }}>
        <div style={{ minWidth: FIELD_COL + (showLeaders ? LEADERS_COL : 0) + countries.length * COUNTRY_COL }}>

          {/* Country header row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: gridCols,
            gap: 1,
            paddingBottom: 8,
          }}>
            <div style={stickyCorner} />
            {showLeaders && (
              <div
                style={{
                  ...stickyLeadersCol(FIELD_COL),
                  top: 0,
                  zIndex: 29,
                  padding: '8px 10px 8px 0',
                  borderBottom: '2px solid var(--accent)',
                  alignSelf: 'stretch',
                }}
              >
                <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                  Leaders
                </span>
              </div>
            )}
            {countries.map(c => (
              <div
                key={c.country}
                style={{
                  padding: '8px 12px',
                  borderBottom: '2px solid var(--accent)',
                  position: 'sticky',
                  top: 0,
                  zIndex: 12,
                  background: 'var(--bg)',
                }}
              >
                <div style={{ fontSize: 15, fontWeight: 400, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span aria-hidden>{countryFlags[c.country]}</span>
                  <span>{countryLabels[c.country][Locale.EN]}</span>
                </div>
              </div>
            ))}
          </div>

          {groupsFiltered.map(({ group, fields, accessor }) => (
            <div key={group} style={{ marginTop: 28 }}>

              <div style={{
                display: 'grid',
                gridTemplateColumns: gridCols,
                gap: 1,
                marginBottom: 6,
              }}>
                <div style={{ ...stickyGroupFirstCol, paddingBottom: 4, paddingRight: 12 }}>
                  <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                    {groupLabels[group][Locale.EN]}
                  </span>
                </div>
                {showLeaders && <div style={{ ...stickyLeadersCol(FIELD_COL), paddingBottom: 4 }} />}
                {countries.map(c => (
                  <div key={c.country} style={{ borderTop: '1px solid var(--border)' }} />
                ))}
              </div>

              {fields.map(field => {
                const ft = fieldLabels[field]?.[Locale.EN]
                const maxScore = ft?.maxScore ?? 5
                const rk = rowKey(group, field)
                const open = expandedRows.has(rk)
                const leaders = leadersForField(countries, accessor, field)
                return (
                  <div
                    key={field}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: gridCols,
                      gap: 6,
                      marginBottom: 6,
                      alignItems: 'start',
                    }}
                  >
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
                        <span style={{ color: 'var(--muted)', fontSize: 10, flexShrink: 0, marginTop: 2 }}>
                          {open ? '▲' : '▼'}
                        </span>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text)', lineHeight: 1.35 }}>
                            {ft?.title ?? field}
                          </div>
                          {ft?.description && (
                            <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4, lineHeight: 1.5 }}>
                              {ft.description}
                            </div>
                          )}
                        </div>
                      </div>
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
                          ...stickyLeadersCol(FIELD_COL),
                          paddingTop: 10,
                          paddingRight: 8,
                          cursor: 'pointer',
                          minHeight: 44,
                        }}
                      >
                        {leaders.length === 0 ? (
                          <span style={{ color: 'var(--border-hi)', fontSize: 11 }}>—</span>
                        ) : (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {leaders.map(({ data, score }) => (
                              <LeaderBadge key={data.country} countryKey={data.country} score={score} maxScore={maxScore} />
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {countries.map(c => {
                      const fieldData = accessor(c)[field]
                      if (!fieldData) {
                        return (
                          <div
                            key={c.country}
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
                              background: 'var(--surface)',
                              border: '1px dashed var(--border)',
                              borderRadius: 6,
                              minHeight: 44,
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
                          key={c.country}
                          fieldKey={field}
                          claims={fieldData}
                          maxScore={maxScore}
                          expanded={open}
                          onToggleRow={() => toggleRow(rk)}
                        />
                      )
                    })}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      <footer style={{ marginTop: 80, borderTop: '1px solid var(--border)', paddingTop: 24 }}>
        <p style={{ color: 'var(--muted)', fontSize: 11, fontFamily: 'var(--font-mono)' }}>
          Based on Longevity State policy blueprint · fundlongevity.org
        </p>
      </footer>
    </div>
  )
}
