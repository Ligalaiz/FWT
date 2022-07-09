import React, { FC } from 'react';
import { App } from '../App';
import { AppRouter } from '@src/router';

const RenderAppUtils: FC = () => {
  return (
    <App>
      <AppRouter />
    </App>
  );
};

export { RenderAppUtils };
