import { combineReducers } from 'redux';
import * as actions from '../actions/users';

export const initialState = {
  current_page: 0,
  from: 0,
  to: 0,
  per_page: 0,
  last_page: 0,
  total: 0,
  users: [],
  selectedUser: undefined,
  loading: false,
  hasErrors: false,
}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USERS:
      return {...state, loading: true}
    case actions.GET_USERS_SUCCESS:
      return {
			current_page: action.payload.current_page,
			from: action.payload.from,
			to: action.payload.to,
			per_page: action.payload.per_page,
			last_page: action.payload.last_page,
			total: action.payload.total,
			users: action.payload.data,
			loading: false,
			hasErrors: false
		}
    case actions.GET_USERS_FAILURE:
      return {...state, loading: false, hasErrors: true}
	  
	case actions.DELETE_USER:
      return {
           ...state,
           users: state.users.filter((user) => user.id !== action.payload)
         }
    case actions.DELETE_USER_SUCCESS:
      return { ...state, users: { ...action.payload.data } };
    case actions.DELETE_USER_FAILURE:
      return {...state, loading: false, hasErrors: true}

    
	default:
      return state
  }
}