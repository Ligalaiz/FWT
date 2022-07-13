import { css } from '@emotion/react';
import { media } from '@src/styles';

export const cardsList = css`
  display: grid;
  grid-row-gap: 2rem;
  padding: 2.9rem 0 3rem;
  max-width: 74rem;
  margin-bottom: 3rem;

  @media (${media.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 2rem;
    margin: 0 auto;
    max-width: 98rem;
    margin-bottom: 3.5rem;
  }

  @media (${media.md}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    max-width: 116rem;
    margin-bottom: 4rem;
  }
`;
