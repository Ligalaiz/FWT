import React from 'react';
import { loader } from './LoaderStyle';

const Loader = (isLoading: boolean) => {
  if (!isLoading) return null;

  return <div css={loader} />;
};

export { Loader };
