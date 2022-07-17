import React, { FC, ReactNode } from 'react';
import { AppProvider } from '@src/store';

const App: FC<ReactNode> = ({ children }) => {
  return (
    <>
      <AppProvider>{children}</AppProvider>
    </>
  );
};

export { App };
