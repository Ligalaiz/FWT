import { css } from '@emotion/react';
import { media } from '@src/styles';

export const headerContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 13.4rem;
  padding: 2.5rem 2rem;

  @media (${media.sm}) {
    padding-top: 3.5rem 3.4rem;
  }

  @media (${media.lg}) {
    max-width: 1140px;
    margin: 0 auto;
  }
`;

export const headerLogo = css`
  position: relative;

  width: 6.4rem;
  height: 6.4rem;

  cursor: pointer;
`;

export const headerLink = css`
  width: 6.4rem;
  height: 6.4rem;
  display: block;
`;

export const headerTheme = css`
  position: relative;

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
