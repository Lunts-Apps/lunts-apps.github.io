import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './bitsquid-app.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
