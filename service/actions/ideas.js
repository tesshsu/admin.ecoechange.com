// Create Redux action types
import {authHeader, jsonHeader, jsonHeaderPhoto} from '../../api/authRequest';
import * as API from "../../api";
import * as LOADING_OVERLAY_ACTIONS from './loadingOverlay';
export const GET_IDEA = 'GET_IDEA'
export const GET_IDEA_SUCCESS = 'GET_IDEA_SUCCESS'
export const GET_IDEA_FAILURE = 'GET_IDEA_FAILURE'

export const GET_IDEAS = 'GET_IDEAS'
export const GET_IDEAS_SUCCESS = 'GET_IDEAS_SUCCESS'
export const GET_IDEAS_FAILURE = 'GET_IDEAS_FAILURE'


export const CREATE_IDEA = 'idea/CREATE_IDEA';
export const CREATE_IDEA_SUCCESS = 'idea/CREATE_IDEA_SUCCESS';
export const CREATE_IDEA_FAILURE = 'idea/CREATE_IDEA_FAILURE';


export const ADD_IDEA_PHOTO = 'ADD_IDEA_PHOTO';
export const ADD_IDEA_PHOTO_SUCCESS = 'ADD_IDEA_PHOTO_SUCCESS';
export const ADD_IDEA_PHOTO_FAILURE = 'ADD_IDEA_PHOTO_SUCCESS';

export const DELETE_IDEA_PHOTO = 'ADD_IDEA_PHOTO';
export const DELETE_IDEA_PHOTO_SUCCESS = 'ADD_IDEA_PHOTO_SUCCESS';
export const DELETE_IDEA_PHOTO_FAILURE = 'ADD_IDEA_PHOTO_SUCCESS';

export const UPDATE_IDEA = 'UPDATE_IDEA'
export const UPDATE_IDEA_SUCCESS = 'UPDATE_IDEA_SUCCESS'
export const UPDATE_IDEA_FAILURE = 'UPDATE_IDEA_FAILURE'

export const EDIT_IDEA = 'EDIT_IDEA';

export const DELETE_IDEA = 'DELETE_IDEA'
export const DELETE_IDEA_SUCCESS = 'DELETE_IDEA_SUCCESS'
export const DELETE_IDEA_FAILURE = 'DELETE_IDEA_FAILURE'

// Create Redux action creators that return an action
export const getIdea = () => ({
  type: GET_IDEA,
});

export const getIdeaSuccess = (response) => ({
  type: GET_IDEA_SUCCESS,
  payload: response,
});

export const getIdeaFailure = () => ({
  type: GET_IDEA_FAILURE,
});


export const getIdeas = () => ({
  type: GET_IDEAS,
})

export const getIdeasSuccess = (response) => ({
  type: GET_IDEAS_SUCCESS,
  payload: response,
})

export const getIdeasFailure = () => ({
  type: GET_IDEAS_FAILURE,
})

export const createIdea = () => ({
  type: CREATE_IDEA,
})

export const createIdeaSuccess = (response) => ({
  type: CREATE_IDEA_SUCCESS,
  payload: response,
})

export const createIdeaFailure = () => ({
  type: CREATE_IDEA_FAILURE,
})

const addIdeaPhotoAction = () => ({
  type: ADD_IDEA_PHOTO,
});

export const addIdeaPhotoFailure = () => ({
  type: ADD_IDEA_PHOTO_FAILURE,
})

export const addIdeaPhotoSuccess = (response) => ({
  type: ADD_IDEA_PHOTO_SUCCESS,
  payload: response,
});

const deleteIdeaPhotoAction = () => ({
  type: DELETE_IDEA_PHOTO,
});

export const deleteIdeaPhotoFailure = () => ({
  type: DELETE_IDEA_PHOTO_FAILURE,
})

export const deleteIdeaPhotoSuccess = (response) => ({
  type: DELETE_IDEA_PHOTO_SUCCESS,
  payload: response,
})

