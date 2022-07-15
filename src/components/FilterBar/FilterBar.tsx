import React, { useState, KeyboardEvent, FormEvent, Dispatch, SetStateAction } from 'react';
import * as f from './FilterBar.style';
import { SearchField } from '@components/FilterBar/SearchField';
import { SelectField } from '@components/FilterBar/SelectField';
import { RangeField } from '@components/FilterBar/RangeField';

interface IFilterBar {
  authors: { [key: string]: string } | null;
  locations: { [key: string]: string } | null;
  searchValue: string;
  selectedLocation: string;
  selectedAuthor: string;
  selectedFrom: string;
  selectedBefore: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  setSelectedLocation: Dispatch<SetStateAction<string>>;
  setSelectedAuthor: Dispatch<SetStateAction<string>>;
  setSelectedFrom: Dispatch<SetStateAction<string>>;
  setSelectedBefore: Dispatch<SetStateAction<string>>;
  getData: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const FilterBar = ({
  getData,
  authors,
  locations,
  searchValue,
  selectedLocation,
  selectedAuthor,
  selectedFrom,
  selectedBefore,
  setSearchValue,
  setSelectedLocation,
  setSelectedAuthor,
  setSelectedFrom,
  setSelectedBefore,
}: IFilterBar) => {
  const handleSearchRequest = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      getData(e);
    }
  };

  return (
    <section>
      <h2 className="visually-hidden">Filter bar</h2>
      <div css={f.filterBarWrap}>
        <div css={f.filterBar}>
          <SearchField request={handleSearchRequest} searchValue={searchValue} setSearchValue={setSearchValue} />
          <SelectField name="Author" options={authors} selected={selectedAuthor} setSelected={setSelectedAuthor} />
          <SelectField
            name="Location"
            options={locations}
            selected={selectedLocation}
            setSelected={setSelectedLocation}
          />
          <RangeField
            selectedFrom={selectedFrom}
            selectedBefore={selectedBefore}
            setSelectedFrom={setSelectedFrom}
            setSelectedBefore={setSelectedBefore}
          />
        </div>
      </div>
    </section>
  );
};

export { FilterBar };
