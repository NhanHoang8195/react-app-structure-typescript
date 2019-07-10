export const HOME_GET_DATA_START = 'HOME_GET_DATA';
export const HOME_GET_DATA_SUCCESS = 'HOME_GET_DATA_SUCCESS';
export const HOME_GET_DATA_FAILURE = 'HOME_GET_DATA_FAILURE';

// this file declare types for state in reducers.
export interface HomeState {
  data: object,
  isLoadingData: boolean,
  error: object,
}

interface GetDataAction {
  type: typeof HOME_GET_DATA_START,
  payload: object
}