import { combineReducers } from 'redux';
import * as actions from '../actions/user';

export const initialState = {
  user: [],
  loading: false,
  hasErrors: false,
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USER:
      return {...state, loading: true}
    case actions.GET_USER_SUCCESS:
      return {user: action.payload, loading: false, hasErrors: false}
    case actions.GET_USER_FAILURE:
      return {...state, loading: false, hasErrors: true}
    default:
      return state
  }
}