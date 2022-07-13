import React from 'react';
import { Card } from '@components/CardsList/Card';
import * as c from './CardsList.style';

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
}

const CardsList = ({ paintsData }: ICardsList) => {
  return (
    <section>
      <div className="container">
        <h2 className="visually-hidden">Gallery List</h2>
        <div css={c.cardsList}>
          {paintsData.map((card) => (
            <Card cardData={card} key={card.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { CardsList };
