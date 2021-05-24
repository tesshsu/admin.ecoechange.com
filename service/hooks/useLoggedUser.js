import { useSelector, useDispatch } from 'react-redux';

import { useCallback } from 'react';
import * as LOGGED_USER_ACTIONS from '../actions/loggedUser';

export default function useLoggedUser() {
  const loggedUser = useSelector(state => state.loggedUser);
  const provider = useSelector(state => state.provider);
  const url = useSelector(state => state.url);

  const dispatch = useDispatch();

  const login = useCallback(
      (email, password) => dispatch(LOGGED_USER_ACTIONS.login({ email, password })),
      [dispatch]
  );

  const register = useCallback(
      payload => dispatch(LOGGED_USER_ACTIONS.register(payload)),
      [dispatch]
  );

  const forgetPassword = useCallback(
      payload => dispatch(LOGGED_USER_ACTIONS.forget_password(payload)),
      [dispatch]
  );

  const modifyPassword = useCallback(
      payload => dispatch(LOGGED_USER_ACTIONS.modify_password(payload)),
      [dispatch]
  );


  const updateLoggedUser = useCallback(
      payload => dispatch(LOGGED_USER_ACTIONS.updateUserInfo(payload)),
      [dispatch]
  );

  const signInUsingFacebook = useCallback(
      () => dispatch(LOGGED_USER_ACTIONS.signInUsingFacebook()),
      [dispatch]
  );

  const signInUsingGoogle = useCallback(
      () => dispatch(LOGGED_USER_ACTIONS.signInUsingGoogle()),
      [dispatch]
  );

  const logout = useCallback(
      () => dispatch(LOGGED_USER_ACTIONS.logout()),
      [dispatch]
  );


  return {
    isAuthentificated: loggedUser.isAuthentificated,
    loggedUser: loggedUser,
    url: url,
    provider: provider,
    login,
    register,
    forgetPassword,
    modifyPassword,
    signInUsingFacebook,
    signInUsingGoogle,
    logout,
    updateLoggedUser
  };
}
