import React from 'react'
import ReactDOM from 'react-dom/client'
import CompactDeck from './pages/CompactDeck.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CompactDeck />
  </React.StrictMode>,
)
