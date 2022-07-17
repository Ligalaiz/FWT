import React, { useEffect, MouseEvent, useContext, Context, useState, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import * as g from './Gallery.style';
import { request } from '@src/module';
import { Header } from '@components/Header';
import { Message } from '@components/Message';
import { IAppContext } from '@src/store/context';
import { FilterBar } from '@components/FilterBar';
import { CardsList } from '@components/CardsList';
import { Pagination } from '@components/Pagination';
import { delay, serializeData, filterData, createPagArray } from '@src/utils';

interface IGallery {
  appcontext: Context<IAppContext>;
}

const Gallery = ({ appcontext }: IGallery) => {
  const {
    searchActions: {
      setData,
      setError,
      setAuthors,
      setLocations,
      setIsLoading,
      setCurrentPage,
      setSearchValue,
      setSelectedFrom,
      setSelectedAuthor,
      setSelectedBefore,
      setSelectedLocation,
    },
    searchState: {
      data,
      error,
      currentPage,
      searchValue,
      selectedFrom,
      itemsPerPage,
      selectedBefore,
      selectedAuthor,
      selectedLocation,
    },
  } = useContext(appcontext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPagArr, setCurrentPagArr] = useState<number[]>([]);
  const { id } = useParams();
  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const filtredPaints = filterData({
    data,
    searchValue,
    selectedFrom,
    selectedBefore,
    selectedAuthor,
    selectedLocation,
  });

  const pageCount = Math.ceil(filtredPaints.length / itemsPerPage);
  const paginationArr = useMemo(() => Array.from(Array(pageCount), (_, i) => i + 1), [pageCount]);
  const currentRenderPaints = filtredPaints.slice(firstItem, lastItem);

  const handlePaginationClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const page = e.currentTarget.getAttribute('data-page');

    if (page === 'firstPage') setCurrentPage(1);
    if (page === 'prevPage' && currentPage > 1) {
      setCurrentPage(+currentPage - 1);
    }

    if (page === 'nextPage' && currentPage < pageCount) {
      setCurrentPage(+currentPage + 1);
    }

    if (page === 'lastPage') setCurrentPage(pageCount);
    if (page?.match(/page-/g)) setCurrentPage(+page.split('-')[1]);
  };

  useEffect(() => {
    setCurrentPage(id ? +id : 1);
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
  }, [searchValue, selectedFrom, selectedAuthor, selectedBefore, selectedLocation, setSearchParams]);

  useEffect(() => {
    setCurrentPagArr(createPagArray(paginationArr, currentPage));
  }, [currentPage, paginationArr]);

  const getData = async () => {
    setIsLoading(true);

    const run = async () => {
      const requests = [request('paintings', setError), request('locations', setError), request('authors', setError)];

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
        <FilterBar appcontext={appcontext} />
        <CardsList appcontext={appcontext} paintsData={currentRenderPaints} />
        <Pagination
          appcontext={appcontext}
          paginationArr={currentPagArr}
          handleClick={handlePaginationClick}
          lastPage={pageCount}
        />
      </main>
      {error && <Message content={error.message} err />}
    </>
  );
};

export { Gallery };
