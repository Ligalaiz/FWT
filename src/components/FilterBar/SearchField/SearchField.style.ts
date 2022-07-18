import { css } from '@emotion/react';

export const searchFieldWrap = css`
  order: 1;
`;

export const searchField = css`
  padding: 1.5rem;
  border-radius: 0.8rem;
  max-width: 28rem;
  width: 100%;
  border: 1px solid var(--color-ui-border);

  color: var(--color-text);

  background-color: var(--color-ui-reverse-field);

  &::placeholder {
    color: var(--color-text-placeholder);
  }

  &:focus,
  &:not(:placeholder-shown) {
    border: 1px solid var(--color-ui-base);
  }
`;
