import { css } from '@emotion/react';

export const filterBarWrap = css`
  padding: 0 2rem;

  @media (min-width: 1160px) {
    padding: 0;
  }
`;

export const filterBar = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 1.2rem;
  justify-content: center;
  align-items: center;
  max-width: 28rem;
  margin: 0 auto;

  @media (min-width: 500px) {
    max-width: unset;
  }

  @media (min-width: 559px) {
    grid-template-columns: repeat(2, minmax(160px, 280px));
    max-width: 700px;
  }

  @media (min-width: 740px) {
    grid-template-columns: repeat(4, minmax(160px, 1fr));
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(4, minmax(160px, 220px));
    max-width: 94rem;
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, minmax(220px, 265px));
    max-width: 112rem;
  }
`;
