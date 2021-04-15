
import * as actions from '../actions/favorites';

export const initialState = {
  current_page: 0,
  from: 0,
  to: 0,
  per_page: 0,
  last_page: 0,
  total: 0,
  favorites: [],
  selectedFavorite: undefined,
  loading: false,
  hasErrors: false,
}

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_FAVORITE:
    case actions.GET_FAVORITES:
    case actions.GET_FAVORITE:
    case actions.DELETE_FAVORITE:
      return {...state, loading: true}
    case actions.CREATE_FAVORITE_SUCCESS:
      return {...state, selectedFavorite: action.payload, loading: false, hasErrors: false}
    case actions.CREATE_FAVORITE_FAILURE:
      return {...state, loading: false, hasErrors: true}
    case actions.GET_FAVORITES_SUCCESS:
      return {...state,
        current_page: action.payload.current_page,
        from: action.payload.from,
        to: action.payload.to,
        per_page: action.payload.per_page,
        last_page: action.payload.last_page,
        total: action.payload.total,
        favorites: action.payload.data,
        loading: false,
        hasErrors: false}
    case actions.GET_FAVORITE_FAILURE:
      return {...state, loading: false, hasErrors: true}
    case actions.GET_FAVORITE_SUCCESS:
      return {...state,
        selectedFavorite: action.payload,
        loading: false,
        hasErrors: false
      };
    case actions.GET_FAVORITES_FAILURE:
      return {...state, loading: false, hasErrors: true}
    case actions.DELETE_FAVORITE_SUCCESS:
      return {...state,
        loading: false,
        hasErrors: false,
        favorites: state.favorites.filter(item => item.id !== action.payload.favoriteId),
      };
    case actions.DELETE_FAVORITE_FAILURE:
      return {...state, loading: false, hasErrors: true};
    default:
      return state
  }
}

