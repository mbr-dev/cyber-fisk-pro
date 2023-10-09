import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./router";
import { CyberProvider } from "./context/cyber";
import { LessonProvider } from "./context/lesson";

import { defaultTheme } from "./themes/defaultTheme";
import { GlobalStyled } from "./themes/globalTheme";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyberProvider>
          <LessonProvider>
            <Router />
          </LessonProvider>
        </CyberProvider>
      </BrowserRouter>

      <GlobalStyled />
    </ThemeProvider>
  )
}
