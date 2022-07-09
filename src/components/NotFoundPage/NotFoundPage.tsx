import bg from '@assets/img/errorPage/bg.jpg';
import circle from '@assets/img/errorPage/circle.png';
import house from '@assets/img/errorPage/house.png';
import message from '@assets/img/errorPage/message.png';
import octopus from '@assets/img/errorPage/octopus.png';
import shadow from '@assets/img/errorPage/shadow.png';
import smHouse from '@assets/img/errorPage/smHouse.png';
import spaceship from '@assets/img/errorPage/spaceship.png';
import React, { FC } from 'react';
import {
  bgImage,
  errorBg,
  errorCircle,
  errorContent,
  errorHouse,
  errorMessage,
  errorOctopus,
  errorShadow,
  errorSmHouse,
  errorSpaceship,
  errorWrap,
} from './NotFoundPage.style';

const NotFoundPage: FC = () => {
  return (
    <div className="error__wrap" data-testid="notFoundPage" css={errorWrap}>
      <div className="error__bg error__bg--top bg" css={errorBg}>
        <img className="bg__image" src={bg} alt="background" css={bgImage} />
      </div>
      <div className="error__content" css={errorContent}>
        <img
          className="error__message"
          css={errorMessage}
          alt="404 “This is not the web page you are looking for”"
          src={message}
        />
        <img alt="octopus" className="error__octopus" src={octopus} css={errorOctopus} />
        <img alt="spaceship" className="error__spaceship" src={spaceship} css={errorSpaceship} />
        <img alt="circle" className="error__circle" src={circle} css={errorCircle} />
        <img alt="shadow" className="error__shadow" src={shadow} css={errorShadow} />
        <img alt="house" className="error__house" src={house} css={errorHouse} />
        <img alt="smHouse" className="error__smHouse" src={smHouse} css={errorSmHouse} />
      </div>
    </div>
  );
};

export { NotFoundPage };
