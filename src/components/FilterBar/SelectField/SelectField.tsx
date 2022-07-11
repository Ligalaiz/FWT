import React, { useState, MouseEvent, Dispatch, SetStateAction } from 'react';
import * as s from './SelectField.style';

interface IOptions {
  id: number;
  name?: string;
  location?: string;
}

interface ISelectedField {
  name: string;
  options: IOptions[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const SelectField = ({ name, options, selected, setSelected }: ISelectedField) => {
  const [isActive, setIsActive] = useState(false);

  const handleDropDownBtnClick = () => {
    setIsActive(!isActive);
  };

  const handleDropDownItemClick = (e: MouseEvent<HTMLLIElement>) => {
    const { textContent } = e.target as typeof e.target & {
      textContent: string;
    };
    setSelected(textContent);
    setIsActive(false);
  };

  const handleDropDownCancelClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSelected('');
  };

  const val = name === 'Author' ? 'name' : 'location';

  return (
    <div css={s.dropDown} className={isActive ? 'active' : ''}>
      <div css={s.dropDownBtn} onClick={handleDropDownBtnClick} className={isActive ? 'active' : ''}>
        <p css={s.dropDownText}>{selected || name}</p>
        <div css={s.dropDownPanel}>
          {selected !== '' && <button onClick={handleDropDownCancelClick} css={s.dropDownCancel} />}
          <div css={s.dropDownArrow} />
        </div>
      </div>
      {isActive && (
        <>
          <ul className="reset-list" css={s.dropDownList}>
            {options &&
              options.map((item) => (
                <li onClick={handleDropDownItemClick} css={s.dropDownItem} key={item.id}>
                  {item[val]}
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  );
};

export { SelectField };
