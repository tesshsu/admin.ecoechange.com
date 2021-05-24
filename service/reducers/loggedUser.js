import * as LOGGED_USER_ACTIONS from '../actions/loggedUser';

const initialState = {
  isAuthentificated: false,
  loggedUser: null,
  provider: null,
  url: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case LOGGED_USER_ACTIONS.LOGIN_PROVIDER:
      return { ...state, url: action.payload.url, provider: action.payload.provider};
    case LOGGED_USER_ACTIONS.LOGIN:
      return { ...state, isAuthentificated: true, loggedUser: { ...action.payload.user } };
    case LOGGED_USER_ACTIONS.LOGOUT:
      console.log("loggggggggg out");
      return { ...state, isAuthentificated: false, loggedUser: null };
    case LOGGED_USER_ACTIONS.UPDATE:
      return { ...state, loggedUser: { ...action.payload.user } };
    case LOGGED_USER_ACTIONS.GET_USER_SUCCESS:
      return { ...state, isAuthentificated: true, loggedUser: { ...action.payload } };
    default:
      return state;
  }
}
