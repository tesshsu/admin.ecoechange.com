import * as API from '../../api';
import * as LOADING_OVERLAY_ACTIONS from './loadingOverlay';

export const LOGIN_PROVIDER = 'loggedUser/LOGIN_PROVIDER';
export const LOGIN = 'loggedUser/LOGIN';
export const LOGOUT = 'loggedUser/LOGOUT';
export const UPDATE = 'loggedUser/UPDATE';

export const GET_USER_SUCCESS = 'loggedUser/GET_USER_SUCCESS';

export const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user,
})


export function login({email, password}) {
  return async (dispatch) => {
    dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(true, 'Connexion...'));
    try {
      const {token, user} = await API.Auth.login({email, password});
      await localStorage.setItem('ACCESS_TOKEN', token);
      dispatch({
        type: LOGIN,
        payload: {
          user
        }
      });
    } catch (err) {
      await dispatch({type: LOGOUT});
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function forget_password(payload) {
  return async (dispatch) => {
    dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(true, 'Sending...'));
    try {
      await API.Auth.forget_password(payload);
    } catch (err) {
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function modify_password(payload) {
  return async (dispatch) => {
    dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(true, 'Sending...'));
    try {
      await API.Auth.modify_password(payload);
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
      const {
        token, user
      } = await API.Auth.register(payload);

      await localStorage.setItem('ACCESS_TOKEN', token);
      dispatch({
        type: LOGIN,
        payload: {
          user
        }
      });

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

      const {provider, url} = await API.Auth.signInWithFacebook();
      dispatch({
        type: LOGIN_PROVIDER,
        payload: {
          url,
          provider
        }
      });

    } catch (err) {
      console.warn('Connexion error', err);
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function signInUsingGoogle() {
  return async (dispatch) => {
    dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(true, 'Connexion a Google...'));

    try {
      const {provider, url} = await API.Auth.signInWithGoogle();
      dispatch({
        type: LOGIN_PROVIDER,
        payload: {
          url,
          provider
        }
      });
    } catch (err) {
      console.warn('Connexion error', err);
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function logout(id) {
  return async (dispatch, getState) => {
    await localStorage.removeItem('ACCESS_TOKEN');
    await dispatch({type: LOGOUT});
    localStorage.clear();
  };
}


// Combine them all in an asynchronous thunk
export function authenticated(token) {
  return async (dispatch) => {
    try {
      await localStorage.setItem('ACCESS_TOKEN', token);
      const response = await API.User.getUser();
      dispatch(getUserSuccess(response))
      // await fetchUser();
    } catch (err) {
      console.warn(err);
      throw err;
    }
  }
}

export function updateUserInfo(payload) {
  return async (dispatch, getState) => {
    const {loggedUser} = getState().loggedUser;

    try {
      const user = await API.User.updateProfil(loggedUser.id, payload);
      dispatch(update(user));
    } catch (err) {
      console.warn(err);
      throw err;
    }
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
