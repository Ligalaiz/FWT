import React from 'react';
import * as h from './Header.style';
import Logo from '@assets/img/logo.svg';
import Theme from '@assets/img/theme.svg';

const Header = () => {
  return (
    <header css={h.header}>
      <div css={h.headerContainer}>
        <div css={h.headerLogo}>
          <a css={h.headerLink} href="#top">
            <Logo />
          </a>
        </div>
        <div css={h.headerTheme}>
          <Theme />
        </div>
      </div>
    </header>
  );
};

export { Header };
