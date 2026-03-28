import { useCallback, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation, useMatch, useNavigate } from 'react-router-dom'
import { Country, PolicyGroup } from './schema'
import { countryFlags, countryLabels, Locale } from './translations'
import {
  parseFiltersFromSearch,
  filtersToSearchParams,
  readStoredTheme,
  THEME_STORAGE_KEY,
} from './ui/filters'
import IndexPage from './pages/index'
import CountryPage from './pages/countries'

function AppShell() {
  const [theme, setTheme] = useState<'night' | 'day'>(readStoredTheme)
  const handleThemeChange = useCallback((t: 'night' | 'day') => {
    setTheme(t)
    try { localStorage.setItem(THEME_STORAGE_KEY, t) } catch { /* ignore */ }
  }, [])

  const location = useLocation()
  const navigate = useNavigate()
  const countryMatch = useMatch('/country/:countryId')
  const countryRouteId = countryMatch?.params.countryId
  const countryHeaderId =
    countryRouteId && (Object.values(Country) as string[]).includes(countryRouteId)
      ? (countryRouteId as Country)
      : null

  const [visibleGroups, setVisibleGroups] = useState<Set<PolicyGroup>>(
    () => parseFiltersFromSearch(window.location.search).visibleGroups,
  )
  const [visibleCountries, setVisibleCountries] = useState<Set<Country>>(
    () => parseFiltersFromSearch(window.location.search).visibleCountries,
  )
  const [showLeaders, setShowLeaders] = useState<boolean>(
    () => parseFiltersFromSearch(window.location.search).showLeaders,
  )

  useEffect(() => {
    if (theme === 'day') document.documentElement.dataset.theme = 'light'
    else document.documentElement.removeAttribute('data-theme')
  }, [theme])

  useEffect(() => {
    const onPop = () => {
      const p = parseFiltersFromSearch(window.location.search)
      setVisibleGroups(p.visibleGroups)
      setVisibleCountries(p.visibleCountries)
      setShowLeaders(p.showLeaders)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    const params = filtersToSearchParams(visibleGroups, visibleCountries, showLeaders)
    const next = params.toString()
    const want = next ? `?${next}` : ''
    if (location.search !== want) {
      navigate({ pathname: location.pathname, search: next ? `?${next}` : '' }, { replace: true })
    }
  }, [visibleGroups, visibleCountries, showLeaders, location.pathname, location.search, navigate])

  const pageProps = {
    theme,
    onThemeChange: handleThemeChange,
    visibleGroups,
    setVisibleGroups,
    visibleCountries,
    setVisibleCountries,
    showLeaders,
    setShowLeaders,
  }

  return (
    <div style={{ flex: 1, minHeight: 0, minWidth: 0, width: '100%', display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          flex: 1,
          minHeight: 0,
          minWidth: 0,
          overflowX: 'hidden',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div style={{ padding: '40px 32px 0' }}>
          <header style={{ marginBottom: 24, maxWidth: 900 }}>
            {countryHeaderId ? (
              <h1 style={{
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: 0,
                fontFamily: 'var(--font-display)',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.35em',
              }}>
                <Link
                  to={{ pathname: '/', search: location.search }}
                  style={{ color: 'var(--text)', textDecoration: 'none' }}
                >
                  Longevity State
                </Link>
                <span style={{ color: 'var(--border-hi)', userSelect: 'none', fontWeight: 500 }} aria-hidden>/</span>
                <span style={{ color: 'var(--text)', display: 'inline-flex', alignItems: 'center', gap: '0.35em' }}>
                  <span aria-hidden style={{ lineHeight: 1 }}>{countryFlags[countryHeaderId]}</span>
                  {countryLabels[countryHeaderId][Locale.EN]}
                </span>
              </h1>
            ) : (
            <h1 style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
                marginBottom: 0,
              fontFamily: 'var(--font-display)',
            }}>
              Longevity State
            </h1>
            )}
          </header>
        </div>

        <Routes>
          <Route path="/" element={<IndexPage {...pageProps} />} />
          <Route path="/country/:countryId" element={<CountryPage {...pageProps} />} />
        </Routes>

        <footer style={{ margin: '48px 32px 40px', borderTop: '1px solid var(--border)', paddingTop: 24 }}>
          <p style={{ color: 'var(--muted)', fontSize: 11, fontFamily: 'var(--font-mono)', lineHeight: 1.6 }}>
            Based on the Longevity State policy blueprint from{' '}
            <a
              href="https://fundlongevity.org/en/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)', textDecoration: 'none' }}
            >
              Fund Longevity
            </a>
            .{' '}
            <a
              href="https://fundlongevity.org/en/asks/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)', textDecoration: 'none' }}
            >
              Funding asks
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
