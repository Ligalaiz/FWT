import React, { Dispatch, SetStateAction, ChangeEvent, useContext, Context } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as s from './SearchField.style';
import { IAppContext } from '@src/store/context';

interface ISearchField {
  searchValue: string;
  appcontext: Context<IAppContext>;
  setSearchValue: Dispatch<SetStateAction<string>>;
}
const SearchField = ({ searchValue, setSearchValue, appcontext }: ISearchField) => {
  const {
    searchActions: { setCurrentPage },
  } = useContext(appcontext);
  const { search } = useLocation();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as typeof e.target & {
      value: string;
    };
    setSearchValue(value);
    navigate(`/1${search}`);
    setCurrentPage(1);
  };

  return (
    <div css={s.searchFieldWrap}>
      <input
        value={searchValue}
        onChange={handleChange}
        css={s.searchField}
        type="text"
        name="name"
        placeholder="Name"
      />
    </div>
  );
};

export { SearchField };
