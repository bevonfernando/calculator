import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Calcu from './Calcu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calcu/>
  </StrictMode>,
)
