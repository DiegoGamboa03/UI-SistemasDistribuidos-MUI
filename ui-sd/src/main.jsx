import React from 'react'
import ReactDOM from 'react-dom/client'
import { SocketProvider } from './context/socketContext'
import App from './app'
import JwtProvider from './context/jwtContext'
import ClientProvider from './context/clientidContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SocketProvider>
      <JwtProvider>
        <ClientProvider>
          <App />
        </ClientProvider>
      </JwtProvider>
    </SocketProvider>
  </React.StrictMode>
)
