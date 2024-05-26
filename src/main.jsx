import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import menus from './components/data.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App menus={menus} />
  </React.StrictMode>,
)
