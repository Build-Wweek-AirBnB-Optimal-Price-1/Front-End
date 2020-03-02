import {FETCH_LISTINGS, ADD_LISTING, EDIT_LISTING, DELETE_LISTING, UPDATE_LISTINGS, SET_ERROR} from "../actions/listingActions";

const initialState = {
  listings: [],
  isFetching: false,
  isAdding: false,
  isEditing: false,
  isDeleting: false,
  error: null
};

export const listingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LISTINGS:
      return {
        ...state,
        isFetching: true
      };
    case UPDATE_RESULTS:
      return {
        ...state,
        listings: action.payload,
        error: null
      };
    case SET_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
