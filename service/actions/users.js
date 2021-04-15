import {authHeader, jsonHeader} from '../../api/authRequest';
import * as API from '../../api';
// Create Redux action types
export const GET_USERS = 'GET_USER'
export const GET_USERS_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USERS_FAILURE = 'GET_USER_FAILURE'

//Delete user action
export const DELETE_USER = 'DELETE_USER'
export const DELETE_USER_SUCCESS = 'DELETE_USERS_SUCCESS'
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE'

// Create Redux action creators that return an action
export const getUsers = () => ({
  type: GET_USERS,
})

export const getUsersSuccess = (response) => ({
  type: GET_USERS_SUCCESS,
  payload: response,
})

export const getUsersFailure = () => ({
  type: GET_USERS_FAILURE,
})

//delete user
export const deleteUser = (user) => ({
   type: DELETE_USER,
   payload: user,
})

export const deleteUserSuccess = (response) => ({
  type: DELETE_USERS_SUCCESS,
  payload: response,
})

export const deleteUserFailure = () => ({
  type: DELETE_USER_FAILURE,
})

// Combine them all in an asynchronous thunk
export function fetchUsers(page=1, perPage=18) {
  return async (dispatch) => {
    dispatch(getUsers())
	
    try {
      const response = await API.User.getUsers(perPage, page);
	  dispatch(getUsersSuccess(response));
    } catch (err) {
      dispatch(getUsersFailure())
	  console.log(err);
    }
  };
}

//delete user
export const deleteUserList = (id) => {
   return async (dispatch) => {
    dispatch(deleteUser())
	
    try {
      const response = await API.User.deleteUser(id);
	  dispatch(deleteUserSuccess(response));
    } catch (err) {
      dispatch(getUsersFailure())
    }
  };
}


