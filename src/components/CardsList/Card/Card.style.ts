import { css } from '@emotion/react';
import { color, anim, media } from '@src/styles';

export const card = css`
  position: relative;

  max-width: 28rem;
  width: 100%;
  min-height: 20.5rem;
  border-radius: 2rem;

  cursor: pointer;
  overflow: hidden;

  &:hover .promoCard {
    min-height: 14.5rem;
    padding: 0.5rem 1.2rem;

    & .visually-hidden {
      display: block;
    }
  }

  @media (min-width: 578px) {
    max-width: 34rem;
  }

  @media (${media.sm}) {
    max-width: 34rem;
    margin: 0 auto;
  }

  @media (${media.md}) {
    max-width: 36rem;
  }
`;

export const cardImage = css`
  position: relative;

  width: 100%;
  padding-bottom: 20.5rem;

  @media (min-width: 578px) {
    padding-bottom: 24.9rem;
  }

  @media (${media.sm}) {
    padding-bottom: 24.9rem;
  }

  @media (${media.md}) {
    padding-bottom: 23rem;
  }

  @media (${media.lg}) {
    padding-bottom: 27.5rem;
  }
`;

export const cardPromo = css`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-radius: 0 0 2rem 2rem;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.4rem 1rem 0 1.5rem;

  color: ${color['black-color']};

  background-color: ${color['white-color-light-x1']};
  ${anim.smooth}
`;

export const cardTitle = css`
  margin-bottom: 0.6rem;

  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.11;
  text-transform: capitalize;
  white-space: nowrap;
  max-width: 23rem;
  overflow: hidden;

  @media (${media.sm}) {
    max-width: 30.5rem;
  }
`;

export const cardDesc = css`
  position: absolute;
  top: 3rem;

  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
  padding-left: 0.2rem;

  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.11;
  text-transform: capitalize;
`;

export const descItem = css`
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 1.53;
  text-transform: capitalize;
`;

export const descTitle = css`
  font-weight: 500;
`;
