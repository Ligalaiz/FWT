import { css } from '@emotion/react';
import { color, anim, media } from '@src/styles';

export const paginationWrap = css`
  display: flex;
  max-width: 28.7rem;
  min-height: 4.1rem;
  margin-bottom: 3.4rem;

  color: ${color['white-color']};

  @media (${media.sm}) {
    margin-bottom: 5.4rem;
  }

  @media (${media.md}) {
    margin-bottom: 6.2rem;
  }

  @media (${media.lg}) {
    margin-bottom: 9.4rem;
  }
`;

export const styleBtn = css`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4.1rem;
  min-height: 4.1rem;
  border: 1px solid ${color['black-color']};

  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.11;
  color: ${color['black-color']};

  background-color: ${color['white-color']};
  cursor: pointer;
  ${anim.smooth}

  &:hover:not(.active):not(.disabled) {
    background-color: ${color['gray-color-light-x4']};
  }

  &.active {
    background-color: ${color['black-color']};
    color: ${color['white-color']};
    cursor: default;
  }

  &.disabled {
    border-color: ${color['black-color-light']};

    color: ${color['black-color-light']};

    cursor: default;

    &:before,
    &:after {
      border-color: ${color['black-color-light']};
    }
  }
`;

export const arrowBtn = css`
  ${styleBtn}

  &:before {
    content: '';
    position: absolute;
    left: 46%;
    top: 50%;

    width: 1rem;
    height: 1rem;
    border: 0.2rem solid ${color['black-color']};
    border-top: none;
    border-right: none;
  }
`;

export const dobleArrowBtn = css`
  ${arrowBtn}

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 59%;
    top: 50%;

    width: 1rem;
    height: 1rem;
    border: 0.2rem solid ${color['black-color']};
    border-top: none;
    border-right: none;
  }

  &:before {
    left: 40%;
  }

  &:after {
    left: 60%;
  }
`;

export const firstBtn = css`
  ${dobleArrowBtn}

  border-top-left-radius: 0.6rem;
  border-bottom-left-radius: 0.6rem;
  &:before,
  &:after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

export const lastBtn = css`
  ${dobleArrowBtn}

  border-top-right-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  &:before,
  &:after {
    transform: translate(-50%, -50%) rotate(-135deg);
  }
`;

export const prevBtn = css`
  ${arrowBtn}

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

export const nextBtn = css`
  ${arrowBtn}

  &:before {
    transform: translate(-50%, -50%) rotate(-135deg);
  }
`;

export const paginationBtn = css`
  ${styleBtn}
`;
