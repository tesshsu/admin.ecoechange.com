import * as API from '../../api';
import * as LOADING_OVERLAY_ACTIONS from './loadingOverlay';
import { useCallback } from 'react';

export const LOGIN = 'loggedUser/LOGIN';
export const LOGOUT = 'loggedUser/LOGOUT';
export const UPDATE = 'loggedUser/UPDATE';
export const FETCH = 'loggedUser/FETCH';

export function fetch() {
  return async (dispatch) => {
    dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(true, 'Récupération du profil...'));
    try {
      const user = await API.User.me();
      dispatch(update(user));
    } catch (err) {
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}


export function login({ email, password }) {
  return async (dispatch) => {
    dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(true, 'Connexion...'));
    try {
      const { token, user: { id: userId } } = await API.Auth.login({ email, password });
      await localStorage.setItem('ACCESS_TOKEN', token);
      await dispatch({ type: LOGIN });
	  //await dispatch(fetch());
    } catch (err) {
      await dispatch({ type: LOGIN });
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function forget_password({ email }) {
  return async (dispatch) => {
    dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(true, 'Sending...'));
    try {
      const { token, user: { id: userId } } = await API.Auth.forget_password({ email });
      await dispatch(fetch());
    } catch (err) {
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function register(payload) {
  return async (dispatch) => {
    dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(true, 'Création du compte...'));

    try {
      const { user, token } = await API.Auth.register(payload);
      await localStorage.setItem('ACCESS_TOKEN', token);
      await dispatch(update(user));
      dispatch({ type: LOGIN });
    } catch (err) {
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function signInUsingFacebook() {
  return async (dispatch) => {
    dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(true, 'Connexion a Facebook...'));

    try {
      const {
        type,
        token: accessToken
      } = await API.Auth.signInWithFacebook(payload);

      if (type === 'success') {
        const { token, user: { id: userId } } = await API.Auth.signInWithFacebook({ accessToken });
        await localStorage.setItem('ACCESS_TOKEN', token);    
        await dispatch(fetch());
        await dispatch({ type: LOGIN });
      } else {
        return;
      }
    } catch (err) {
      console.warn('Connexion error',err);
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function logout(id) {
  return async (dispatch, getState) => {
    await localStorage.removeItem('ACCESS_TOKEN');
    await dispatch({ type: LOGOUT });
  };
}

export function update(user) {
  return {
    type: UPDATE,
    payload: {
      user
    }
  };
}
