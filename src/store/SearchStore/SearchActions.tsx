import { SearchActionKind, IData, ILocations, IAuthors } from '../searchTypes';

const setSearchValue = (str: string) => {
  return {
    type: SearchActionKind.SET_SEARCH_VALUE,
    payload: str,
  };
};

const setSelectedAuthor = (str: string) => {
  return {
    type: SearchActionKind.SET_SELECTED_AUTHOR,
    payload: str,
  };
};

const setSelectedLocation = (str: string) => {
  return {
    type: SearchActionKind.SET_SELECTED_LOCATION,
    payload: str,
  };
};

const setSelectedFrom = (str: string) => {
  return {
    type: SearchActionKind.SET_SELECTED_FROM,
    payload: str,
  };
};

const setSelectedBefore = (str: string) => {
  return {
    type: SearchActionKind.SET_SELECTED_BEFORE,
    payload: str,
  };
};

const setItemsPerPage = (str: number) => {
  return {
    type: SearchActionKind.SET_ITEMS_PER_PAGE,
    payload: str,
  };
};

const setData = (data: IData[]) => {
  return {
    type: SearchActionKind.SET_DATA,
    payload: data,
  };
};

const setLocations = (locations: ILocations) => {
  return {
    type: SearchActionKind.SET_LOCATIONS,
    payload: locations,
  };
};

const setAuthors = (authors: IAuthors) => {
  return {
    type: SearchActionKind.SET_AUTHORS,
    payload: authors,
  };
};

const setCurrentPage = (page: number) => {
  return {
    type: SearchActionKind.SET_CURRENT_PAGE,
    payload: page,
  };
};

const setIsLoading = (isLoading: boolean) => {
  return {
    type: SearchActionKind.SET_IS_LOADING,
    payload: isLoading,
  };
};

const setError = (error: { message: string } | null) => {
  return {
    type: SearchActionKind.SET_ERROR,
    payload: error,
  };
};

export {
  setCurrentPage,
  setSearchValue,
  setSelectedAuthor,
  setSelectedLocation,
  setSelectedFrom,
  setSelectedBefore,
  setItemsPerPage,
  setData,
  setLocations,
  setAuthors,
  setIsLoading,
  setError,
};
