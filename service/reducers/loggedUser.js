import * as LOGGUED_USER_ACTIONS from '../actions/loggedUser';

const initialState = {
  isAuthentificated: false,
  user: null
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGUED_USER_ACTIONS.LOGIN:
      return { ...state, isAuthentificated: true };
    case LOGGUED_USER_ACTIONS.LOGOUT:
      return { ...state, isAuthentificated: false };
    case LOGGUED_USER_ACTIONS.UPDATE:
      return { ...state, user: { ...action.payload.user } };
    default:
      return state;
  }
}
