import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { GitLink } from '@components/GitLink';
import useMatchMedia from 'use-match-media-hook';

const queries = ['(min-width: 1366px)'];

const Layout: FC = () => {
  const [desctop] = useMatchMedia(queries);

  return (
    <>
      {desctop && <GitLink />}
      <Outlet />
    </>
  );
};

export { Layout };
