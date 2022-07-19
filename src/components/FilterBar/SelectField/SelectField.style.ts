import { css } from '@emotion/react';
import { color, anim, media } from '@src/styles';

export const selectField = css`
  max-width: 28rem;
  width: 100%;
  padding: 1.5rem;
  border: 1px solid ${color['black-color-light']};
  border-radius: 0.8rem;
`;

export const dropDown = css`
  position: relative;

  display: flex;
  flex-direction: column;
  order: 1;
  max-width: 28rem;
  height: 4.8rem;

  &.active {
    order: 0;
  }
`;

export const dropDownText = css`
  max-width: 20.9rem;

  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.4rem;
  line-height: 1.3rem;
  letter-spacing: -0.07rem;

  overflow: hidden;
`;

export const dropDownBtn = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1.7rem 1.5rem 1.4rem;
  border-radius: 0.8rem;
  max-width: 28rem;
  width: 100%;
  height: 4.8rem;
  border: 1px solid var(--color-ui-border);

  color: var(--color-text);

  background-color: var(--color-ui-reverse-field);
  cursor: pointer;

  &.active {
    border-radius: 0.8rem 0.8rem 0 0;
    border: 1px solid var(--color-ui-border);

    &:before {
      content: ' ';
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      display: block;

      cursor: default;
      background: transparent;
      z-index: 80;
    }
  }
`;

export const dropDownListWrap = css`
  position: absolute;
  top: 100%;
  left: 0;

  width: 100%;
  max-height: 43rem;
  padding-bottom: 3rem;
  border: 1px solid var(--color-ui-border);
  border-top: none;

  background-color: var(--color-ui-reverse-field);
  overflow: hidden;
  z-index: 81;

  @media (${media.sm}) {
    border-radius: 0 0 0.8rem 0.8rem;
    max-height: 35.4rem;
    padding-bottom: 3rem;
  }

  @media (${media.lg}) {
    padding-bottom: 2rem;
    max-height: 30rem;
  }
`;

export const dropDownList = css`
  position: relative;
  top: 100%;
  left: 0;

  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 40rem;
  padding: 0.7rem 0;

  background-color: var(--color-ui-reverse-field);
  overflow: overlay;

  &::-webkit-scrollbar {
    width: 2.5rem;
  }

  &::-webkit-scrollbar-thumb {
    border: 0.85rem solid transparent;
    background-clip: padding-box;
    border-radius: 999.9rem;
    background-color: ${color['gray-color']};
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &:before {
    content: '';
    position: absolute;

    width: 100%;
    height: 2rem;
    background-color: var(--color-ui-reverse-field);
  }

  @media (${media.sm}) {
    padding-top: 1.4rem;
    max-height: 32.4rem;
  }

  @media (${media.md}) {
    max-height: 28.4rem;
    padding-top: 0.8rem;
  }
`;

export const dropDownItem = css`
  position: relative;
  padding: 1rem 1.5rem 1rem 2.8rem;

  color: var(--color-text);
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.25;

  background-color: var(--color-ui-reverse-field);
  cursor: pointer;

  &:hover,
  &:hover > div {
    color: var(--color-ui-reverse);
    background-color: var(--color-ui-base);
  }

  @media (${media.sm}) {
    padding: 0.5rem 0.3rem 0.5rem 1.5rem;
    min-height: 2.96rem;
  }

  @media (${media.md}) {
    padding: 1rem 0.3rem 1rem 2rem;

    min-height: 4rem;

    background-color: var(--color-ui-reverse-field);
  }
`;

export const dropDownItemWrap = css`
  position: relative;
  max-width: 14.5rem;

  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.25;

  overflow: hidden;
  cursor: pointer;
  background-color: var(--color-ui-reverse-field);

  @media (${media.sm}) {
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 14.5rem;

    overflow: hidden;
  }

  @media (${media.md}) {
    max-width: 20rem;

    background-color: var(--color-ui-reverse-field);
  }
`;

export const dropDownArrow = css`
  border: 0.6rem solid transparent;
  border-top: 0.8rem solid var(--color-text-placeholder);
  margin-left: auto;

  transform: translateY(40%);

  .active & {
    transform: translateY(-40%) rotate(180deg);
  }
`;

export const dropDownPanel = css`
  display: flex;
  justify-content: space-between;
  min-width: 2.8rem;
  margin-left: 0.5rem;
`;

export const dropDownCancel = css`
  position: relative;
  top: 50%;

  width: 1.8rem;
  height: 1.8rem;

  background: transparent;
  transform: translateY(-50%);

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0.4rem;

    width: 1rem;
    height: 0.1rem;

    background-color: var(--color-text-placeholder);
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
