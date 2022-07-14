import React, { useEffect, useState } from 'react';
import * as g from './Gallery.style';
import { Header } from '@components/Header';
import { FilterBar } from '@components/FilterBar';
import { request } from '@src/module';
import { delay, serializeData, filterData } from '@src/utils';
import { Message } from '@components/Message';
import { CardsList } from '@components/CardsList';

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
  const [locations, setSocations] = useState<ILocations | null>(null);
  const [authors, setAuthors] = useState<IAuthors | null>(null);
  const [error, setError] = useState<null | { message: string }>(null);
  const [searchValue, setSearchValue] = useState('');
  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedBefore, setSelectedBefore] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    getData();
  }, []);

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
          setData(
            filterData({
              data: serData,
              searchValue,
              selectedLocation,
              selectedAuthor,
              selectedFrom,
              selectedBefore,
            }),
          );
          setSocations(serLocations);
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
        <CardsList isLoading={isLoading} paintsData={data} />
      </main>

      {error && <Message content={error.message} err />}
    </>
  );
};

export { Gallery };
