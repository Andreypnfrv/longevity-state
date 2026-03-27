import React, { useState } from 'react'
import {
  PolicyGroup,
  TalentsField, ScienceField, TranslationField, HealthcareField, DataField, InternationalField,
  BiomarkerCollectionClaim, BIOMARKER_CLAIM_SCALES,
  PreventiveTrialsClaim, PREVENTIVE_TRIAL_CLAIM_SCALES,
  GeroEndpointsClaim, GERO_ENDPOINT_CLAIM_SCALES,
  type CountryData, type ClaimData,
} from '../schema'
import { allCountries } from '../countries'
import { groupLabels, fieldLabels, claimLabels, countryLabels, countryFlags, screeningScaleLabels, SCREENING_SCALE, Locale } from '../translations'
// screeningScaleLabels and SCREENING_SCALE are derived from schema — no raw numbers in rendering

// ─── Types ───────────────────────────────────────────────────────────────────

type AnyField =
  | TalentsField | ScienceField | TranslationField
  | HealthcareField | DataField | InternationalField

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
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Round to nearest 0.5 */
function avgScore(claims: Record<string, ClaimData>): number {
  const scores = Object.values(claims).map(c => c.score as number)
  const mean = scores.reduce((a, b) => a + b, 0) / scores.length
  return Math.round(mean * 2) / 2
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
function getScaleLevelText(fieldKey: string, claimKey: string, score: number): string | null {
  const level = Math.floor(score) // half-points floor to the level below
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
    return desc ? `${level}/5 — ${desc}` : null
  }
  if (fieldKey === HealthcareField.PREVENTIVE_TRIALS) {
    const scales = PREVENTIVE_TRIAL_CLAIM_SCALES[claimKey as PreventiveTrialsClaim]
    if (!scales) return null
    const desc = scales[level]
    return desc ? `${level}/5 — ${desc}` : null
  }
  if (fieldKey === HealthcareField.GERO_THERAPEUTIC_ENDPOINTS) {
    const scales = GERO_ENDPOINT_CLAIM_SCALES[claimKey as GeroEndpointsClaim]
    if (!scales) return null
    const desc = scales[level]
    return desc ? `${level}/5 — ${desc}` : null
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
      {dots.map(i => (
        <span key={i} style={{
          width: size, height: size, borderRadius: '50%',
          background: i <= score ? color : 'var(--border-hi)',
          flexShrink: 0,
        }} />
      ))}
      <span style={{ fontSize: 9, color: 'var(--muted)', marginLeft: 2, fontFamily: 'var(--font-mono)', minWidth: 22 }}>
        {score}/{maxScore}
      </span>
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

// ─── Field cell ───────────────────────────────────────────────────────────────

function FieldCell({ fieldKey, claims, maxScore = 5 }: { fieldKey: string; claims: Record<string, ClaimData>; maxScore?: number }) {
  const [open, setOpen] = useState(false)
  const score = avgScore(claims)

  return (
    <div
      onClick={() => setOpen(o => !o)}
      style={{
        background: scoreBg(score, maxScore),
        border: `1px solid var(--border)`,
        borderRadius: 6,
        padding: '10px 12px',
        cursor: 'pointer',
        transition: 'border-color 0.15s',
        minHeight: 44,
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-hi)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
    >
      {/* Header: aggregate score + claim count */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <ScoreDots score={score} maxScore={maxScore} />
        <span style={{ color: 'var(--muted)', fontSize: 10 }}>
          {Object.keys(claims).length} claims {open ? '▲' : '▼'}
        </span>
      </div>

      {/* Claims list */}
      {open && (
        <div style={{ marginTop: 8 }}>
          {Object.entries(claims).map(([key, data]) => (
            <ClaimRow key={key} fieldKey={fieldKey} claimKey={key} data={data} maxScore={maxScore} />
          ))}
        </div>
      )}
    </div>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const countries = allCountries
  const FIELD_COL = 260
  const COUNTRY_COL = 300

  const totalFields = GROUPS.reduce((n, g) => n + g.fields.length, 0)

  return (
    <div style={{ minHeight: '100vh', padding: '40px 32px 80px' }}>

      {/* Header */}
      <header style={{ marginBottom: 48, maxWidth: 700 }}>
        <p style={{ color: 'var(--accent)', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12, fontFamily: 'var(--font-mono)' }}>
          Policy Intelligence
        </p>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 14 }}>
          Longevity State
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.7 }}>
          {countries.length} countries · {GROUPS.length} policy groups · {totalFields} fields · claim-level evidence.
          Click any cell to expand claims. Click a claim to see evidence and sources.
        </p>
      </header>

      {/* Score legend — standard 1–5 */}
      <div style={{ display: 'flex', gap: 20, marginBottom: 8, flexWrap: 'wrap' }}>
        {[1, 2, 3, 4, 5].map(s => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <ScoreDots score={s} maxScore={5} />
            <span style={{ color: 'var(--muted)', fontSize: 11 }}>
              {['Absent', 'Weak', 'Partial', 'Strong', 'Exemplary'][s - 1]}
            </span>
          </div>
        ))}
        <span style={{ color: 'var(--border-hi)', fontSize: 11, alignSelf: 'center' }}>
          · Cell = avg of claims
        </span>
      </div>
      {/* Screening 0–6 ladder */}
      <details style={{ marginBottom: 32 }}>
        <summary style={{ color: 'var(--muted)', fontSize: 11, cursor: 'pointer', userSelect: 'none', listStyle: 'none' }}>
          <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>▶ 0–6 screening scale</span>
          <span style={{ color: 'var(--border-hi)', marginLeft: 8 }}>
            (used for Population-Scale Screenings)
          </span>
        </summary>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 10, paddingLeft: 4 }}>
          {screeningScaleLabels.map(({ level, label, description }) => (
            <div key={level} style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <ScoreDots score={level} maxScore={6} size={6} />
              <span style={{ color: 'var(--text)', fontSize: 11, fontWeight: 500, minWidth: 110 }}>{label}</span>
              <span style={{ color: 'var(--muted)', fontSize: 11 }}>{description}</span>
            </div>
          ))}
        </div>
      </details>

      <div style={{ minWidth: FIELD_COL + countries.length * COUNTRY_COL }}>

          {/* Country header row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: `${FIELD_COL}px repeat(${countries.length}, ${COUNTRY_COL}px)`,
            gap: 1,
            position: 'sticky',
            top: 0,
            zIndex: 10,
            background: 'var(--bg)',
            paddingBottom: 8,
          }}>
            <div />
            {countries.map(c => (
              <div key={c.country} style={{ padding: '8px 12px', borderBottom: '2px solid var(--accent)' }}>
                <div style={{ fontSize: 15, fontWeight: 400, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span aria-hidden>{countryFlags[c.country]}</span>
                  <span>{countryLabels[c.country][Locale.EN]}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Groups */}
          {GROUPS.map(({ group, fields, accessor }) => (
            <div key={group} style={{ marginTop: 28 }}>

              {/* Group label */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: `${FIELD_COL}px repeat(${countries.length}, ${COUNTRY_COL}px)`,
                gap: 1,
                marginBottom: 6,
              }}>
                <div style={{ paddingBottom: 4 }}>
                  <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                    {groupLabels[group][Locale.EN]}
                  </span>
                </div>
                {countries.map(c => (
                  <div key={c.country} style={{ borderTop: '1px solid var(--border)' }} />
                ))}
              </div>

              {/* Field rows */}
              {fields.map(field => {
                const ft = fieldLabels[field]?.[Locale.EN]
                const maxScore = ft?.maxScore ?? 5
                return (
                  <div key={field} style={{
                    display: 'grid',
                    gridTemplateColumns: `${FIELD_COL}px repeat(${countries.length}, ${COUNTRY_COL}px)`,
                    gap: 6,
                    marginBottom: 6,
                    alignItems: 'start',
                  }}>
                    {/* Field label */}
                    <div style={{ paddingTop: 10, paddingRight: 20 }}>
                      <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text)', lineHeight: 1.35 }}>
                        {ft?.title ?? field}
                      </div>
                      {ft?.description && (
                        <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4, lineHeight: 1.5 }}>
                          {ft.description}
                        </div>
                      )}
                    </div>

                    {/* Country cells */}
                    {countries.map(c => {
                      const fieldData = accessor(c)[field]
                      if (!fieldData) return (
                        <div key={c.country} style={{
                          background: 'var(--surface)', border: '1px dashed var(--border)',
                          borderRadius: 6, minHeight: 44, display: 'flex',
                          alignItems: 'center', justifyContent: 'center',
                        }}>
                          <span style={{ color: 'var(--border-hi)', fontSize: 11 }}>—</span>
                        </div>
                      )
                      return <FieldCell key={c.country} fieldKey={field} claims={fieldData} maxScore={maxScore} />
                    })}
                  </div>
                )
              })}
            </div>
          ))}
      </div>

      <footer style={{ marginTop: 80, borderTop: '1px solid var(--border)', paddingTop: 24 }}>
        <p style={{ color: 'var(--muted)', fontSize: 11, fontFamily: 'var(--font-mono)' }}>
          Based on Longevity State policy blueprint · fundlongevity.org
        </p>
      </footer>
    </div>
  )
}
