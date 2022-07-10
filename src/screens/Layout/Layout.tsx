import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { GitLink } from '@components/GitLink';

const Layout: FC = () => {
  return (
    <>
      <GitLink />
      <Outlet />
    </>
  );
};

export { Layout };
