import { css } from '@emotion/react';
import { color } from '@src/styles';

export const loader = css`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  border: 6px solid ${color['red-color']};
  border-color: ${color['red-color']} transparent ${color['red-color']} transparent;

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
