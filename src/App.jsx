import { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { CyberProvider } from './context/cyber';
import { LessonProvider } from './context/lesson';

function App() {
  return (
    <>
      <CyberProvider>
        <LessonProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </LessonProvider>
      </CyberProvider>
    </>
  )
}

export default App
