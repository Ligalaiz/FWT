import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';
import { Route, Routes, useParams } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { NotFoundPage } from '@components/NotFoundPage';
import { Gallery } from '@src/modules/Gallery';
import { Layout } from '@src/screens/Layout';
import { AppContext } from '@src/store';

const AppRouter: FC = () => {
  const match = useParams();
  return (
    <TransitionGroup className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <CSSTransition in={match != null} timeout={1000} key={uuid()}>
                <Gallery appcontext={AppContext} />
              </CSSTransition>
            }
          />
          <Route
            path="/:id"
            element={
              <CSSTransition in={match != null} timeout={1000} key={uuid()}>
                <Gallery appcontext={AppContext} />
              </CSSTransition>
            }
          />
          <Route
            path="*"
            element={
              <CSSTransition in={match != null} timeout={1000} key={uuid()}>
                <NotFoundPage />
              </CSSTransition>
            }
          />
        </Route>
      </Routes>
    </TransitionGroup>
  );
};

export { AppRouter };
