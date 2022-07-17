import { css } from '@emotion/react';
import { media } from '@src/styles';

export const cardsList = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 2rem;
  max-width: 28rem;
  padding: 2.9rem 0 3rem;
  margin-bottom: 3rem;
  margin: 0 auto;

  grid-template-columns: repeat(auto-fit, minmax(252px, 1fr));

  @media (min-width: 578px) {
    grid-template-columns: repeat(auto-fit, minmax(252px, 1fr));
    max-width: 70rem;
  }

  @media (${media.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  @media (${media.md}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    max-width: 94rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 1025px) {
    max-width: 1120rem;
  }

  @media (${media.lg}) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    max-width: 1120rem;
  }
`;

export const cardsMessage = css`
  text-align: center;
  font-size: 2.4rem;
  fons-wight: 700;
`;
