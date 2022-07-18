import React from 'react';
import * as c from './Card.style';
import { Img } from '@components/CardsList/Img';

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

interface ICard {
  cardData: IData;
}

const Card = ({ cardData }: ICard) => {
  const { name, author, created, location, imageUrl } = cardData;

  return (
    <div css={c.card}>
      <div css={c.cardImage}>
        <Img src={`${imageUrl}`} alt={name} />
      </div>
      <div css={c.cardPromo} className="promoCard">
        <p css={c.cardTitle}>{name}</p>
        <div css={c.cardDesc}>
          <p css={c.descItem}>
            <span css={c.descTitle}>Author:</span> {author}
          </p>
          <p css={c.descItem}>
            <span css={c.descTitle}>Created:</span> {created}
          </p>
          <p css={c.descItem}>
            <span css={c.descTitle}>Location:</span> {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export { Card };
