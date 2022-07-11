import { css } from '@emotion/react';
import { media } from '@src/styles';

export const filterBarWrap = css`
  padding: 0 2rem;

  @media (${media.custom6}) {
    padding: 0;
  }
`;

export const filterBar = css`
  display: grid;
  gap: 1.2rem;
  max-width: 28rem;
  margin: 0 auto;

  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
  align-items: center;

  @media (${media.custom1}) {
    max-width: unset;
  }

  @media (${media.custom2}) {
    grid-template-columns: repeat(2, minmax(160px, 280px));
    max-width: 700px;
  }

  @media (${media.custom3}) {
    grid-template-columns: repeat(4, minmax(160px, 1fr));
  }

  @media (${media.custom4}) {
    grid-template-columns: repeat(4, minmax(160px, 220px));
    max-width: 94rem;
  }

  @media (${media.custom5}) {
    grid-template-columns: repeat(4, minmax(220px, 265px));
    max-width: 112rem;
  }
`;
