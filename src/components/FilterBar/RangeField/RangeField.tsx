import React, { useState, ChangeEvent, useContext, Context } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as r from './RangeField.style';
import { IAppContext } from '@src/store/context';

interface IRangeField {
  appcontext: Context<IAppContext>;
}

const RangeField = ({ appcontext }: IRangeField) => {
  const [isActive, setIsActive] = useState(false);
  const {
    searchActions: { setSelectedFrom, setSelectedBefore, setCurrentPage },
    searchState: { selectedFrom, selectedBefore },
  } = useContext(appcontext);
  const { search } = useLocation();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.currentTarget.getAttribute('data-name');
    const { value } = e.target as typeof e.target & {
      value: string;
    };
    if (fieldName === 'from') setSelectedFrom(value);
    if (fieldName === 'before') setSelectedBefore(value);
    if (fieldName === 'before' || fieldName === 'from') {
      navigate(`/1${search}`);
      setCurrentPage(1);
    }
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
