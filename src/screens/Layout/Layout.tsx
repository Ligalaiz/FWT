import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { GitLink } from '@components/GitLink';

const Layout: FC = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <GitLink />
        <Outlet />
      </div>
    </div>
  );
};

export { Layout };
