import { type FormEvent, type ReactNode, useState } from 'react'

const STORAGE_KEY = 'longevity_preview_ok'
const PASSWORD_B64 = 'aW1tb3J0YWxpc20='

function expectedPassword(): string {
  return atob(PASSWORD_B64)
}

export default function PreviewGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(
    () => localStorage.getItem(STORAGE_KEY) === '1',
  )
  const [value, setValue] = useState('')
  const [bad, setBad] = useState(false)

  if (unlocked) return <>{children}</>

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (value === expectedPassword()) {
      localStorage.setItem(STORAGE_KEY, '1')
      setUnlocked(true)
    } else {
      setBad(true)
    }
  }

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'var(--bg)',
      }}
    >
      <form
        onSubmit={onSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          width: '100%',
          maxWidth: '18rem',
        }}
      >
        <input
          type="password"
          autoComplete="current-password"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setBad(false)
          }}
          placeholder="Password"
          style={{
            padding: '0.65rem 0.75rem',
            borderRadius: 6,
            border: '1px solid var(--border)',
            background: 'var(--surface)',
            color: 'var(--text)',
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '0.65rem 0.75rem',
            borderRadius: 6,
            border: '1px solid var(--group-outline)',
            background: 'color-mix(in srgb, var(--accent) 18%, var(--surface))',
            color: 'var(--text)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Enter
        </button>
        {bad ? (
          <p style={{ color: 'var(--dot-1)', fontSize: '0.875rem' }}>Wrong password</p>
        ) : null}
      </form>
    </div>
  )
}
