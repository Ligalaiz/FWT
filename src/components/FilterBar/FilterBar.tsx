import React, { Context, useContext } from 'react';
import * as f from './FilterBar.style';
import { SearchField } from '@components/FilterBar/SearchField';
import { SelectField } from '@components/FilterBar/SelectField';
import { RangeField } from '@components/FilterBar/RangeField';
import { IAppContext } from '@src/store/context';

interface IFilterBar {
  appcontext: Context<IAppContext>;
}

const FilterBar = ({ appcontext }: IFilterBar) => {
  const {
    searchActions: { setSearchValue },
    searchState: { searchValue },
  } = useContext(appcontext);

  return (
    <section>
      <h2 className="visually-hidden">Filter bar</h2>
      <div css={f.filterBarWrap}>
        <div css={f.filterBar}>
          <SearchField appcontext={appcontext} searchValue={searchValue} setSearchValue={setSearchValue} />
          <SelectField appcontext={appcontext} name="Author" />
          <SelectField appcontext={appcontext} name="Location" />
          <RangeField appcontext={appcontext} />
        </div>
      </div>
    </section>
  );
};

export { FilterBar };
