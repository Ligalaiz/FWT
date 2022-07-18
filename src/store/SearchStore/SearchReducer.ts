import { IInitialSearchState, SearchAction, SearchActionKind } from '../searchTypes';

const initialSearchState: IInitialSearchState = {
  currentPage: 1,
  searchValue: '',
  selectedAuthor: '',
  selectedLocation: '',
  selectedFrom: '',
  selectedBefore: '',
  itemsPerPage: 5,
  data: [],
  isLoading: false,
  locations: null,
  authors: null,
  error: null,
};

const searchReducer = (state: IInitialSearchState, action: SearchAction): IInitialSearchState => {
  const { type, payload } = action;

  switch (type) {
    case SearchActionKind.SET_CURRENT_PAGE:
      return { ...state, currentPage: payload };

    case SearchActionKind.SET_SEARCH_VALUE:
      return { ...state, searchValue: payload };

    case SearchActionKind.SET_SELECTED_AUTHOR:
      return { ...state, selectedAuthor: payload };

    case SearchActionKind.SET_SELECTED_LOCATION:
      return { ...state, selectedLocation: payload };

    case SearchActionKind.SET_SELECTED_FROM:
      return { ...state, selectedFrom: payload };

    case SearchActionKind.SET_SELECTED_BEFORE:
      return { ...state, selectedBefore: payload };

    case SearchActionKind.SET_ITEMS_PER_PAGE:
      return { ...state, itemsPerPage: payload };

    case SearchActionKind.SET_DATA:
      return { ...state, data: payload };

    case SearchActionKind.SET_LOCATIONS:
      return { ...state, locations: payload };

    case SearchActionKind.SET_AUTHORS:
      return { ...state, authors: payload };

    case SearchActionKind.SET_IS_LOADING:
      return { ...state, isLoading: payload };

    case SearchActionKind.SET_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};

export { searchReducer, initialSearchState };
