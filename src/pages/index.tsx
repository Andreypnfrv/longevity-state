import React, { Fragment, useCallback, Dispatch, SetStateAction, useLayoutEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Country,
  PolicyGroup,
  TalentsField, ScienceField, TranslationField, HealthcareField, DataField, InternationalField, SocietalField,
  ResearcherImmigrationClaim, ClinicianImmigrationClaim, ResearchTrainingClaim, ClinicianScientistClaim,
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
  PopulationScreeningClaim,
  SCREENING_PROGRAMME_AGILITY_SCALE,
  type CountryData, type ClaimData,
} from '../schema'
import { GROUPS, type GroupDef } from '../schema/policyGroups'
import { allCountries } from '../countries'
import { groupLabels, fieldLabels, claimLabels, countryLabels, countryFlags, SCREENING_SCALE, Locale } from '../translations'
import { Filters } from '../ui/filters'

export const FIELD_COL = 260
export const LEADERS_COL = 200
const COUNTRY_COL = 300
export const GRID_GAP = 6
export const CELL_PAD = '10px 12px'

export function useExpandRowHoverHighlight() {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null)
  return useCallback((rowKey: string) => {
    const isHovered = hoveredKey === rowKey
    return {
      onMouseEnter: () => setHoveredKey(rowKey),
      onMouseLeave: () => setHoveredKey(h => (h === rowKey ? null : h)),
      isHovered,
    }
  }, [hoveredKey])
}

export function claimRowGridStyle(isHovered: boolean): CSSProperties {
  return {
    ...(isHovered ? { background: 'var(--claim-row-hover-bg)' } : {}),
    borderRadius: 6,
    transition: 'background 0.12s ease',
  }
}

export function claimRowStickyColStyle(isHovered: boolean): Pick<CSSProperties, 'background'> {
  return { background: isHovered ? 'var(--claim-row-hover-bg)' : 'var(--cell-bg)' }
}

export type IndexPageProps = {
  theme: 'night' | 'day'
  onThemeChange: (t: 'night' | 'day') => void
  visibleGroups: Set<PolicyGroup>
  setVisibleGroups: Dispatch<SetStateAction<Set<PolicyGroup>>>
  visibleCountries: Set<Country>
  setVisibleCountries: Dispatch<SetStateAction<Set<Country>>>
  showLeaders: boolean
  setShowLeaders: Dispatch<SetStateAction<boolean>>
}

export function avgScore(claims: Record<string, ClaimData>): number {
  const scores = Object.values(claims).map(c => c.score as number)
  const mean = scores.reduce((a, b) => a + b, 0) / scores.length
  return Math.round(mean * 2) / 2
}

