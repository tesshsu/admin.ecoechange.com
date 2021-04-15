// Create Redux action types
import * as API from "../../api";
import * as LOADING_OVERLAY_ACTIONS from './loadingOverlay';

export const GET_FAVORITE = 'GET_FAVORITE'
export const GET_FAVORITE_SUCCESS = 'GET_FAVORITE_SUCCESS'
export const GET_FAVORITE_FAILURE = 'GET_FAVORITE_FAILURE'

export const GET_FAVORITES = 'GET_FAVORITES'
export const GET_FAVORITES_SUCCESS = 'GET_FAVORITES_SUCCESS'
export const GET_FAVORITES_FAILURE = 'GET_FAVORITES_FAILURE'

export const CREATE_FAVORITE = 'CREATE_FAVORITE';
export const CREATE_FAVORITE_SUCCESS = 'CREATE_FAVORITE_SUCCESS';
export const CREATE_FAVORITE_FAILURE = 'CREATE_FAVORITE_FAILURE';

export const DELETE_FAVORITE = 'DELETE_FAVORITE'
export const DELETE_FAVORITE_SUCCESS = 'DELETE_FAVORITE_SUCCESS'
export const DELETE_FAVORITE_FAILURE = 'DELETE_FAVORITE_FAILURE'

// Create Redux action creators that return an action
export const getFavorite = () => ({
    type: GET_FAVORITE,
});

export const getFavoriteSuccess = (response) => ({
    type: GET_FAVORITE_SUCCESS,
    payload: response,
});

export const getFavoriteFailure = () => ({
    type: GET_FAVORITE_FAILURE,
});


export const getFavorites = () => ({
    type: GET_FAVORITES,
})

export const getFavoritesSuccess = (response) => ({
    type: GET_FAVORITES_SUCCESS,
    payload: response,
})

export const getFavoritesFailure = () => ({
    type: GET_FAVORITES_FAILURE,
})

export const createFavorite = () => ({
    type: CREATE_FAVORITE,
})

export const createFavoriteSuccess = (response) => ({
    type: CREATE_FAVORITE_SUCCESS,
    payload: response,
})

export const createFavoriteFailure = () => ({
    type: CREATE_FAVORITE_FAILURE,
})


export const deleteFavoriteAction = () => ({
    type: DELETE_FAVORITE,
});

export const deleteFavoriteSuccess = (favoriteId, response) => ({
    type: DELETE_FAVORITE_SUCCESS,
    payload: {favoriteId, response}
})

export const deleteFavoriteFailure = (favoriteId) => ({
    type: DELETE_FAVORITE_FAILURE,
});


// Combine them all in an asynchronous thunk
export function fetchFavorites(page = 1, perPage = 18 ) {
    return async (dispatch) => {
        dispatch(getFavorites())

        try {
            const response = await API.Favorites.list(perPage, page);

            if(response.data){
                dispatch(getFavoritesSuccess(response));
            }else{
                dispatch(getFavoritesFailure())
            }

        } catch (error) {
            dispatch(getFavoritesFailure())
        }
    }
}

export function fetchFavorite(id) {
    return async (dispatch) => {
        dispatch(getFavorite())

        try {
            const response = await API.Favorites.get(id);
            dispatch(getFavoriteSuccess(response));

        } catch (error) {
            dispatch(getFavoriteFailure())
        }
    }
}

export function create(payload) {
    return async (dispatch) => {
        try {
            const response = await API.Favorites.create(
                payload
            );
            dispatch(createFavoriteSuccess(response));
        } catch (err) {
            await dispatch(createFavoriteFailure());
            throw err;
        } finally {
            dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
        }
    };
}

export function deleteFavorite(favoriteId, payload) {
    return async (dispatch) => {
        try {
            const response = await API.Favorites.deleteFavorite(favoriteId, payload);
            dispatch(deleteFavoriteSuccess(favoriteId, response));
        } catch (err) {
            await dispatch(deleteFavoriteFailure(favoriteId,));
            throw err;
        } finally {
            dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
        }
    };
}


