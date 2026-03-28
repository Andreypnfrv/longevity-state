import React, { useState } from 'react'
import { Country, PolicyGroup } from '../schema'
import { allCountries } from '../countries'
import { groupLabels, countryLabels, countryFlags, Locale } from '../translations'
import { GROUPS } from '../schema/policyGroups'

export const THEME_STORAGE_KEY = 'longevity-state-theme'

export function readStoredTheme(): 'night' | 'day' {
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY)
    if (v === 'day' || v === 'night') return v
  } catch { /* ignore */ }
  return 'night'
}

export function parseFiltersFromSearch(search: string): {
  visibleGroups: Set<PolicyGroup>
  visibleCountries: Set<Country>
  showLeaders: boolean
} {
  const params = new URLSearchParams(search)
  const allGroupSet = new Set(GROUPS.map(g => g.group))
  const allowedCountry = new Set(allCountries.map(c => c.country))

  let visibleGroups: Set<PolicyGroup> = allGroupSet
  const gRaw = params.get('groups')
  if (gRaw != null && gRaw !== '') {
    const parsed = new Set<PolicyGroup>()
    for (const p of gRaw.split(',').map(s => s.trim()).filter(Boolean)) {
      if ((Object.values(PolicyGroup) as string[]).includes(p)) parsed.add(p as PolicyGroup)
    }
    if (parsed.size > 0) visibleGroups = parsed
  }

  let visibleCountries: Set<Country> = new Set(allowedCountry)
  const cRaw = params.get('countries')
  if (cRaw != null && cRaw !== '') {
    const parsed = new Set<Country>()
    for (const p of cRaw.split(',').map(s => s.trim()).filter(Boolean)) {
      if (allowedCountry.has(p as Country)) parsed.add(p as Country)
    }
    if (parsed.size > 0) visibleCountries = parsed
  }

  const l = params.get('leaders')
  const showLeaders = !(l === '0' || l === 'false' || l === 'off')

  return { visibleGroups, visibleCountries, showLeaders }
}

export function filtersToSearchParams(
  visibleGroups: Set<PolicyGroup>,
  visibleCountries: Set<Country>,
  showLeaders: boolean,
): URLSearchParams {
  const params = new URLSearchParams()
  const allGroups =
    visibleGroups.size === GROUPS.length && GROUPS.every(({ group }) => visibleGroups.has(group))
  if (!allGroups) {
    const order = GROUPS.map(({ group }) => group).filter(group => visibleGroups.has(group))
    params.set('groups', order.join(','))
  }
  const isFullCountrySelection =
    visibleCountries.size === allCountries.length
    && allCountries.every(c => visibleCountries.has(c.country))
  if (!isFullCountrySelection) {
    const order = allCountries.map(c => c.country).filter(c => visibleCountries.has(c))
    params.set('countries', order.join(','))
  }
  if (!showLeaders) params.set('leaders', '0')
  return params
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
  menuKey,
  openMenuKey,
  setOpenMenuKey,
}: {
  label: string
  children: React.ReactNode
  menuKey: string
  openMenuKey: string | null
  setOpenMenuKey: React.Dispatch<React.SetStateAction<string | null>>
}) {
  const open = openMenuKey === menuKey
  return (
    <details
      open={open}
      onToggle={e => {
        const el = e.currentTarget
        if (el.open) setOpenMenuKey(menuKey)
        else if (openMenuKey === menuKey) setOpenMenuKey(null)
      }}
      style={{ position: 'relative' }}
    >
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
          boxShadow: 'var(--shadow-dropdown)',
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
  maxWidth: '100%',
  minWidth: 0,
  boxSizing: 'border-box',
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

const toolbarBtn: React.CSSProperties = {
  ...selectBase,
  padding: '4px 8px',
  fontSize: 11,
}

export function Filters({
  theme,
  onThemeChange,
  visibleGroups,
  setVisibleGroups,
  visibleCountries,
  setVisibleCountries,
  showLeaders,
  setShowLeaders,
  showExpandAll,
  showCollapseAll,
  onExpandAll,
  onCollapseAll,
}: {
  theme: 'night' | 'day'
  onThemeChange: (t: 'night' | 'day') => void
  visibleGroups: Set<PolicyGroup>
  setVisibleGroups: React.Dispatch<React.SetStateAction<Set<PolicyGroup>>>
  visibleCountries: Set<Country>
  setVisibleCountries: React.Dispatch<React.SetStateAction<Set<Country>>>
  showLeaders: boolean
  setShowLeaders: React.Dispatch<React.SetStateAction<boolean>>
  showExpandAll: boolean
  showCollapseAll: boolean
  onExpandAll: () => void
  onCollapseAll: () => void
}) {
  const [toolbarMenuOpen, setToolbarMenuOpen] = useState<string | null>(null)

  return (
    <nav style={toolbarRow} aria-label="View options">
      <select
        value={theme}
        onChange={e => onThemeChange(e.target.value as 'night' | 'day')}
        onFocus={() => setToolbarMenuOpen(null)}
        style={selectBase}
        aria-label="Theme"
      >
        <option value="night">Night</option>
        <option value="day">Day</option>
      </select>

      <ToolbarMulti
        label={`Policy groups (${visibleGroups.size})`}
        menuKey="groups"
        openMenuKey={toolbarMenuOpen}
        setOpenMenuKey={setToolbarMenuOpen}
      >
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

      <ToolbarMulti
        label={`Countries (${visibleCountries.size})`}
        menuKey="countries"
        openMenuKey={toolbarMenuOpen}
        setOpenMenuKey={setToolbarMenuOpen}
      >
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
        onFocus={() => setToolbarMenuOpen(null)}
        style={selectBase}
        aria-label="Leaders column"
      >
        <option value="yes">Leaders: on</option>
        <option value="no">Leaders: off</option>
      </select>

      {showExpandAll && (
        <button type="button" style={toolbarBtn} onClick={() => { onExpandAll(); setToolbarMenuOpen(null) }}>
          Expand all
        </button>
      )}
      {showCollapseAll && (
        <button type="button" style={toolbarBtn} onClick={() => { onCollapseAll(); setToolbarMenuOpen(null) }}>
          Collapse all
        </button>
      )}
    </nav>
  )
}