export function leadersForField(
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

export function leadersForClaim(
  list: CountryData[],
  accessor: (c: CountryData) => Record<string, Record<string, ClaimData>>,
  field: string,
  claimKey: string,
): { data: CountryData; score: number }[] {
  const scored: { data: CountryData; score: number }[] = []
  for (const c of list) {
    const claim = accessor(c)[field]?.[claimKey]
    if (claim) scored.push({ data: c, score: claim.score as number })
  }
  if (scored.length === 0) return []
  const best = Math.max(...scored.map(s => s.score))
  const atTop = scored.filter(s => s.score === best)
  const order = new Map(list.map((c, i) => [c.country, i]))
  atTop.sort((a, b) => (order.get(a.data.country) ?? 0) - (order.get(b.data.country) ?? 0))
  return atTop
}

export function orderedClaimKeys(
  list: CountryData[],
  accessor: (c: CountryData) => Record<string, Record<string, ClaimData>>,
  field: string,
): string[] {
  const seen = new Set<string>()
  const out: string[] = []
  for (const c of list) {
    const fd = accessor(c)[field]
    if (!fd) continue
    for (const k of Object.keys(fd)) {
      if (seen.has(k)) continue
      seen.add(k)
      out.push(k)
    }
  }
  out.sort((a, b) => a.localeCompare(b))
  return out
}

function achievedFillDotVar(score: number, maxScore: number): string {
  if (maxScore <= 0 || score <= 0) return 'var(--border-hi)'
  const level = Math.min(5, Math.max(1, Math.round((score / maxScore) * 5)))
  return `var(--dot-${level})`
}

function isMaxScoreHighlight(score: number, maxScore: number): boolean {
  if (maxScore <= 0) return false
  if (maxScore <= 5) return score >= 4.999
  return score >= maxScore - 0.01
}

const STANDARD_SCALE_LABELS: Record<number, string> = {
  1: 'Absent',
  2: 'Weak',
  3: 'Partial',
  4: 'Strong',
  5: 'Exemplary',
}

function getTalentsClaimKey(fieldKey: string, claimKey: string):
  | ResearcherImmigrationClaim | ClinicianImmigrationClaim
  | ResearchTrainingClaim | ClinicianScientistClaim | null {
  if (fieldKey === TalentsField.RESEARCHER_IMMIGRATION) return claimKey as ResearcherImmigrationClaim
  if (fieldKey === TalentsField.CLINICIAN_IMMIGRATION) return claimKey as ClinicianImmigrationClaim
  if (fieldKey === TalentsField.RESEARCH_TRAINING_PIPELINE) return claimKey as ResearchTrainingClaim
  if (fieldKey === TalentsField.CLINICIAN_SCIENTIST_PATHWAY) return claimKey as ClinicianScientistClaim
  return null
}

function getScaleLevelText(fieldKey: string, claimKey: string, score: number): string | null {
  const level = Math.floor(score)
  const talentsKey = getTalentsClaimKey(fieldKey, claimKey)
  if (talentsKey !== null) {
    const fieldScales = TALENTS_CLAIM_SCALES[fieldKey as TalentsField] as Record<string, Record<number, string>> | undefined
    if (!fieldScales) return null
    const scales = fieldScales[claimKey]
    return scales?.[level] ?? null
  }
  if (fieldKey === HealthcareField.POPULATION_SCREENINGS) {
    if (claimKey === PopulationScreeningClaim.SCREENING_PROGRAMME_AGILITY) {
      const n = Math.round(score)
      return SCREENING_PROGRAMME_AGILITY_SCALE[n] ?? null
    }
    const entry = SCREENING_SCALE[level]
    if (!entry) return null
    const suffix = score % 1 !== 0 ? ' (narrow subset)' : ''
    return `${entry.label}${suffix}: ${entry.description}`
  }
  if (fieldKey === HealthcareField.AGING_BIOMARKER_COLLECTIONS) {
    return BIOMARKER_CLAIM_SCALES[claimKey as BiomarkerCollectionClaim]?.[level] ?? null
  }
  if (fieldKey === HealthcareField.PREVENTIVE_TRIALS) {
    return PREVENTIVE_TRIAL_CLAIM_SCALES[claimKey as PreventiveTrialsClaim]?.[level] ?? null
  }
  if (fieldKey === HealthcareField.GERO_THERAPEUTIC_ENDPOINTS) {
    return GERO_ENDPOINT_CLAIM_SCALES[claimKey as GeroEndpointsClaim]?.[level] ?? null
  }
  if (fieldKey === DataField.OPEN_ACCESS_TO_HEALTH_DATA) {
    return OPEN_DATA_CLAIM_SCALES[claimKey as OpenDataClaim]?.[level] ?? null
  }
  if (fieldKey === DataField.INTEROPERABILITY_STANDARDS) {
    return INTEROPERABILITY_CLAIM_SCALES[claimKey as InteroperabilityClaim]?.[level] ?? null
  }
  if (fieldKey === DataField.STANDARDIZED_TRIAL_ENDPOINTS) {
    return RESEARCH_CLINICAL_CLAIM_SCALES[claimKey as ResearchClinicalClaim]?.[level] ?? null
  }
  if (fieldKey === ScienceField.RESEARCH_FUNDING) {
    return RESEARCH_FUNDING_CLAIM_SCALES[claimKey as ResearchFundingClaim]?.[level] ?? null
  }
  if (fieldKey === ScienceField.GENE_EDITING_REGULATION) {
    return GENE_EDITING_CLAIM_SCALES[claimKey as GeneEditingClaim]?.[level] ?? null
  }
  if (fieldKey === TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES) {
    return BREAKTHROUGH_AGENCY_CLAIM_SCALES[claimKey as BreakthroughAgencyClaim]?.[level] ?? null
  }
  if (fieldKey === TranslationField.ADAPTIVE_LICENSING) {
    return ADAPTIVE_LICENSING_CLAIM_SCALES[claimKey as AdaptiveLicensingClaim]?.[level] ?? null
  }
  if (fieldKey === TranslationField.TRIAL_DESIGN_MODERNIZATION) {
    return TRIAL_DESIGN_CLAIM_SCALES[claimKey as TrialDesignClaim]?.[level] ?? null
  }
  if (fieldKey === TranslationField.REGULATORY_SANDBOXES) {
    return REGULATORY_SANDBOX_CLAIM_SCALES[claimKey as RegulatorySandboxClaim]?.[level] ?? null
  }
  if (fieldKey === TranslationField.AGING_ENDPOINT_ECOSYSTEM) {
    return AGING_ENDPOINT_CLAIM_SCALES[claimKey as AgingEndpointClaim]?.[level] ?? null
  }
  if (fieldKey === InternationalField.REGULATORY_HARMONIZATION) {
    return REGULATORY_HARMONIZATION_CLAIM_SCALES[claimKey as RegulatoryHarmonizationClaim]?.[level] ?? null
  }
  if (fieldKey === InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE) {
    return SHARED_PHYSICAL_INFRA_CLAIM_SCALES[claimKey as SharedPhysicalInfraClaim]?.[level] ?? null
  }
  if (fieldKey === InternationalField.INTERNATIONAL_RESEARCH_NETWORK) {
    return INTL_RESEARCH_NETWORK_CLAIM_SCALES[claimKey as IntlResearchNetworkClaim]?.[level] ?? null
  }
  if (fieldKey === SocietalField.SOCIETAL_READINESS) {
    return SOCIETAL_READINESS_CLAIM_SCALES[claimKey as SocietalReadinessClaim]?.[level] ?? null
  }
  return STANDARD_SCALE_LABELS[Math.round(score)] ?? null
}

function sortedScaleEntries(scales: Record<number, string>): { level: number; text: string }[] {
  return Object.entries(scales)
    .map(([k, text]) => ({ level: Number(k), text }))
    .filter(e => !Number.isNaN(e.level))
    .sort((a, b) => a.level - b.level)
}

function standardScaleLegendLines(): string[] {
  return [1, 2, 3, 4, 5].map(n => `${n} — ${STANDARD_SCALE_LABELS[n]}`)
}

export function parseScaleLegendEntries(fieldKey: string, claimKey: string): { level: number; text: string }[] {
  return getClaimScaleLegendLines(fieldKey, claimKey)
    .map(line => {
      const m = line.match(/^(\d+)\s*[—–-]\s*(.+)$/u)
      if (!m) return null
      const level = Number(m[1])
      if (Number.isNaN(level)) return null
      return { level, text: m[2].trim() }
    })
    .filter((e): e is { level: number; text: string } => e != null)
}

export function getClaimScaleLegendLines(fieldKey: string, claimKey: string): string[] {
  const talentsKey = getTalentsClaimKey(fieldKey, claimKey)
  if (talentsKey !== null) {
    const fieldScales = TALENTS_CLAIM_SCALES[fieldKey as TalentsField] as Record<string, Record<number, string>> | undefined
    const scales = fieldScales?.[claimKey]
    if (scales) return sortedScaleEntries(scales).map(e => `${e.level} — ${e.text}`)
    return standardScaleLegendLines()
  }
  if (fieldKey === HealthcareField.POPULATION_SCREENINGS) {
    if (claimKey === PopulationScreeningClaim.SCREENING_PROGRAMME_AGILITY) {
      return sortedScaleEntries(SCREENING_PROGRAMME_AGILITY_SCALE).map(e => `${e.level} — ${e.text}`)
    }
    return Object.entries(SCREENING_SCALE)
      .map(([k, v]) => ({ level: Number(k), text: `${v.label}: ${v.description}` }))
      .filter(e => !Number.isNaN(e.level))
      .sort((a, b) => a.level - b.level)
      .map(e => `${e.level} — ${e.text}`)
  }
  const from = (scales: Record<number, string> | undefined): string[] | null => {
    if (!scales) return null
    const rows = sortedScaleEntries(scales)
    return rows.length ? rows.map(e => `${e.level} — ${e.text}`) : null
  }
  if (fieldKey === HealthcareField.AGING_BIOMARKER_COLLECTIONS) {
    return from(BIOMARKER_CLAIM_SCALES[claimKey as BiomarkerCollectionClaim]) ?? standardScaleLegendLines()
  }
  if (fieldKey === HealthcareField.PREVENTIVE_TRIALS) {
    return from(PREVENTIVE_TRIAL_CLAIM_SCALES[claimKey as PreventiveTrialsClaim]) ?? standardScaleLegendLines()
  }
  if (fieldKey === HealthcareField.GERO_THERAPEUTIC_ENDPOINTS) {
    return from(GERO_ENDPOINT_CLAIM_SCALES[claimKey as GeroEndpointsClaim]) ?? standardScaleLegendLines()
  }
  if (fieldKey === DataField.OPEN_ACCESS_TO_HEALTH_DATA) {
    return from(OPEN_DATA_CLAIM_SCALES[claimKey as OpenDataClaim]) ?? standardScaleLegendLines()
  }
  if (fieldKey === DataField.INTEROPERABILITY_STANDARDS) {
    return from(INTEROPERABILITY_CLAIM_SCALES[claimKey as InteroperabilityClaim]) ?? standardScaleLegendLines()
  }
  if (fieldKey === DataField.STANDARDIZED_TRIAL_ENDPOINTS) {
    return from(RESEARCH_CLINICAL_CLAIM_SCALES[claimKey as ResearchClinicalClaim]) ?? standardScaleLegendLines()
  }
  if (fieldKey === ScienceField.RESEARCH_FUNDING) {
    return from(RESEARCH_FUNDING_CLAIM_SCALES[claimKey as ResearchFundingClaim]) ?? standardScaleLegendLines()
  }
  if (fieldKey === ScienceField.GENE_EDITING_REGULATION) {
    return from(GENE_EDITING_CLAIM_SCALES[claimKey as GeneEditingClaim]) ?? standardScaleLegendLines()
  }
  if (fieldKey === TranslationField.BIOTECH_BREAKTHROUGH_AGENCIES) {
    return from(BREAKTHROUGH_AGENCY_CLAIM_SCALES[claimKey as BreakthroughAgencyClaim]) ?? standardScaleLegendLines()
  }
  if (fieldKey === TranslationField.ADAPTIVE_LICENSING) {
    return from(ADAPTIVE_LICENSING_CLAIM_SCALES[claimKey as AdaptiveLicensingClaim]) ?? standardScaleLegendLines()
  }
  if (fieldKey === TranslationField.TRIAL_DESIGN_MODERNIZATION) {
    return from(TRIAL_DESIGN_CLAIM_SCALES[claimKey as TrialDesignClaim]) ?? standardScaleLegendLines()
  }
  if (fieldKey === TranslationField.REGULATORY_SANDBOXES) {
    return from(REGULATORY_SANDBOX_CLAIM_SCALES[claimKey as RegulatorySandboxClaim]) ?? standardScaleLegendLines()
  }
  if (fieldKey === TranslationField.AGING_ENDPOINT_ECOSYSTEM) {
    return from(AGING_ENDPOINT_CLAIM_SCALES[claimKey as AgingEndpointClaim]) ?? standardScaleLegendLines()
  }
  if (fieldKey === InternationalField.REGULATORY_HARMONIZATION) {
    return from(REGULATORY_HARMONIZATION_CLAIM_SCALES[claimKey as RegulatoryHarmonizationClaim]) ?? standardScaleLegendLines()
  }
  if (fieldKey === InternationalField.SHARED_PHYSICAL_INFRASTRUCTURE) {
    return from(SHARED_PHYSICAL_INFRA_CLAIM_SCALES[claimKey as SharedPhysicalInfraClaim]) ?? standardScaleLegendLines()
  }
  if (fieldKey === InternationalField.INTERNATIONAL_RESEARCH_NETWORK) {
    return from(INTL_RESEARCH_NETWORK_CLAIM_SCALES[claimKey as IntlResearchNetworkClaim]) ?? standardScaleLegendLines()
  }
  if (fieldKey === SocietalField.SOCIETAL_READINESS) {
    return from(SOCIETAL_READINESS_CLAIM_SCALES[claimKey as SocietalReadinessClaim]) ?? standardScaleLegendLines()
  }
  return standardScaleLegendLines()
}

export function claimTodoModel(
  fieldKey: string,
  claimKey: string,
  score: number | null | undefined,
  maxScore: number,
): { kind: 'none' } | { kind: 'done' } | { kind: 'next'; items: string[] } {
  const entries = parseScaleLegendEntries(fieldKey, claimKey)
  if (entries.length === 0) return { kind: 'none' }
  const maxLv = Math.max(...entries.map(e => e.level))
  if (score == null || !Number.isFinite(Number(score))) return { kind: 'none' }
  const cur = Math.min(maxScore, Math.max(1, Math.floor(Number(score))))
  if (cur >= maxLv) return { kind: 'done' }
  const items = entries.filter(e => e.level > cur).map(e => `${e.level} — ${e.text}`)
  return items.length > 0 ? { kind: 'next', items } : { kind: 'done' }
}

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
          background: 'var(--tooltip-bg)',
          border: '1px solid var(--border-hi)',
          borderRadius: 5,
          padding: '6px 10px',
          fontSize: 10,
          color: 'var(--tooltip-fg)',
          whiteSpace: 'normal',
          maxWidth: 260,
          zIndex: 200,
          lineHeight: 1.55,
          pointerEvents: 'none',
          boxShadow: 'var(--shadow-tooltip)',
        }}>
          {text}
        </span>
      )}
    </span>
  )
}

