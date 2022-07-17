export enum SearchActionKind {
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_SEARCH_VALUE = 'SET_SEARCH_VALUE',
  SET_SELECTED_AUTHOR = 'SET_SELECTED_AUTHOR',
  SET_SELECTED_LOCATION = 'SET_SELECTED_LOCATION',
  SET_SELECTED_FROM = 'SET_SELECTED_FROM',
  SET_SELECTED_BEFORE = 'SET_SELECTED_BEFORE',
  SET_ITEMS_PER_PAGE = 'SET_ITEMS_PER_PAGE',
  SET_DATA = 'SET_DATA',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_ERROR = 'SET_ERROR',
  SET_LOCATIONS = 'SET_LOCATIONS',
  SET_AUTHORS = 'SET_AUTHORS',
}

export interface IData {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
  author: string;
  location: string;
  [key: string]: string | number;
}

export interface ILocations {
  [key: string]: string;
}

export interface IAuthors {
  [key: string]: string;
}

export interface IInitialSearchState {
  currentPage: number;
  searchValue: string;
  selectedAuthor: string;
  selectedLocation: string;
  selectedFrom: string;
  selectedBefore: string;
  itemsPerPage: number;
  data: IData[];
  locations: ILocations | null;
  authors: ILocations | null;
  isLoading: boolean;
  error: { message: string } | null;
}

export interface SetCurrentPageAction {
  type: SearchActionKind.SET_CURRENT_PAGE;
  payload: number;
}

export interface SetSearchValueAction {
  type: SearchActionKind.SET_SEARCH_VALUE;
  payload: string;
}

export interface SetSelectedAuthorAction {
  type: SearchActionKind.SET_SELECTED_AUTHOR;
  payload: string;
}

export interface SetSelectedLocationAction {
  type: SearchActionKind.SET_SELECTED_LOCATION;
  payload: string;
}

export interface SetSelectedFromnAction {
  type: SearchActionKind.SET_SELECTED_FROM;
  payload: string;
}

export interface SetSelectedBeforeAction {
  type: SearchActionKind.SET_SELECTED_BEFORE;
  payload: string;
}

export interface SetItemsPerPageAction {
  type: SearchActionKind.SET_ITEMS_PER_PAGE;
  payload: number;
}

export interface SetDataAction {
  type: SearchActionKind.SET_DATA;
  payload: IData[];
}

export interface SetLoctionsAction {
  type: SearchActionKind.SET_LOCATIONS;
  payload: ILocations;
}

export interface SetAuthorsAction {
  type: SearchActionKind.SET_AUTHORS;
  payload: IAuthors;
}

export interface SetLoadingAction {
  type: SearchActionKind.SET_IS_LOADING;
  payload: boolean;
}

export interface SetErrorAction {
  type: SearchActionKind.SET_ERROR;
  payload: { message: string } | null;
}

export type SearchAction =
  | SetCurrentPageAction
  | SetSearchValueAction
  | SetSelectedAuthorAction
  | SetSelectedLocationAction
  | SetSelectedFromnAction
  | SetSelectedBeforeAction
  | SetItemsPerPageAction
  | SetDataAction
  | SetLoctionsAction
  | SetAuthorsAction
  | SetLoadingAction
  | SetErrorAction;
