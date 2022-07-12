import React from 'react';
import * as h from './Header.style';
import { SvgSprite } from '@components/SvgSprite';

const Header = () => {
  return (
    <header css={h.header}>
      <div css={h.headerContainer}>
        <div css={h.headerLogo}>
          <a css={h.headerLink} href="#top">
            <SvgSprite id="logo" />
          </a>
        </div>
        <div css={h.headerTheme}>
          <SvgSprite id="theme" />
        </div>
      </div>
    </header>
  );
};

export { Header };
