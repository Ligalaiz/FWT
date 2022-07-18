import React, { useState, useEffect } from 'react';
import * as h from './Header.style';
import { SvgSprite } from '@components/SvgSprite';

const Header = () => {
  const [offset, setOffset] = useState(0);
  const [theme, setTheme] = useState('light');

  window.addEventListener('scroll', () => {
    setOffset(window.pageYOffset);
  });

  const hadleClick = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header css={h.header} className={offset > 50 ? 'active' : ''}>
      <div css={h.headerContainer}>
        <div css={h.headerLogo}>
          <a css={h.headerLink} href="#top">
            <SvgSprite id="logo" />
          </a>
        </div>
        <div css={h.headerTheme} onClick={hadleClick}>
          <SvgSprite id="theme" />
        </div>
      </div>
    </header>
  );
};

export { Header };
