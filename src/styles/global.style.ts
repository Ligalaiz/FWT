import fontLight1 from '@assets/fonts/roboto-light.woff';
import fontLight2 from '@assets/fonts/roboto-light.woff2';
import fontRegular1 from '@assets/fonts/roboto-regular.woff';
import fontRegular2 from '@assets/fonts/roboto-regular.woff2';
import fontMedium1 from '@assets/fonts/roboto-medium.woff';
import fontMedium2 from '@assets/fonts/roboto-medium.woff2';
import fontBold1 from '@assets/fonts/roboto-bold.woff';
import fontBold2 from '@assets/fonts/roboto-bold.woff2';
import fontBlack1 from '@assets/fonts/roboto-black.woff';
import fontBlack2 from '@assets/fonts/roboto-black.woff2';
import { css } from '@emotion/react';
import { color } from './variables.style';

export const globalStyle = css`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url(${fontLight1}) format('woff'), url(${fontLight2}) format('woff2');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(${fontRegular1}) format('woff'), url(${fontRegular2}) format('woff2');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url(${fontMedium1}) format('woff'), url(${fontMedium2}) format('woff2');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: url(${fontBold1}) format('woff'), url(${fontBold2}) format('woff2');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    src: url(${fontBlack1}) format('woff'), url(${fontBlack2}) format('woff2');
  }

  html {
    box-sizing: border-box;
    overflow: -moz-scrollbars-vertical;
    overflow-y: auto;
    overflow-x: hidden;

    &:focus-within {
      scroll-behavior: smooth;
    }
  }

  *,
  ::before,
  ::after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: inherit;
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure,
  blockquote,
  dl,
  dd {
    font-weight: inherit;
    font-size: inherit;
    margin: 0;
  }

  :root {
    font-size: 10px;
  }

  .container {
    width: 100%;
    max-width: 102.4rem;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .wrapper {
    min-width: 32rem;
  }

  input:focus {
    outline: none;
  }

  body {
    position: relative;

    margin: 0;
    padding: 0;

    font-family: 'Roboto', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    color: ${color['black-color']};

    background-color: ${color['gray-color-light']};
    text-rendering: optimizeSpeed;
    user-select: none;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  img,
  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    vertical-align: top;
    top: 0px;
    left: 0px;
  }

  .visually-hidden {
    position: absolute;
    width: 0.1rem;
    height: 0.1rem;
    margin: -0.1rem;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0 0 0 0);
  }

  .visually-hidden:not(:focus):not(:active) {
    position: absolute;
    width: 0.1rem;
    height: 0.1rem;
    margin: -0.1rem;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .reset-list {
    margin: 0;
    padding: 0;

    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 1.4rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${color['gray-color']};
    background-clip: padding-box;
    border-radius: 0.5rem;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 3rem $white-color inset !important;
  }
`;
