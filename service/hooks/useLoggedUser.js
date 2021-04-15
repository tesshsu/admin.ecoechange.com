import { useSelector, useDispatch } from 'react-redux';

import { useCallback } from 'react';
import * as LOGGUED_USER_ACTIONS from '../actions/loggedUser';

export default function useLogguedUser() {
  const loggedUser = useSelector(state => state.loggedUser);

  const dispatch = useDispatch();

  const login = useCallback(
    (email, password) => dispatch(LOGGUED_USER_ACTIONS.login({ email, password })),
    [dispatch]
  );

  const register = useCallback(
    payload => dispatch(LOGGUED_USER_ACTIONS.register(payload)),
    [dispatch]
  );

  
  const signInUsingFacebook = useCallback(
    () => dispatch(LOGGUED_USER_ACTIONS.signInUsingFacebook()),
    [dispatch]
  );

  const logout = useCallback(
    () => dispatch(LOGGUED_USER_ACTIONS.logout()),
    [dispatch]
  );
  

  return {
    isAuthentificated: loggedUser.isAuthentificated,
    loggedUser: loggedUser.user,
    login,
    register,
    signInUsingFacebook,
    logout
  };
}
