import React, { Dispatch, SetStateAction, ChangeEvent, KeyboardEvent } from 'react';
import * as s from './SearchField.style';

interface ISearchField {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  request: (e: KeyboardEvent<HTMLInputElement>) => void;
}
const SearchField = ({ searchValue, setSearchValue, request }: ISearchField) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as typeof e.target & {
      value: string;
    };
    setSearchValue(value);
  };

  return (
    <div css={s.searchFieldWrap}>
      <input
        value={searchValue}
        onChange={handleChange}
        onKeyDown={request}
        css={s.searchField}
        type="text"
        name="name"
        placeholder="Name"
      />
    </div>
  );
};

export { SearchField };
