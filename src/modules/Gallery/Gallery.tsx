import React, { useEffect, useState } from 'react';
import * as g from './Gallery.style';
import { Header } from '@components/Header';
import { FilterBar } from '@components/FilterBar';
import { Loader } from '@components/Loader';
import { request } from '@src/module';
import { delay, serializeData } from '@src/utils';
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

const fakeData = [
  {
    author: 'Ivan Aivazovsky',
    authorId: 1,
    created: '1850',
    id: 1,
    imageUrl: '/images/The_ninth_wave.jpeg',
    location: 'Russian Museum',
    locationId: 1,
    name: 'The ninth wave',
  },
  {
    author: 'François Boucher',
    authorId: 2,
    created: '1747',
    id: 2,
    imageUrl: '/images/L_Enlevement_d_Europe.jpeg',
    location: 'Louvre',
    locationId: 2,
    name: 'L`Enlévement d`Europe',
  },
  {
    author: 'Ivan Aivazovsky',
    authorId: 1,
    created: '1850',
    id: 3,
    imageUrl: '/images/The_ninth_wave.jpeg',
    location: 'Russian Museum',
    locationId: 1,
    name: 'The ninth wave',
  },
  {
    author: 'François Boucher',
    authorId: 2,
    created: '1747',
    id: 4,
    imageUrl: '/images/L_Enlevement_d_Europe.jpeg',
    location: 'Louvre',
    locationId: 2,
    name: 'L`Enlévement d`Europe',
  },
];

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IData[]>([]);
  const [error, setError] = useState<null | { message: string }>(null);

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
          const serializedData = serializeData({ resPaints, resLocations, resAuthors });
          setData(serializedData);
          console.log({ serializedData });
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
        <FilterBar getData={getData} />
        <CardsList paintsData={fakeData} />
        <Pagination />
      </main>
      {isLoading && <Loader />}
      {error && <Message content={error.message} err />}
    </>
  );
};

export { Gallery };
