import React from 'react';
import { loader } from './LoaderStyle';

const Loader = () => {
  return (
    <div className="container">
      <div css={loader} />
    </div>
  );
};

export { Loader };
