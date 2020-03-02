

import {axiosWithAuth} from '../utils/axiosWithAuth'


export const FETCH_PRICE = "FETCH_PRICE";
export const UPDATE_PRICE = "UPDATE_PRICE";

export const FETCH_LISTINGS = "FETCH_LISTINGS";

export const ADD_LISTING = "ADD_LISTING";
export const EDIT_LISTING = "EDIT_LISTING";
export const DELETE_LISTING = "DELETE_LISTING";

export const UPDATE_LISTINGS = "UPDATE_LISTINGS";

export const SET_ERROR = "SET_ERROR";


export const getListings = () => dispatch => {
    dispatch({type: FETCH_LISTINGS})
    axiosWithAuth()
        //Write in correct endpoint here
        .get('/listings')
        .then(res => {
            //Write in correct data property here
            dispatch({type: UPDATE_LISTINGS, payload: res.data})
        })
        .catch(err => {
            //Write in correct error property here
            dispatch({type: SET_ERROR, payload: res})
        })
}

export const addListing = (newListing) => dispatch => {
    dispatch({type: FETCH_PRICE})
    dispatch({type: UPDATE_PRICE})
    axiosWithAuth()
        //Write in correct endpoint here
        .get('/listings/add')
        .then(res => {
            //Write in correct data property here
            dispatch({type: UPDATE_LISTINGS, payload: res.data})
        })
        .catch(err => {
            //Write in correct error property here
            dispatch({type: SET_ERROR, payload: res})
        })
}

export const editListing = (editedListing, id) => dispatch => {
    dispatch({type: FETCH_PRICE})
    dispatch({type: UPDATE_PRICE})
    dispatch({type: EDIT_LISTING})
    axiosWithAuth()
        //Write in correct endpoint here
        .get('/listings/add')
        .then(res => {
            //Write in correct data property here
            dispatch({type: UPDATE_LISTINGS, payload: res.data})
        })
        .catch(err => {
            //Write in correct error property here
            dispatch({type: SET_ERROR, payload: res})
        })
}

export const deleteListing = (id) => dispatch => {
    dispatch({type: DELETE_LISTING})
    axiosWithAuth()
        //Write in correct endpoint here
        .get('/listings/add')
        .then(res => {
            //Write in correct data property here
            dispatch({type: UPDATE_LISTINGS, payload: res.data})
        })
        .catch(err => {
            //Write in correct error property here
            dispatch({type: SET_ERROR, payload: res})
        })
}