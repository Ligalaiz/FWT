import { css } from '@emotion/react';
import { color } from '@src/styles';

export const searchFieldWrap = css`
  order: 1;
`;

export const searchField = css`
  padding: 1.5rem;
  border-radius: 0.8rem;
  max-width: 28rem;
  width: 100%;
  border: 1px solid ${color['black-color-light']};

  &::placeholder {
    color: ${color['black-color-light']};
  }

  &:focus,
  &:not(:placeholder-shown) {
    border: 1px solid ${color['black-color']};
  }
`;
