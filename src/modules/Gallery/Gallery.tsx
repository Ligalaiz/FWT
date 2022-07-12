import React from 'react';
import * as g from './Gallery.style';
import { Header } from '@components/Header';
import { FilterBar } from '@components/FilterBar';

const Gallery = () => {
  return (
    <>
      <Header />
      <main css={g.main}>
        <FilterBar />
      </main>
    </>
  );
};

export { Gallery };
