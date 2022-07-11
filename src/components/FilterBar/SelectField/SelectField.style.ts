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
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1.7rem 1.5rem 1.4rem;
  border-radius: 0.8rem;
  max-width: 28rem;
  width: 100%;
  height: 4.8rem;
  border: 1px solid ${color['black-color-light']};

  background-color: ${color['white-color']};
  cursor: pointer;

  &.active {
    border-radius: 0.8rem 0.8rem 0 0;
    border: 1px solid ${color['black-color']};
  }
`;

export const dropDownList = css`
  position: absolute;
  top: 100%;
  left: 0;

  width: 100%;
  max-height: 43rem;
  padding: 0.7rem 0;
  border: 1px solid ${color['black-color']};
  border-top: none;

  background-color: ${color['white-color']};
  overflow: overlay;
  z-index: 100;

  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-thumb {
    border-left: 10px solid ${color['gray-color']};
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &:before {
    content: '';
    position: absolute;

    width: 100%;
    height: 2rem;
    background-color: ${color['white-color']};
  }

  &:active {
    border: 1px solid ${color['black-color']};
  }

  @media (${media.sm}) {
    border-radius: 0 0 0.8rem 0.8rem;
  }
`;

export const dropDownItem = css`
  position: relative;
  padding: 1rem 1.5rem 1rem 2.8rem;

  color: ${color['black-color']};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.25;

  cursor: pointer;
  ${anim.smooth};

  &:hover {
    color: ${color['white-color']};
    background-color: ${color['black-color']};
  }
`;

export const dropDownArrow = css`
  border: 0.6rem solid transparent;
  border-top: 0.8rem solid ${color['black-color-light']};
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

    background-color: ${color['black-color-light']};
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
