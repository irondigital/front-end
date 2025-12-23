import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Form from './compo/form.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form></Form>
    
  </StrictMode>,
)
