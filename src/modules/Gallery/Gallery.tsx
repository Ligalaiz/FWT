import React, { useEffect, useState, MouseEvent } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import * as g from './Gallery.style';
import { Header } from '@components/Header';
import { FilterBar } from '@components/FilterBar';
import { request } from '@src/module';
import { delay, serializeData, filterData } from '@src/utils';
import { Message } from '@components/Message';
import { CardsList } from '@components/CardsList';
import { Pagination } from '@components/Pagination';

interface IData {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
  author: string;
  location: string;
  [key: string]: string | number;
}

interface ILocations {
  [key: string]: string;
}

interface IAuthors {
  [key: string]: string;
}

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IData[]>([]);
  const [locations, setLocations] = useState<ILocations | null>(null);
  const [authors, setAuthors] = useState<IAuthors | null>(null);
  const [error, setError] = useState<null | { message: string }>(null);
  const [searchValue, setSearchValue] = useState('');
  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedBefore, setSelectedBefore] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const currentPages = filterData({
    data,
    searchValue,
    selectedLocation,
    selectedAuthor,
    selectedFrom,
    selectedBefore,
  }).slice(firstItem, lastItem);
  const pageCount = Math.ceil(currentPages.length / itemsPerPage);
  const paginationArr = Array.from(Array(pageCount), (_, i) => i + 1);

  const handlePaginationClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const page = e.currentTarget.getAttribute('data-page');

    if (page === 'firstPage') setCurrentPage(1);
    if (page === 'prevPage' && currentPage > 1) setCurrentPage(currentPage - 1);
    if (page === 'nextPage' && currentPage < pageCount) setCurrentPage(currentPage + 1);
    if (page === 'lastPage') setCurrentPage(pageCount);
    if (page?.match(/page-/g)) setCurrentPage(+page.split('-')[1]);
    console.log({ id });
  };

  useEffect(() => {
    setSearchValue(searchParams.get('search') || '');
    setSelectedFrom(searchParams.get('from') || '');
    setSelectedAuthor(searchParams.get('author') || '');
    setSelectedBefore(searchParams.get('before') || '');
    setSelectedLocation(searchParams.get('location') || '');

    getData();
  }, []);

  useEffect(() => {
    setSearchParams({
      search: searchValue,
      from: selectedFrom,
      author: selectedAuthor,
      before: selectedBefore,
      location: selectedLocation,
    });
  }, [searchValue, selectedFrom, selectedAuthor, selectedBefore, selectedLocation]);

  const getData = async () => {
    setIsLoading(true);

    const run = async () => {
      const requests = [request('paintings'), request('locations'), request('authors')];

      const [resPaints, resLocations, resAuthors] = await Promise.all(
        requests.map((p) => p.catch((err) => console.log(err))),
      );

      delay(() => {
        if (resPaints && resLocations && resAuthors) {
          const {
            data: serData,
            locations: serLocations,
            authors: serAuthors,
          } = serializeData({ resPaints, resLocations, resAuthors });

          setData(serData);
          setLocations(serLocations);
          setAuthors(serAuthors);
        }

        setIsLoading(false);
        setError(null);
      }, 2000);
    };

    run().catch((err) => {
      setError({ message: err.message });
      setIsLoading(false);
      delay(() => {
        setError(null);
      }, 5000);
    });
  };

  return (
    <>
      <Header />
      <main css={g.main}>
        <FilterBar
          searchValue={searchValue}
          selectedLocation={selectedLocation}
          selectedAuthor={selectedAuthor}
          selectedFrom={selectedFrom}
          selectedBefore={selectedBefore}
          locations={locations}
          authors={authors}
          getData={getData}
          setSearchValue={setSearchValue}
          setSelectedLocation={setSelectedLocation}
          setSelectedAuthor={setSelectedAuthor}
          setSelectedFrom={setSelectedFrom}
          setSelectedBefore={setSelectedBefore}
        />
        <CardsList isLoading={isLoading} paintsData={currentPages} />
        <Pagination
          paginationArr={paginationArr}
          handleClick={handlePaginationClick}
          currentPage={currentPage}
          lastPage={pageCount}
        />
      </main>

      {error && <Message content={error.message} err />}
    </>
  );
};

export { Gallery };
