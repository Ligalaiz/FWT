import { css } from '@emotion/react';
import { color, media } from '@src/styles';

export const header = css`
  position: fixed;
  width: 100%;
  z-index: 100;

  &.active {
    background: ${color['gray-color-light-x1']};
    box-shadow: 0 1.4rem 2.8rem rgb(0 0 0 / 25%), 0 1rem 1rem rgb(0 0 0 / 22%);
  }
`;

export const headerContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 11.4rem;
  padding: 2.3rem 1.9rem 2.5rem 1.8rem;
  max-width: 116rem;
  margin: 0 auto;
  max-width: 72.8rem;

  @media (max-width: 321px) {
    padding: 2.3rem 0.6rem 2.5rem 1.8rem;
  }

  @media (${media.sm}) {
    padding: 3.3rem 2.5rem 3.3rem 2.6rem;
    max-width: 99.4rem;
  }

  @media (${media.md}) {
    padding: 3.3rem 3.4rem 3.5rem 3.4rem;
    max-width: 116rem;
  }

  @media (min-width: 1366px) {
    padding: 3.3rem 1.1rem 3.5rem 2.5rem;
  }
  @media (${media.lg}) {
    padding: 3.3rem 1.7rem 3.5rem 1.9rem;
  }
`;

export const headerLogo = css`
  position: relative;

  width: 6.8rem;

  cursor: pointer;
`;

export const headerLink = css`
  display: block;
  width: 6.4rem;
  height: 6.4rem;
  padding-bottom: 6.8rem;
`;

export const headerTheme = css`
  position: relative;
  top: 0.1rem;

  width: 2.2rem;
  height: 2.2rem;

  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;

    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
`;
