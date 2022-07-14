import React, { useState, MouseEvent, Dispatch, SetStateAction } from 'react';
import useMatchMedia from 'use-match-media-hook';
import * as s from './SelectField.style';

const queries = ['(max-width: 499px)'];

interface IOptions {
  [key: string]: string;
}

interface ISelectedField {
  name: string;
  options: IOptions | null;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const SelectField = ({ name, options, selected, setSelected }: ISelectedField) => {
  const [isActive, setIsActive] = useState(false);
  const [isOrderFirst, setIsOrderFirst] = useState(false);
  const [mobile] = useMatchMedia(queries);

  const handleDropDownBtnClick = () => {
    setIsActive(!isActive);
    if (mobile) setIsOrderFirst(!isOrderFirst);
  };

  const handleDropDownItemClick = (e: MouseEvent<HTMLLIElement>) => {
    const { textContent } = e.target as typeof e.target & {
      textContent: string;
    };
    setSelected(textContent);
    setIsActive(false);
    if (mobile) setIsOrderFirst(!isOrderFirst);
  };

  const handleDropDownCancelClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSelected('');
  };

  return (
    <div css={s.dropDown} className={isOrderFirst ? 'active' : ''}>
      <div css={s.dropDownBtn} onClick={handleDropDownBtnClick} className={isActive ? 'active' : ''}>
        <p css={s.dropDownText}>{selected || name}</p>
        <div css={s.dropDownPanel}>
          {selected !== '' && <button onClick={handleDropDownCancelClick} css={s.dropDownCancel} />}
          <div css={s.dropDownArrow} />
        </div>
      </div>
      {isActive && (
        <div css={s.dropDownListWrap}>
          <ul className="reset-list" css={s.dropDownList}>
            {options ? (
              Object.keys(options).map((key) => (
                <li onClick={handleDropDownItemClick} css={s.dropDownItem} key={key}>
                  {options[key]}
                </li>
              ))
            ) : (
              <li css={s.dropDownItem}>Not Found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export { SelectField };
