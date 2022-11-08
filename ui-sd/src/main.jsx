import React from 'react'
import ReactDOM from 'react-dom/client'
import ButtonConnect from './App'
import Suscribe from './ButtonSuscribe'
import { SocketProvider } from './context/socketContext'
import Publish from './Publish'
import PublishSubscriber from './PublishSubscriber'
import JwtProvider from './context/jwtContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SocketProvider>
      <JwtProvider>
      <ButtonConnect />
      <Suscribe/>
      <Publish/>
      <PublishSubscriber/>
      </JwtProvider>
    </SocketProvider>
  </React.StrictMode>
)
