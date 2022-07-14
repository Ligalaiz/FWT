import { css } from '@emotion/react';
import { media } from '@src/styles';

export const main = css`
  padding-top: 11.3rem;
  height: 100%;
  display: grid;
  grid-template-rows: 24.2rem 1fr 10rem;

  @media (${media.sm}) {
    grid-template-rows: 6.1rem 1fr 10rem;
    padding-top: 13.3rem;
  }
`;
