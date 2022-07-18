import React, { MouseEvent, Context, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as p from './Pagination.style';
import { IAppContext } from '@src/store/context';

interface IPagination {
  appcontext: Context<IAppContext>;
  paginationArr: number[];
  lastPage: number;
  handleClick: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const Pagination = ({ paginationArr, handleClick, appcontext, lastPage }: IPagination) => {
  const {
    searchState: { currentPage },
  } = useContext(appcontext);
  const { search } = useLocation();

  return (
    <section>
      <h2 className="visually-hidden">Pagination bar</h2>
      <div className="container">
        <ul css={p.paginationWrap} className="reset-list">
          <li>
            <Link
              to={`/1${search}`}
              css={p.firstBtn}
              onClick={handleClick}
              className={+currentPage === 1 ? 'disabled' : ''}
              data-page="firstPage"
            >
              <span className="visually-hidden">First page</span>
            </Link>
          </li>
          <li>
            <Link
              to={+currentPage === 1 ? `/1${search}` : `/${currentPage > 1 ? currentPage - 1 : currentPage}${search}`}
              css={p.prevBtn}
              onClick={handleClick}
              className={+currentPage === 1 ? 'disabled' : ''}
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
                  to={`/${item}${search}`}
                  data-page={`page-${item}`}
                  css={p.paginationBtn}
                  onClick={handleClick}
                  className={item === +currentPage ? 'active' : ''}
                >
                  {item}
                </Link>
              </li>
            ))
          )}
          <li>
            <Link
              to={
                +currentPage === lastPage
                  ? `/${lastPage}${search}`
                  : `/${currentPage < lastPage ? +currentPage + 1 : currentPage}${search}`
              }
              css={p.nextBtn}
              onClick={handleClick}
              data-page="nextPage"
              className={+currentPage === lastPage ? 'disabled' : ''}
            >
              <span className="visually-hidden">Next page</span>
            </Link>
          </li>
          <li>
            <Link
              to={`/${lastPage}${search}`}
              className={+currentPage === lastPage ? 'disabled' : ''}
              css={p.lastBtn}
              onClick={handleClick}
              data-page="lastPage"
            >
              <span className="visually-hidden">Last page</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Pagination };
