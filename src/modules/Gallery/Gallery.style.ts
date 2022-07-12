import { css } from '@emotion/react';
import { media } from '@src/styles';

export const main = css`
  padding-top: 11.3rem;

  @media (${media.sm}) {
    padding-top: 13.3rem;
  }
`;
