import React from 'react'
import ReactDOM from 'react-dom/client'
import { SocketProvider } from './context/socketContext'
import App from './app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SocketProvider>
      <App />
    </SocketProvider>
  </React.StrictMode>
)
