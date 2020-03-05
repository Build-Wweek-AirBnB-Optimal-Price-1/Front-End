import {
    FETCH_LISTINGS,
    FETCH_LISTINGS_SUCCESS,
    FETCH_LISTINGS_ERROR,
    ADD_LISTING,
    ADD_LISTING_SUCCESS,
    ADD_LISTING_ERROR,
    EDIT_LISTING,
    EDIT_LISTING_SUCCESS,
    EDIT_LISTING_ERROR,
    DELETE_LISTING,
    DELETE_LISTING_SUCCESS,
    DELETE_LISTING_ERROR
} from "../actions/listingActions";

const initialState = {
    listings: [],
    isFetching: false,
    error: null
};

export const listingReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LISTINGS:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case FETCH_LISTINGS_SUCCESS:
            return {
                ...state,
                listings: action.payload,
                isFetching: false,
                error: null
            };
        case FETCH_LISTINGS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_LISTING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case ADD_LISTING_SUCCESS:
            return {
                ...state,
                listings: [...state.listings, action.payload],
                isFetching: false,
                error: null
            };
        case ADD_LISTING_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case EDIT_LISTING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case EDIT_LISTING_SUCCESS:
            return {
                ...state,
                listings: state.listings.map((listing) => {
                    if (listing.id === action.payload.id) {
                        return {
                            ...action.payload
                        }
                    }
                    else return listing
                }),
                isFetching: false,
                error: null
            };
        case EDIT_LISTING_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case DELETE_LISTING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case DELETE_LISTING_SUCCESS:
            return {
                ...state,
                listings: state.listings.filter(listing => listing.id !== action.payload),
                isFetching: false
            };
        case DELETE_LISTING_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
};
