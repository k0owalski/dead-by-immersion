import { createGlobalStyle } from "styled-components";

import MontserratBold from 'assets/fonts/Montserrat-Bold.woff2';
import MontserratSemiBold from 'assets/fonts/Montserrat-SemiBold.woff2';
import MontserratMedium from 'assets/fonts/Montserrat-Medium.woff2';
import MontserratRegular from 'assets/fonts/Montserrat-Regular.woff2';
import MontserratLight from 'assets/fonts/Montserrat-Light.woff2';
import OxygenBold from 'assets/fonts/Oxygen-Bold.woff2';
import OxygenRegular from 'assets/fonts/Oxygen-Regular.woff2';
import OxygenLight from 'assets/fonts/Oxygen-Light.woff2';

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

    --color-tile: 38, 38, 38;
    --color-tile-lighter: 51, 51, 51;
    --color-tile-lightest: 64, 64, 64;

    --media-small: 480px;
    --media-medium: 1024px;
    --media-large: 1366px;

    --max-width: 1440px;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;

    background-color: rgb(var(--color-background));
    color: rgb(var(--color-text));
  }

  h1, h2, h3, h4, h5, h6, .heading {
    font-family: 'Oxygen';
    font-weight: 700;
  }

  button {
    background: transparent;
    border: none;
  }

`;

export default GlobalStyle;
