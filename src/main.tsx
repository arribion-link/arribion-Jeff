import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.tsx'

import TargetCursor from "./components/TargetCursor"

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
    <App />
    </BrowserRouter>
  </StrictMode>,
)
