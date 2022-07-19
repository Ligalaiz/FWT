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
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100%;

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
    max-width: 116rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .wrapper {
    min-width: 32rem;
    height: 100%;
  }

  input:focus {
    outline: none;
  }

  body {
    &[data-theme='dark'] {
      --color-text: ${color['white-color']};
      --color-text-placeholder: ${color['white-color-light']};
      --color-bg: ${color['black-color']};
      --color-ui-base: ${color['white-color']};
      --color-ui-reverse: ${color['black-color']};
      --color-ui-reverse-field: ${color['black-color-light-x1']};
      --color-ui-border: ${color['white-color']};
      --color-ui-pag-disabled: ${color['white-color-light']};
      --color-ui-pag-hover: ${color['gray-color-light-x5']};
      --color-ui-header: ${color['black-color']};
      --color-ui-header-shadow1: ${color['white-color-light-x2']};
      --color-ui-header-shadow2: ${color['white-color-light-x3']};
    }

    &[data-theme='light'] {
      --color-text: ${color['black-color']};
      --color-text-placeholder: ${color['black-color-light']};
      --color-bg: ${color['gray-color-light-x1']};
      --color-ui-base: ${color['black-color']};
      --color-ui-reverse: ${color['white-color']};
      --color-ui-reverse-field: ${color['white-color']};
      --color-ui-border: ${color['black-color-light']};
      --color-ui-pag-disabled: ${color['gray-color-light-x4']};
      --color-ui-pag-hover: ${color['gray-color-light-x4']};
      --color-ui-header: ${color['gray-color-light-x1']};
      --color-ui-header-shadow1: ${color['black-color-light-x2']};
      --color-ui-header-shadow2: ${color['black-color-light-x3']};
    }

    position: relative;

    height: 100%;
    margin: 0;
    padding: 0;

    font-family: 'Roboto', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--color-text);

    background-color: var(--color-bg);
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
    border-left: 15px solid ${color['gray-color']};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 3rem ${color['white-color']}; inset !important;
  }

  #root {
    height: 100%;
  }

  .theme {
  fill: var(--color-ui-base);
}
`;
