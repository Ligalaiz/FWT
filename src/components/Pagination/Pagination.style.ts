import { css } from '@emotion/react';
import { anim, media } from '@src/styles';

export const paginationWrap = css`
  display: flex;
  max-width: 28.7rem;
  min-height: 4.1rem;
  margin-bottom: 3.4rem;

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
  border: 1px solid var(--color-ui-base);

  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.11;
  color: var(--color-text);

  background-color: var(--color-ui-reverse);
  cursor: pointer;
  ${anim.smooth}

  &:hover:not(.active):not(.disabled) {
    background-color: var(--color-ui-pag-hover);
  }

  &.active {
    background-color: var(--color-ui-base);
    color: var(--color-ui-reverse);
    cursor: default;
  }

  &.disabled {
    border-color: var(--color-ui-border);

    color: var(--color-text-placeholder);

    background-color: var(--color-ui-pag-disabled);

    cursor: default;

    &:before,
    &:after {
      border-color: var(--color-text-placeholder);
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
    border: 0.2rem solid var(--color-ui-border);
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
    border: 0.2rem solid var(--color-ui-border);
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
