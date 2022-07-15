import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import * as p from './Pagination.style';

interface IPagination {
  currentPage: number;
  paginationArr: number[];
  lastPage: number;
  handleClick: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const Pagination = ({ paginationArr, handleClick, currentPage, lastPage }: IPagination) => {
  return (
    <section>
      <h2 className="visually-hidden">Pagination bar</h2>
      <div className="container">
        <ul css={p.paginationWrap} className="reset-list">
          <li>
            <Link to="/1" css={p.firstBtn} onClick={handleClick} className="disabled" data-page="firstPage">
              <span className="visually-hidden">First page</span>
            </Link>
          </li>
          <li>
            <Link
              to={`/${currentPage > 1 ? currentPage - 1 : currentPage}`}
              css={p.prevBtn}
              onClick={handleClick}
              className="disabled"
              data-page="prevPage"
            >
              <span className="visually-hidden">Prev page</span>
            </Link>
          </li>
          {paginationArr.length <= 1 ? (
            <li>
              <button css={p.paginationBtn} className="disabled">
                1
              </button>
            </li>
          ) : (
            paginationArr.map((item) => (
              <li key={item}>
                <Link
                  to={`/${item}`}
                  data-page={`page-${item}`}
                  css={p.paginationBtn}
                  onClick={handleClick}
                  className={item === currentPage ? 'active' : ''}
                >
                  {item}
                </Link>
              </li>
            ))
          )}
          <li>
            <Link
              to={`/${currentPage < lastPage ? currentPage + 1 : currentPage}`}
              css={p.nextBtn}
              onClick={handleClick}
              data-page="nextPage"
            >
              <span className="visually-hidden">Next page</span>
            </Link>
          </li>
          <li>
            <Link to={`/${lastPage}`} css={p.lastBtn} onClick={handleClick} data-page="lastPage">
              <span className="visually-hidden">Last page</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Pagination };
