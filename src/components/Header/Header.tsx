import React, { useState } from 'react';
import * as h from './Header.style';
import { SvgSprite } from '@components/SvgSprite';

const Header = () => {
  const [offset, setOffset] = useState(0);

  window.addEventListener('scroll', () => {
    setOffset(window.pageYOffset);
  });

  return (
    <header css={h.header} className={offset > 50 ? 'active' : ''}>
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
