import * as API from "../../api";
// Create Redux action types
export const GET_USER = 'GET_USER'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'GET_USER_FAILURE'
export const UPDATE_USER = 'GET_USER_UPDATE'
export const UPDATE_USER_FAILURE = 'UPDATE_USER_UPDATE'
// Create Redux action creators that return an action
export const getUser = () => ({
    type: GET_USER,
})

export const getUserSuccess = (user) => ({
    type: GET_USER_SUCCESS,
    payload: user,
})

export const getUserFailure = () => ({
    type: GET_USER_FAILURE,
})

export const updateUserInfo = (id, user) => ({
    type: UPDATE_USER,
    payload: user,
})

export const updateUserFailure = () => ({
    type: UPDATE_USER_FAILURE,
})

// Combine them all in an asynchronous thunk

export function fetchUser() {
    return async (dispatch) => {
        dispatch(getUser())
        try {
            const response = await API.User.getUser();
            dispatch(getUserSuccess(response))
        } catch (error) {
            dispatch(getUserFailure())
        }
    }
}


export function updateUser(data) {
    return async (dispatch, getState) => {
        const {user} = getState().loggedUser;

        try {
            const response = await API.User.updateProfil(user.id, data);
            dispatch(updateUserInfo(user.id, response))
        } catch (error) {
            dispatch(updateUserFailure())
        }
    }
}

