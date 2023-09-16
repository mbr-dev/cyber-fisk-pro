import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import { CyberProvider } from './context/cyber';
import { LessonProvider } from './context/lesson';

import { defaultTheme } from './themes/defaultTheme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyberProvider>
        <LessonProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </LessonProvider>
      </CyberProvider>
    </ThemeProvider>
  )
}

export default App
