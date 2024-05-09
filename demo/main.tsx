import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  /* react18严格模式会让useEffect执行多次，即使deps为[] */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
