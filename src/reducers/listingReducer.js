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
    listings: [
        {
            id: 1244,
            title: 'Berlin Downtown Apartment',
            bedrooms: 2,
            bathrooms: 3,
            accomodates: 4,
            instant_bookable: 1,
            maximum_nights: 7,
            minimum_nights: 1,
            amenities: [{ label: "High End Electronics", value: "high_end_electronics" }],
            price: null,
        },

        {
            id: 5678,
            title: 'Luxury Home In Suburban Berlin',
            bedrooms: 2,
            bathrooms: 3,
            accomodates: 4,
            instant_bookable: 1,
            maximum_nights: 7,
            minimum_nights: 1,
            amenities: [{ label: "High End Electronics", value: "high_end_electronics" }],
            price: null,
        },

        {
            id: 1239,
            title: 'Luxury Ship in River',
            bedrooms: 2,
            bathrooms: 3,
            accomodates: 4,
            instant_bookable: 1,
            maximum_nights: 7,
            minimum_nights: 1,
            amenities: [{ label: "High End Electronics", value: "high_end_electronics" }],
            price: null,
        },
        {
            id: 3425,
            title: 'Guest House in Berlin',
            bedrooms: 2,
            bathrooms: 3,
            accomodates: 4,
            instant_bookable: 1,
            maximum_nights: 7,
            minimum_nights: 1,
            amenities: [{ label: "High End Electronics", value: "high_end_electronics" }],
            price: null,
        },

    ],
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
                isAdding: true,
                error: null
            };
        case ADD_LISTING_SUCCESS:
            return {
                ...state,
                listings: [...state.listings, action.payload],
                isAdding: false,
                error: null
            };
        case ADD_LISTING_ERROR:
            return {
                ...state,
                isAdding: false,
                error: action.payload
            };
        case EDIT_LISTING:
            return {
                ...state,
                isEditing: true,
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
                isEditing: false,
                error: null
            };
        case EDIT_LISTING_ERROR:
            return {
                ...state,
                isEditing: false,
                error: action.payload
            };
        case DELETE_LISTING:
            return {
                ...state,
                isDeleting: true,
                error: null
            };
        case DELETE_LISTING_SUCCESS:
            return {
                ...state,
                listings: state.listings.filter(listing => listing.id !== action.payload),
                isDeleting: false
            };
        case DELETE_LISTING_ERROR:
            return {
                ...state,
                isDeleting: false,
                error: action.payload
            }
        default:
            return state;
    }
};
