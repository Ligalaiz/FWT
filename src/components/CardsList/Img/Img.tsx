import React from 'react';
import * as i from './Img.style';
import plug from '@assets/img/1x1.png';

interface IImg {
  src: string;
  alt: string;
}

const basePath = process.env.BASE_PATH_REMOTE;

const Img = ({ src, alt = '' }: IImg) => {
  return (
    <>
      <img
        loading="lazy"
        src={`${basePath}${src}`}
        alt={alt}
        css={i.image}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = plug;
        }}
      />
    </>
  );
};

export { Img };