const updateIdea = () => ({
  type: UPDATE_IDEA,
});

const updateIdeaSuccess = (response) => ({
  type: UPDATE_IDEA_SUCCESS,
  payload: response,
})

const updateIdeaFailure = () => ({
  type: UPDATE_IDEA_FAILURE,
});

const editingIdea = (ideaId, selectedIdea) => ({
  type: EDIT_IDEA,
  payload: {
    editing: true,
    ideaId: ideaId,
    selectedIdea: selectedIdea
  }
});

export const deleteIdeaAction = () => ({
  type: DELETE_IDEA,
});

export const deleteIdeaSuccess = (ideaId, response) => ({
  type: DELETE_IDEA_SUCCESS,
  payload: {ideaId, response}
})

export const deleteIdeaFailure = (ideaId) => ({
  type: DELETE_IDEA_FAILURE,
});

// Combine them all in an asynchronous thunk
export function fetchIdeas(page=1, perPage=18, owner = undefined) {
  return async (dispatch) => {
    dispatch(getIdeas())

    try {
      const response = await API.Annonces.search(perPage, page, owner);
      if(response.data){
        dispatch(getIdeasSuccess(response));
      }else{
        dispatch(getdeasFailure())
      }

    } catch (error) {
      dispatch(getIdeasFailure())
    }
  }
}

//Filter ideas
export function filterIdeas(page = 1, perPage = 18, postal_code, category, owner_type, sub_category, usage, experience_eco) {
  return async (dispatch) => {
    dispatch(getIdeas())

    try {
      const response = await API.Annonces.filter(perPage, page, postal_code, category, owner_type, sub_category, usage, experience_eco);

      if(response.data){
        dispatch(getIdeasSuccess(response));
      }else{
        dispatch(getIdeasFailure())
      }

    } catch (error) {
      dispatch(getIdeasFailure())
    }
  }
}

export function fetchIdea(id) {
  return async (dispatch) => {
    dispatch(getIdea())

    try {
      const response = await API.Annonces.get(id);
      dispatch(getIdeaSuccess(response));

    } catch (error) {
      dispatch(getIdeaFailure())
    }
  }
}

export function create(payload) {
  return async (dispatch) => {
    try {
      const response = await API.Annonces.create(
          payload
      );
      dispatch(createIdeaSuccess(response));
    } catch (err) {
      await dispatch(createIdeaFailure());
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function addPhoto(ideaId, payload) {
  return async (dispatch, getState) => {
    dispatch(addIdeaPhotoAction())
    try {
      const response = await API.Annonces.addPhoto(ideaId, payload);
      dispatch(addIdeaPhotoSuccess(response));
      return response;
    } catch (err) {
      await dispatch(addIdeaPhotoFailure());
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function removePhoto(ideaId, payload) {
  return async (dispatch, getState) => {
    dispatch(deleteIdeaPhotoAction())
    try {
      const response = await API.Annonces.removePhoto(ideaId, payload);
      dispatch(deleteIdeaPhotoSuccess(response));
      return response;
    } catch (err) {
      await dispatch(deleteIdeaPhotoFailure());
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function modifyIdea(id, payload) {
  return async (dispatch, getState) => {
    dispatch(updateIdea())
    try {
      const response = await API.Annonces.updateIdea(id, payload);
      dispatch(updateIdeaSuccess(response));
    } catch (error) {
      dispatch(updateIdeaFailure())
    }
  }
}

export function editIdea(ideaId, selectedIdea) {
  return async (dispatch) => {
    dispatch(editingIdea(ideaId, selectedIdea));
  };
}

export function deleteIdea(ideaId, payload) {
  return async (dispatch) => {
    try {
      const response = await API.Annonces.deleteIdea(ideaId, payload);
      dispatch(deleteIdeaSuccess(ideaId, response));
    } catch (err) {
      await dispatch(deleteIdeaFailure(ideaId,));
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}
