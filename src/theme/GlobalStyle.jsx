import { createGlobalStyle } from "styled-components";

import MontserratBold from 'assets/Montserrat-Bold.woff2';
import MontserratSemiBold from 'assets/Montserrat-SemiBold.woff2';
import MontserratMedium from 'assets/Montserrat-Medium.woff2';
import MontserratRegular from 'assets/Montserrat-Regular.woff2';
import MontserratLight from 'assets/Montserrat-Light.woff2';
import OxygenBold from 'assets/Oxygen-Bold.woff2';
import OxygenRegular from 'assets/Oxygen-Regular.woff2';
import OxygenLight from 'assets/Oxygen-Light.woff2';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Montserrat';
    src: url('${MontserratBold}') format('woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('${MontserratSemiBold}') format('woff2');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('${MontserratMedium}') format('woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('${MontserratRegular}') format('woff2');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('${MontserratLight}') format('woff2');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Oxygen';
    src: url('${OxygenBold}') format('woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Oxygen';
    src: url('${OxygenRegular}') format('woff2');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Oxygen';
    src: url('${OxygenLight}') format('woff2');
    font-weight: 300;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    --color-background: 26, 26, 26;
    --color-text: 244, 244, 244;
    --color-accent: 237, 188, 90;

    --media-small: 480px;
    --media-medium: 1024px;
    --media-large: 1366px;
  }

  body {
    font-family: 'Montserrat', sans-serif;

    background-color: rgb(var(--color-background));
    color: rgb(var(--color-text));
  }

  h1, h2, h3, h4, h5, h6, .heading {
    font-family: 'Oxygen';
    font-weight: 700;
  }

`;

export default GlobalStyle;
