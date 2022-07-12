import React, { useState, ChangeEvent, Dispatch, SetStateAction } from 'react';
import * as r from './RangeField.style';

interface IRangeField {
  selectedFrom: string;
  selectedBefore: string;
  setSelectedFrom: Dispatch<SetStateAction<string>>;
  setSelectedBefore: Dispatch<SetStateAction<string>>;
}

const RangeField = ({ selectedFrom, selectedBefore, setSelectedFrom, setSelectedBefore }: IRangeField) => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.currentTarget.getAttribute('data-name');
    const { value } = e.target as typeof e.target & {
      value: string;
    };
    if (fieldName === 'from') setSelectedFrom(value);
    if (fieldName === 'before') setSelectedBefore(value);
  };

  const handleCreatedBtnClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div css={r.created}>
      <button css={r.createdBtn} onClick={handleCreatedBtnClick} className={isActive ? 'active' : ''}>
        <span>Created</span>
        <span css={r.createdArrow} />
      </button>
      {isActive && (
        <div css={r.createdList}>
          <input
            css={r.createdField}
            data-name="from"
            value={selectedFrom}
            onChange={handleChange}
            placeholder="from"
            type="text"
            name="from"
          />
          <span css={r.createdLine}> ― </span>
          <input
            css={r.createdField}
            data-name="before"
            value={selectedBefore}
            onChange={handleChange}
            placeholder="before"
            type="text"
            name="before"
          />
        </div>
      )}
    </div>
  );
};

export { RangeField };
