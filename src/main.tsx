import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import PreviewGate from './PreviewGate'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PreviewGate>
      <App />
    </PreviewGate>
  </StrictMode>,
)
