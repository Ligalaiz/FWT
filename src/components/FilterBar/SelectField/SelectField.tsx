import React, { useState, MouseEvent, useContext, Context, Dispatch, SetStateAction } from 'react';
import useMatchMedia from 'use-match-media-hook';
import { useLocation, useNavigate } from 'react-router-dom';
import * as s from './SelectField.style';
import { IAppContext } from '@src/store/context';

const queries = ['(max-width: 499px)'];

export interface ILocations {
  [key: string]: string;
}

export interface IAuthors {
  [key: string]: string;
}

interface IAuthor {
  options: IAuthors | null;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

interface ILocation {
  options: ILocations | null;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

interface IFieldlMap {
  Author: IAuthor;
  Location: ILocation;
  [key: string]: IAuthor | ILocation;
}

interface ISelectedField {
  name: string;
  appcontext: Context<IAppContext>;
}

const SelectField = ({ name, appcontext }: ISelectedField) => {
  const [isActive, setIsActive] = useState(false);
  const [isOrderFirst, setIsOrderFirst] = useState(false);
  const [mobile] = useMatchMedia(queries);
  const {
    searchActions: { setCurrentPage, setSelectedLocation, setSelectedAuthor },
    searchState: { selectedLocation, selectedAuthor, locations, authors },
  } = useContext(appcontext);
  const { search } = useLocation();
  const navigate = useNavigate();
  const fiedlMap: IFieldlMap = {
    Author: {
      options: authors,
      selected: selectedAuthor,
      setSelected: setSelectedAuthor,
    },
    Location: {
      options: locations,
      selected: selectedLocation,
      setSelected: setSelectedLocation,
    },
  };

  const { options, selected, setSelected } = fiedlMap[name];

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
    navigate(`/1${search}`);
    setCurrentPage(1);
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
                  <div css={s.dropDownItemWrap}>{options[key]}</div>
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
