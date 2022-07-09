import font from '@assets/fonts/roboto-regular.woff';
import { css } from '@emotion/react';
import { color } from './variables';

export const globalStyle = css`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(${font});
  }

  html {
    box-sizing: border-box;
    overflow: -moz-scrollbars-vertical;
    overflow-y: scroll;
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
    font-size: 1rem;
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
    font-size: 1.6rem;
    line-height: 1.5;
    color: ${color['white-color']};

    text-rendering: optimizeSpeed;
    user-select: none;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
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
