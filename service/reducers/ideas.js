import * as actions from '../actions/ideas';

export const initialState = {
  current_page: 0,
  from: 0,
  to: 0,
  per_page: 0,
  last_page: 0,
  total: 0,
  ideas: [],
  selectedIdea: undefined,
  loading: false,
  hasErrors: false,
}

export default function ideasReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_IDEA:
    case actions.GET_IDEAS:
    case actions.GET_IDEA:
    case actions.UPDATE_IDEA:
    case actions.ADD_IDEA_PHOTO:
    case actions.DELETE_IDEA_PHOTO:
    case actions.DELETE_IDEA:
      return {...state, loading: true}
    case actions.CREATE_IDEA_SUCCESS:
      return {...state, selectedIdea: action.payload, loading: false, hasErrors: false}
    case actions.CREATE_IDEA_FAILURE:
      return {...state, loading: false, hasErrors: true}
    case actions.GET_IDEAS_SUCCESS:
      return {...state,
        current_page: action.payload.current_page,
        from: action.payload.from,
        to: action.payload.to,
        per_page: action.payload.per_page,
        last_page: action.payload.last_page,
        total: action.payload.total,
        ideas: action.payload.data,
        loading: false,
        hasErrors: false}
    case actions.GET_IDEA_FAILURE:
      return {...state, loading: false, hasErrors: true}
    case actions.GET_IDEA_SUCCESS:
      return {...state,
        selectedIdea: action.payload,
        loading: false,
        hasErrors: false
      };
    case actions.GET_IDEAS_FAILURE:
      return {...state, loading: false, hasErrors: true}
    case actions.UPDATE_IDEA_SUCCESS:
      return {selectedIdea: action.payload, loading: false, hasErrors: false};
    case actions.UPDATE_IDEA_FAILURE:
      return {...state, loading: false, hasErrors: true};
    case actions.DELETE_IDEA_SUCCESS:
      return {...state,
        loading: false,
        hasErrors: false,
        ideas: state.ideas.filter(item => item.id !== action.payload.ideaId),
      };
    case actions.DELETE_IDEA_FAILURE:
      return {...state, loading: false, hasErrors: true};
    case actions.EDIT_IDEA:
      return {...state,
        editing: true,
        selectedIdea: state.ideas.filter(item => item.id === action.payload.ideaId).shift(),
        loading: false,
        hasErrors: true};
    default:
      return state
  }
}
