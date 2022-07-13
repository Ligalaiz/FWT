import React, { MouseEvent } from 'react';
import paint from '@assets/img/painting.png';
import * as c from './Card.style';

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
  return (
    <div css={c.card}>
      <div css={c.cardImage}>
        <img css={c.image} src={paint} alt="" />
      </div>
      <div css={c.cardPromo} className="promoCard">
        <p css={c.cardTitle}>The presistence Of Memory</p>
        <div css={c.cardDesc}>
          <p css={c.descItem}>
            <span css={c.descTitle}>Author:</span> Rembrant
          </p>
          <p css={c.descItem}>
            <span css={c.descTitle}>Created:</span> 1642
          </p>
          <p css={c.descItem}>
            <span css={c.descTitle}>Location:</span> The Rijksmuseum
          </p>
        </div>
      </div>
    </div>
  );
};

export { Card };
