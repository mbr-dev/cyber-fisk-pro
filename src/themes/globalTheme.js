import { createGlobalStyle} from "styled-components";

import UbuntuRegular from "../fonts/Ubuntu-Regular.ttf";
import UbuntuMedium from "../fonts/Ubuntu-Medium.ttf";
import UbuntuMediumItalic from "../fonts/Ubuntu-MediumItalic.ttf";
import UbuntuLight from "../fonts/Ubuntu-Light.ttf";
import UbuntuLightItalic from "../fonts/Ubuntu-LightItalic.ttf";
import UbuntuItalic from "../fonts/Ubuntu-Italic.ttf";
import UbuntuBold from "../fonts/Ubuntu-Bold.ttf";
import UbuntuBoldItalic from "../fonts/Ubuntu-BoldItalic.ttf";

export const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuMediumItalic}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuLightItalic}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuBoldItalic}) format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.white};
    -webkit-font-smoothing: antialiased;
  }

  body, p, input, button, span, textarea, select {
    font-size: 1rem;
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;
  }
`;