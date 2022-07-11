import { css } from '@emotion/react';
import { color } from '@src/styles';

export const created = css`
  position: relative;

  order: 1;
`;

export const createdBtn = css`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1.7rem 1.5rem 1.5rem;
  border-radius: 0.8rem;
  max-width: 28rem;
  width: 100%;
  border: 1px solid ${color['black-color-light']};

  background-color: ${color['white-color']};
  cursor: pointer;

  &.active {
    border-radius: 0.8rem 0.8rem 0 0;
    border-bottom: none;
    border: 1px solid ${color['black-color']};
  }
`;

export const createdArrow = css`
  border: 0.6rem solid transparent;
  border-top: 0.8rem solid ${color['black-color-light']};

  transform: translateY(40%);

  .active & {
    transform: translateY(-40%) rotate(180deg);
  }
`;

export const createdList = css`
  position: absolute;

  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  max-height: 28rem;
  width: 100%;
  max-width: 28rem;
  padding: 2rem 1rem 2rem;
  border-radius: 0 0 0.8rem 0.8rem;
  border: 1px solid ${color['black-color']};
  border-top: none;

  background-color: ${color['white-color']};
`;

export const createdField = css`
  padding: 1.4rem;
  max-width: 11rem;
  border-radius: 0.8rem;

  font-size: 1.3rem;
  line-height: 1.153;

  background-color: ${color['gray-color-light-x3']};

  &::placeholder {
    color: ${color['black-color-light']};
  }
`;

export const createdLine = css`
  transform: translateY(-3px);
`;
