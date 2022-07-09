import { css } from '@emotion/react';
import { color } from '@src/styles';

export const errorWrap = css`
  position: relative;
  height: 100vh;

  background-color: ${color['blue-color']};

  z-index: 0;
`;

export const errorBg = css`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 3.7rem;

  overflow: hidden;
`;

export const errorContent = css`
  position: relative;

  display: block;
  margin: 0 auto;
  width: 9.4rem;
  height: 3.7rem;

  overflow: hidden;
`;

export const errorMessage = css`
  position: absolute;
  left: 7.2rem;
  top: 7.2rem;

  width: 27.1rem;
  height: 24.9rem;

  z-index: 10;
  transform: translate3d(-4.9238px, -2.01957px, 0px);
`;

export const errorOctopus = css`
  position: absolute;
  top: 9.4rem;
  left: 35.6rem;

  height: 23rem;
  width: 18.8rem;

  z-index: 9;
  transform: translate3d(-2.4619px, -2.01957px, 0px);
`;

export const errorSpaceship = css`
  position: absolute;
  top: 15rem;
  left: 43.2rem;

  height: 15.6rem;
  width: 44rem;

  z-index: 8;

  transform: translate3d(-2.4619px, -2.01957px, 0px);
`;

export const errorCircle = css`
  position: absolute;
  top: 29.7rem;
  left: 37.1rem;

  height: 4.9rem;
  width: 16.6rem;

  z-index: 7;

  transform: translate3d(-2.4619px, -2.01957px, 0px);
`;

export const errorShadow = css`
  position: absolute;
  top: 26.3rem;
  left: 44.2rem;

  height: 7.5rem;
  width: 43rem;

  z-index: 6;

  transform: translate3d(-2.4619px, -2.01957px, 0px);
`;

export const errorHouse = css`
  position: absolute;
  top: 7.3rem;
  left: 46.7rem;

  height: 12.3rem;
  width: 30.4rem;

  z-index: 5;

  transform: translate3d(12.3095px, 4.03915px, 0px);
`;

export const errorSmHouse = css`
  position: absolute;
  left: 76.2rem;
  top: 11.3rem;

  height: 5rem;
  width: 11.6rem;

  z-index: 4;

  transform: translate3d(17.9643px, 6.05872px, 0px);
`;

export const bgImage = css`
  position: absolute;

  height: 41.5rem;
  width: 100%;

  z-index: 1;
`;
