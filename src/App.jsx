import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { CyberProvider } from './context/cyber';

function App() {
  return (
    <>
      <CyberProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CyberProvider>
    </>
  )
}

export default App
