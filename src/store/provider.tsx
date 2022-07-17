import React, { FC, useReducer, ReactNode } from 'react';
import { searchReducer, initialSearchState } from './SearchStore/SearchReducer';
import { AppContext } from './context';
import * as searchActions from './SearchStore/SearchActions';
import { bindActions } from './bindActions';

interface IAppProvider {
  children: ReactNode;
}

const AppProvider: FC<IAppProvider> = ({ children }) => {
  const [searchState, searchDispatch] = useReducer(searchReducer, initialSearchState);

  const searchActionsWithDispatch = bindActions(searchActions, searchDispatch);

  return (
    <AppContext.Provider
      value={{
        searchState,
        searchActions: searchActionsWithDispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