export function ScoreDots({ score, maxScore = 5, size = 7 }: { score: number; maxScore?: number; size?: number }) {
  const fillColor = achievedFillDotVar(score, maxScore)
  const dots = Array.from({ length: maxScore }, (_, i) => i + 1)
  return (
    <span style={{ display: 'inline-flex', gap: 3, alignItems: 'center' }}>
      {dots.map(i => {
        const fill = Math.min(Math.max(score - (i - 1), 0), 1)
        const pct = fill * 100
        let bg: string
        if (fill >= 1) bg = fillColor
        else if (fill <= 0) bg = 'var(--border-hi)'
        else bg = `linear-gradient(90deg, ${fillColor} ${pct}%, var(--border-hi) ${pct}%)`
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

function ClaimRow({
  fieldKey,
  claimKey,
  data,
  maxScore = 5,
  noTopBorder,
  detailExpanded,
  onDetailToggle,
  hideChevron,
  detailToggleOnClick = true,
}: {
  fieldKey: string
  claimKey: string
  data: ClaimData
  maxScore?: number
  noTopBorder?: boolean
  detailExpanded?: boolean
  onDetailToggle?: () => void
  hideChevron?: boolean
  detailToggleOnClick?: boolean
}) {
  const [localDetailOpen, setLocalDetailOpen] = useState(false)
  const controlled = onDetailToggle !== undefined
  const open = controlled ? Boolean(detailExpanded) : localDetailOpen
  const t = claimLabels[fieldKey]?.[claimKey]?.[Locale.EN]

  return (
    <div
      onClick={e => {
        e.stopPropagation()
        if (!detailToggleOnClick) return
        if (controlled) onDetailToggle()
        else setLocalDetailOpen(o => !o)
      }}
      style={{
        borderTop: noTopBorder ? undefined : '1px solid var(--border)',
        padding: '8px 0',
        cursor: detailToggleOnClick ? 'pointer' : 'default',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
        <Tooltip text={getScaleLevelText(fieldKey, claimKey, data.score)}>
          <ScoreDots score={data.score} maxScore={maxScore} size={6} />
        </Tooltip>
        <span style={{ fontSize: 11, color: 'var(--cell-text)', flex: 1, lineHeight: 1.4, opacity: 0.92 }}>
          {t?.title ?? claimKey}
        </span>
        {!hideChevron && (
          <span style={{ color: 'var(--cell-muted)', fontSize: 9, flexShrink: 0 }}>
            {open ? '▲' : '▼'}
          </span>
        )}
      </div>

      {open && (
        <div style={{ marginTop: 6, paddingLeft: 18 }}>
          {data.text && (
            <p style={{ fontSize: 11, color: 'var(--cell-muted)', lineHeight: 1.6, marginBottom: 6 }}>
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
                <span style={{ color: 'var(--cell-muted)', fontSize: 10, marginLeft: 6 }}>
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

export function SingleClaimCell({
  fieldKey,
  claimKey,
  data,
  maxScore = 5,
  detailExpanded,
  onDetailToggle,
  hideChevron,
  detailToggleOnClick = true,
  rowHoverHighlight,
  stopOuterClickPropagation = true,
}: {
  fieldKey: string
  claimKey: string
  data: ClaimData
  maxScore?: number
  detailExpanded: boolean
  onDetailToggle: () => void
  hideChevron?: boolean
  detailToggleOnClick?: boolean
  rowHoverHighlight?: boolean
  stopOuterClickPropagation?: boolean
}) {
  const maxHi = isMaxScoreHighlight(data.score, maxScore)
  const fill = rowHoverHighlight
    ? 'transparent'
    : maxHi
      ? 'var(--cell-max-highlight-bg)'
      : 'var(--cell-bg)'
  return (
    <div
      onClick={stopOuterClickPropagation ? e => e.stopPropagation() : undefined}
      style={{
        background: fill,
        border: '1px solid var(--border)',
        borderRadius: 6,
        padding: '6px 10px',
        minHeight: 44,
        boxSizing: 'border-box',
        transition: 'background 0.12s ease',
      }}
    >
      <ClaimRow
        fieldKey={fieldKey}
        claimKey={claimKey}
        data={data}
        maxScore={maxScore}
        noTopBorder
        detailExpanded={detailExpanded}
        onDetailToggle={onDetailToggle}
        hideChevron={hideChevron}
        detailToggleOnClick={detailToggleOnClick}
      />
    </div>
  )
}

export function FieldCell({
  fieldKey,
  claims,
  maxScore = 5,
  expanded,
  onToggleRow,
  showInlineClaimList = true,
  fieldRowKey,
  expandedClaimDetails,
  onToggleClaimDetail,
  hideInlineClaimChevrons,
}: {
  fieldKey: string
  claims: Record<string, ClaimData>
  maxScore?: number
  expanded: boolean
  onToggleRow: () => void
  showInlineClaimList?: boolean
  fieldRowKey?: string
  expandedClaimDetails?: Set<string>
  onToggleClaimDetail?: (detailKey: string) => void
  hideInlineClaimChevrons?: boolean
}) {
  const score = avgScore(claims)
  const claimKeys = Object.keys(claims)
  const cellTooltip = claimKeys.length === 1
    ? getScaleLevelText(fieldKey, claimKeys[0]!, score)
    : (STANDARD_SCALE_LABELS[Math.round(score)] ?? null)
  const maxHi = isMaxScoreHighlight(score, maxScore)

  return (
    <div
      onClick={onToggleRow}
      style={{
        background: maxHi ? 'var(--cell-max-highlight-bg)' : 'var(--cell-bg)',
        border: '1px solid var(--border)',
        borderRadius: 6,
        padding: CELL_PAD,
        transition: 'border-color 0.15s',
        minHeight: 44,
        height: '100%',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-hi)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        <Tooltip text={cellTooltip}>
          <ScoreDots score={score} maxScore={maxScore} />
        </Tooltip>
      </div>

      {expanded && showInlineClaimList && (
        <div style={{ marginTop: 8, flex: 1, minHeight: 0 }} onClick={e => e.stopPropagation()}>
          {Object.entries(claims).map(([key, data], i) => {
            const dk = fieldRowKey && onToggleClaimDetail ? `${fieldRowKey}::${key}` : undefined
            return (
              <ClaimRow
                key={key}
                fieldKey={fieldKey}
                claimKey={key}
                data={data}
                maxScore={maxScore}
                noTopBorder={i === 0}
                detailExpanded={dk !== undefined ? expandedClaimDetails?.has(dk) : undefined}
                onDetailToggle={dk !== undefined ? () => onToggleClaimDetail!(dk) : undefined}
                hideChevron={hideInlineClaimChevrons}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export const stickyFirstCol: React.CSSProperties = {
  position: 'sticky',
  left: 0,
  zIndex: 8,
  background: 'var(--cell-bg)',
  boxShadow: 'var(--shadow-sticky)',
}

export const stickyCornerHeaderCol: React.CSSProperties = {
  position: 'sticky',
  left: 0,
  zIndex: 30,
  background: 'var(--cell-bg)',
  boxShadow: 'var(--shadow-corner)',
}

export function stickyLeadersHeaderCol(): React.CSSProperties {
  return {
    position: 'sticky',
    left: FIELD_COL,
    zIndex: 29,
    background: 'var(--cell-bg)',
    boxShadow: 'var(--shadow-sticky)',
  }
}

export const stickyGroupFirstCol: React.CSSProperties = {
  position: 'sticky',
  left: 0,
  zIndex: 9,
  background: 'var(--cell-bg)',
  boxShadow: 'var(--shadow-sticky)',
}

export function stickyLeadersCol(): React.CSSProperties {
  return {
    position: 'sticky',
    left: FIELD_COL,
    zIndex: 7,
    background: 'var(--cell-bg)',
    boxShadow: 'var(--shadow-sticky)',
  }
}

const LEADER_FLAG_SIZE = 26

export function LeaderBadge({ countryKey }: { countryKey: CountryData['country'] }) {
  const name = countryLabels[countryKey][Locale.EN]
  return (
    <Tooltip text={name}>
      <span
        role="img"
        aria-label={name}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: LEADER_FLAG_SIZE,
          lineHeight: 1,
          cursor: 'default',
          userSelect: 'none',
        }}
      >
        {countryFlags[countryKey]}
      </span>
    </Tooltip>
  )
}

export function rowKey(group: PolicyGroup, field: string) {
  return `${group}::${field}`
}

export default function IndexPage({
  theme,
  onThemeChange,
  visibleGroups,
  setVisibleGroups,
  visibleCountries,
  setVisibleCountries,
  showLeaders,
  setShowLeaders,
}: IndexPageProps) {
  const location = useLocation()

  const groupsFiltered = useMemo(
    () => GROUPS.filter((g: GroupDef) => visibleGroups.has(g.group)),
    [visibleGroups],
  )
  const countries = useMemo(
    () => allCountries.filter(c => visibleCountries.has(c.country)),
    [visibleCountries],
  )

  const { allRowKeys, allDetailKeys } = useMemo(() => {
    const rowKeys: string[] = []
    const detailKeys: string[] = []
    for (const g of groupsFiltered) {
      for (const field of g.fields) {
        const rk = rowKey(g.group, field)
        rowKeys.push(rk)
        for (const ck of orderedClaimKeys(countries, g.accessor, field)) {
          detailKeys.push(`${rk}::${ck}`)
        }
      }
    }
    return { allRowKeys: rowKeys, allDetailKeys: detailKeys }
  }, [groupsFiltered, countries])

  const gridCols = showLeaders
    ? `${FIELD_COL}px ${LEADERS_COL}px repeat(${countries.length}, ${COUNTRY_COL}px)`
    : `${FIELD_COL}px repeat(${countries.length}, ${COUNTRY_COL}px)`

  const numCols = 1 + (showLeaders ? 1 : 0) + countries.length
  const gapTotal = GRID_GAP * Math.max(0, numCols - 1)
  const tableMinWidth =
    FIELD_COL + (showLeaders ? LEADERS_COL : 0) + countries.length * COUNTRY_COL + gapTotal

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

  const everythingExpanded =
    allRowKeys.length > 0 &&
    allRowKeys.every(rk => expandedRows.has(rk)) &&
    allDetailKeys.every(dk => expandedClaimDetails.has(dk))
  const showExpandAll = allRowKeys.length > 0 && !everythingExpanded
  const showCollapseAll = expandedRows.size > 0 || expandedClaimDetails.size > 0

  const onExpandAll = useCallback(() => {
    setExpandedRows(new Set(allRowKeys))
    setExpandedClaimDetails(new Set(allDetailKeys))
  }, [allRowKeys, allDetailKeys])

  const onCollapseAll = useCallback(() => {
    setExpandedRows(new Set())
    setExpandedClaimDetails(new Set())
  }, [])

  const totalFields = groupsFiltered.reduce((n: number, g: GroupDef) => n + g.fields.length, 0)
  const totalClaims = countries.reduce(
    (acc: number, c) =>
      acc +
      groupsFiltered.reduce(
        (gAcc: number, g: GroupDef) =>
          gAcc + g.fields.reduce((fAcc: number, field: string) => {
            const fd = g.accessor(c)[field]
            return fAcc + (fd ? Object.keys(fd).length : 0)
          }, 0),
        0,
      ),
    0,
  )
  const claimTypesCount = groupsFiltered.reduce(
    (n: number, g: GroupDef) =>
      n + g.fields.reduce((fn: number, field: string) => fn + Object.keys(claimLabels[field] ?? {}).length, 0),
    0,
  )

  const tableHeadScrollRef = useRef<HTMLDivElement>(null)
  const tableBodyScrollRef = useRef<HTMLDivElement>(null)
  const syncScrollLock = useRef(false)

  const onTableHeadScroll = useCallback(() => {
    const h = tableHeadScrollRef.current
    const b = tableBodyScrollRef.current
    if (!h || !b || syncScrollLock.current) return
    if (b.scrollLeft === h.scrollLeft) return
    syncScrollLock.current = true
    b.scrollLeft = h.scrollLeft
    syncScrollLock.current = false
  }, [])

  const onTableBodyScroll = useCallback(() => {
    const h = tableHeadScrollRef.current
    const b = tableBodyScrollRef.current
    if (!h || !b || syncScrollLock.current) return
    if (h.scrollLeft === b.scrollLeft) return
    syncScrollLock.current = true
    h.scrollLeft = b.scrollLeft
    syncScrollLock.current = false
  }, [])

  useLayoutEffect(() => {
    const h = tableHeadScrollRef.current
    const b = tableBodyScrollRef.current
    if (!h || !b) return
    const left = Math.min(h.scrollLeft, b.scrollLeft)
    h.scrollLeft = left
    b.scrollLeft = left
  }, [gridCols, tableMinWidth, showLeaders, countries.length])

  return (
    <>
        <div style={{ padding: '40px 32px 0' }}>
          <header style={{ marginBottom: 36, maxWidth: 700 }}>
            <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.7 }}>
              {countries.length} countries · {groupsFiltered.length} policy groups · {totalFields} fields · {claimTypesCount} claim types · {totalClaims.toLocaleString('en-US')} claims · claim-level evidence.
            </p>
          </header>

          <Filters
            theme={theme}
            onThemeChange={onThemeChange}
            visibleGroups={visibleGroups}
            setVisibleGroups={setVisibleGroups}
            visibleCountries={visibleCountries}
            setVisibleCountries={setVisibleCountries}
            showLeaders={showLeaders}
            setShowLeaders={setShowLeaders}
            showExpandAll={showExpandAll}
            showCollapseAll={showCollapseAll}
            onExpandAll={onExpandAll}
            onCollapseAll={onCollapseAll}
          />
        </div>

        <div style={{
          margin: '24px 32px 0',
          background: 'var(--cell-bg)',
          border: '1px solid var(--border)',
          borderRadius: 8,
        }}>
          <div style={{
            position: 'sticky',
            top: 0,
            zIndex: 25,
            background: 'var(--cell-bg)',
            borderRadius: '8px 8px 0 0',
          }}>
            <div
              ref={tableHeadScrollRef}
              className="hide-scrollbar"
              onScroll={onTableHeadScroll}
              style={{ overflowX: 'auto', overflowY: 'hidden' }}
            >
              <div style={{ minWidth: tableMinWidth, padding: GRID_GAP, paddingBottom: 8, boxSizing: 'border-box' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: gridCols,
                  gap: GRID_GAP,
                }}>
                  <div style={{ ...stickyCornerHeaderCol, minHeight: 1 }} />

                  {showLeaders && (
                    <div style={{
                      ...stickyLeadersHeaderCol(),
                      padding: '8px 10px 8px 0',
                      borderBottom: '2px solid var(--accent)',
                      alignSelf: 'stretch',
                    }}>
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
                        background: 'var(--cell-bg)',
                      }}
                    >
                      <Link
                        to={{ pathname: `/country/${c.country}`, search: location.search }}
                        style={{
                          fontSize: 15,
                          fontWeight: 400,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          color: 'var(--cell-text)',
                          textDecoration: 'none',
                        }}
                      >
                        <span aria-hidden>{countryFlags[c.country]}</span>
                        <span>{countryLabels[c.country][Locale.EN]}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            ref={tableBodyScrollRef}
            onScroll={onTableBodyScroll}
            style={{ overflowX: 'auto', overflowY: 'visible' }}
          >
            <div style={{ minWidth: tableMinWidth, padding: GRID_GAP, paddingTop: 0, boxSizing: 'border-box' }}>

            {([
              { key: 'le', label: 'Life expectancy at birth (years)', pick: (m: CountryData['metrics']) => m.lifeExpectancy, fmt: 'dec' as const },
              { key: 'hale', label: 'Healthy life expectancy at birth (years)', pick: (m: CountryData['metrics']) => m.healthyLifeExpectancy, fmt: 'dec' as const },
              { key: 'p60', label: 'Population aged 60+ (%)', pick: (m: CountryData['metrics']) => m.populationShare60Plus, fmt: 'pct' as const },
            ] as const).map((row, ri) => (
              <div
                key={row.key}
                style={{
                  display: 'grid',
                  gridTemplateColumns: gridCols,
                  gap: GRID_GAP,
                  marginTop: ri === 0 ? 6 : 0,
                }}
              >
                <div style={{
                  ...stickyFirstCol,
                  padding: '6px 12px 6px 0',
                  fontSize: 11,
                  lineHeight: 1.35,
                  color: 'var(--muted)',
                  alignSelf: 'center',
                }}>
                  {row.label}
                </div>
                {showLeaders && (
                  <div style={{
                    ...stickyLeadersCol(),
                    padding: '6px 10px 6px 0',
                    background: 'var(--cell-bg)',
                  }} />
                )}
                {countries.map(c => {
                  const met = row.pick(c.metrics)
                  const main = row.fmt === 'dec'
                    ? met.value.toFixed(1)
                    : `${(met.value * 100).toFixed(1)}%`
                  return (
                    <div
                      key={c.country}
                      style={{
                        padding: '6px 12px',
                        background: 'var(--cell-bg)',
                        borderBottom: ri === 2 ? '1px solid var(--border)' : undefined,
                      }}
                    >
                      <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--cell-text)' }}>{main}</div>
                      <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 2, lineHeight: 1.3 }}>
                        {met.year} · {met.source}
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}

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
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <span style={{ color: 'var(--muted)', fontSize: 10, flexShrink: 0, marginTop: 2, visibility: 'hidden', userSelect: 'none' }} aria-hidden>▼</span>
                      <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                        {groupLabels[group][Locale.EN]}
                      </span>
                    </div>
                  </div>
                  {showLeaders && (
                    <div style={{
                      ...stickyLeadersCol(),
                      background: headerBand,
                      padding: '10px 10px 8px 0',
                      borderTop: gi > 0 ? '1px solid var(--border)' : undefined,
                      borderBottom: '1px solid var(--group-outline)',
                    }} />
                  )}
                  {countries.map(c => (
                    <div
                      key={c.country}
                      style={{
                        background: headerBand,
                        borderTop: gi > 0 ? '1px solid var(--border)' : undefined,
                        borderBottom: '1px solid var(--group-outline)',
                      }}
                    />
                  ))}
                </div>

                {fields.map(field => {
                  const ft = fieldLabels[field]?.[Locale.EN]
                  const maxScore = ft?.maxScore ?? 5
                  const rk = rowKey(group, field)
                  const open = expandedRows.has(rk)
                  const leaders = leadersForField(countries, accessor, field)
                  const claimCountMax = countries.reduce((m, c) => {
                    const fd = accessor(c)[field]
                    return Math.max(m, fd ? Object.keys(fd).length : 0)
                  }, 0)
                  const claimKeysOrdered = orderedClaimKeys(countries, accessor, field)

                  return (
                    <Fragment key={field}>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: gridCols,
                          gap: GRID_GAP,
                          marginBottom: 6,
                          alignItems: 'stretch',
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
                              {!open && claimCountMax > 0 && (
                                <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 4 }}>
                                  {claimCountMax} claims
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
                              ...stickyLeadersCol(),
                              paddingTop: 10,
                              paddingRight: 8,
                              cursor: 'pointer',
                              minHeight: 44,
                              alignSelf: 'stretch',
                            }}
                          >
                            {leaders.length === 0 ? (
                              <span style={{ color: 'var(--border-hi)', fontSize: 11 }}>—</span>
                            ) : (
                              <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                gap: 6,
                                alignContent: 'flex-start',
                                alignItems: 'flex-start',
                              }}>
                                {leaders.map(({ data }) => (
                                  <LeaderBadge key={data.country} countryKey={data.country} />
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
                              key={c.country}
                              fieldKey={field}
                              claims={fieldData}
                              maxScore={maxScore}
                              expanded={open}
                              showInlineClaimList={!open}
                              fieldRowKey={rk}
                              expandedClaimDetails={expandedClaimDetails}
                              onToggleClaimDetail={toggleClaimDetail}
                              onToggleRow={() => toggleRow(rk)}
                            />
                          )
                        })}
                      </div>

                      {open && claimKeysOrdered.map(claimKey => {
                        const claimDetailKey = `${rk}::${claimKey}`
                        const claimDetailOpen = expandedClaimDetails.has(claimDetailKey)
                        const claimLeaders = leadersForClaim(countries, accessor, field, claimKey)
                        const ct = claimLabels[field]?.[claimKey]?.[Locale.EN]
                        const rowHover = bindClaimRowHover(claimDetailKey)
                        const rh = rowHover.isHovered
                        return (
                          <div
                            key={claimKey}
                            onMouseEnter={rowHover.onMouseEnter}
                            onMouseLeave={rowHover.onMouseLeave}
                            style={{
                              display: 'grid',
                              gridTemplateColumns: gridCols,
                              gap: GRID_GAP,
                              marginBottom: 6,
                              alignItems: 'stretch',
                              ...claimRowGridStyle(rh),
                            }}
                          >
                            <div style={{ ...stickyFirstCol, ...claimRowStickyColStyle(rh), paddingTop: 8, paddingRight: 20, paddingLeft: 10 }}>
                              <div
                                role="button"
                                tabIndex={0}
                                onClick={() => toggleClaimDetail(claimDetailKey)}
                                onKeyDown={e => {
                                  if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault()
                                    toggleClaimDetail(claimDetailKey)
                                  }
                                }}
                                style={{ cursor: 'pointer' }}
                              >
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginLeft: 16 }}>
                                  <span style={{ color: 'var(--muted)', fontSize: 10, flexShrink: 0, marginTop: 2 }}>
                                    {claimDetailOpen ? '▲' : '▼'}
                                  </span>
                                  <div style={{ minWidth: 0, fontSize: 11, fontWeight: 500, color: 'var(--text)', lineHeight: 1.4 }}>
                                    {ct?.title ?? claimKey}
                                  </div>
                                </div>
                              </div>
                              {claimDetailOpen && (
                                <div
                                  style={{ marginTop: 10, marginLeft: 16, paddingLeft: 18, paddingBottom: 4 }}
                                  onClick={e => e.stopPropagation()}
                                >
                                  {getClaimScaleLegendLines(field, claimKey).map((line, i) => (
                                    <div
                                      key={i}
                                      style={{ fontSize: 10, color: 'var(--muted)', lineHeight: 1.55, marginBottom: 3 }}
                                    >
                                      {line}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>

                            {showLeaders && (
                              <div
                                style={{
                                  ...stickyLeadersCol(),
                                  ...claimRowStickyColStyle(rh),
                                  paddingTop: 8,
                                  paddingRight: 8,
                                  minHeight: 44,
                                  alignSelf: 'stretch',
                                }}
                                onClick={e => e.stopPropagation()}
                              >
                                {claimLeaders.length === 0 ? (
                                  <span style={{ color: 'var(--border-hi)', fontSize: 11 }}>—</span>
                                ) : (
                                  <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    gap: 6,
                                    alignContent: 'flex-start',
                                    alignItems: 'flex-start',
                                  }}>
                                    {claimLeaders.map(({ data }) => (
                                      <LeaderBadge key={data.country} countryKey={data.country} />
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}

                            {countries.map(c => {
                              const fieldData = accessor(c)[field]
                              const data = fieldData?.[claimKey]
                              if (!data) {
                                return (
                                  <div
                                    key={c.country}
                                    style={{
                                      background: rh ? 'transparent' : 'var(--cell-bg)',
                                      border: '1px dashed var(--border)',
                                      borderRadius: 6,
                                      minHeight: 44,
                                      height: '100%',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      transition: 'background 0.12s ease',
                                    }}
                                    onClick={e => e.stopPropagation()}
                                  >
                                    <span style={{ color: 'var(--border-hi)', fontSize: 11 }}>—</span>
                                  </div>
                                )
                              }
                              return (
                                <SingleClaimCell
                                  key={c.country}
                                  fieldKey={field}
                                  claimKey={claimKey}
                                  data={data}
                                  maxScore={maxScore}
                                  detailExpanded={expandedClaimDetails.has(claimDetailKey)}
                                  onDetailToggle={() => toggleClaimDetail(claimDetailKey)}
                                  rowHoverHighlight={rh}
                                />
                              )
                            })}
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
