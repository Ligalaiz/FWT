import React from 'react';
import { render } from 'react-dom';
import { Global } from '@emotion/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from '@src/App';
import { globalStyle } from '@src/styles';
import { AppRouter } from '@src/router';

render(
  <Router>
    <>
      <Global styles={globalStyle} />
      <App>
        <AppRouter />
      </App>
    </>
  </Router>,
  document.getElementById('root'),
);
