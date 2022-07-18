import { css } from '@emotion/react';

export const loader = css`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  border: 6px solid var(--color-ui-base);
  border-color: var(--color-ui-base) transparent var(--color-ui-base) transparent;
  margin: 0 auto;

  animation: lds-dual-ring 1.2s linear infinite;

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
