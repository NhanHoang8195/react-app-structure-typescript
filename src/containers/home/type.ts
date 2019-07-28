import { Map } from 'immutable';
// get list user events
export const GET_LIST_USER_START = 'GET_LIST_USER_START';
export const GET_LIST_USER_SUCCESS = 'GET_LIST_USER_SUCCESS';
export const GET_LIST_USER_FAILURE = 'GET_LIST_USER_FAILURE';


// Declare types for state in reducers.
export interface HomepageState extends Map<string, Array<object> | object | boolean> {
  data: Array<object> | null,
  isLoadingData: boolean,
  error: object,
}

// Declare type actions.
interface SuccessActions {
  type: string,
  payload: object,
}
interface FailureAction {
  type: string,
  error: object,
}

export type HomepageActionTypes = SuccessActions | FailureAction