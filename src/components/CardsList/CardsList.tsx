import React, { useContext, Context } from 'react';
import { Card } from '@components/CardsList/Card';
import { Loader } from '@components/Loader';
import * as c from './CardsList.style';
import { IAppContext } from '@src/store/context';
import { errorBoundary } from '@src/hoc/errorBoundary';

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

interface ICardsList {
  paintsData: IData[];
  appcontext: Context<IAppContext>;
}

const CardithErrorBoundary = errorBoundary(Card);

const CardsList = ({ paintsData, appcontext }: ICardsList) => {
  const {
    searchState: { isLoading },
  } = useContext(appcontext);

  return (
    <section>
      <h2 className="visually-hidden">Arts Gallery </h2>
      <div className="container">
        <h2 className="visually-hidden">Gallery List</h2>
        <div css={c.cardsList}>
          {paintsData.length === 0 && !isLoading ? (
            <p css={c.cardsMessage}>Images not Found :(</p>
          ) : (
            paintsData.map((card) => <CardithErrorBoundary cardData={card} key={card.id} />)
          )}
        </div>
      </div>
      {isLoading && <Loader />}
    </section>
  );
};

export { CardsList };
