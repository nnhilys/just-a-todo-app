import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppMain } from '../app/main'
import './style/main.css'

const container = document.getElementById('root')
if (container === null)
  throw new Error('Failed to find the root element')

const app = (
  <StrictMode>
    <AppMain />
  </StrictMode>
)

createRoot(container).render(app)
