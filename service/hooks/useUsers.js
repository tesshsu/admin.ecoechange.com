import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import * as USERS_ACTIONS from '../actions/users';

export default function useUsers() {
  const users = useSelector(state => state.users);
  
  const dispatch = useDispatch();

  const fetchUsers = useCallback(payload => dispatch(USERS_ACTIONS.fetchUsers()), [dispatch]);
  
  const deleteUserList = useCallback(id => dispatch(USERS_ACTIONS.deleteUserList(id)), [dispatch]);

  return {
    users,
    fetchUsers,
	deleteUserList
  };
}
