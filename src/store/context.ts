import { createContext } from 'react';
import { IInitialSearchState } from './searchTypes';
import { initialSearchState } from './SearchStore/SearchReducer';

interface INameToValueMap {
  [key: string]: any;
}

export interface IAppContext {
  searchState: IInitialSearchState;
  searchActions: INameToValueMap;
}

const AppContext = createContext<IAppContext>({
  searchState: initialSearchState,
  searchActions: {},
});

export { AppContext };
