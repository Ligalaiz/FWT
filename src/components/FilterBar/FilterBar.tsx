import React, { useState } from 'react';
import * as f from './FilterBar.style';
import { SearchField } from '@components/FilterBar/SearchField';
import { SelectField } from '@components/FilterBar/SelectField';
import { RangeField } from '@components/FilterBar/RangeField';
import { options1, options2 } from '@src/internals/mocks/mockApi';

const FilterBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedBefore, setSelectedBefore] = useState('');

  return (
    <form css={f.filterBarWrap}>
      <div css={f.filterBar}>
        <SearchField searchValue={searchValue} setSearchValue={setSearchValue} />
        <SelectField name="Author" options={options1} selected={selectedAuthor} setSelected={setSelectedAuthor} />
        <SelectField name="Location" options={options2} selected={selectedLocation} setSelected={setSelectedLocation} />
        <RangeField
          selectedFrom={selectedFrom}
          selectedBefore={selectedBefore}
          setSelectedFrom={setSelectedFrom}
          setSelectedBefore={setSelectedBefore}
        />
      </div>
    </form>
  );
};

export { FilterBar };
