

import { axiosWithAuth } from '../utils/axiosWithAuth'
import { axiosData, formatQuery } from '../utils/axiosData';

export const FETCH_LISTINGS = "FETCH_LISTINGS";
export const FETCH_LISTINGS_SUCCESS = "FETCH_LISTINGS_SUCCESS";
export const FETCH_LISTINGS_ERROR = "FETCH_LISTING_ERROR";


export const ADD_LISTING = "ADD_LISTING";
export const ADD_LISTING_SUCCESS = "ADD_LISTING_SUCCESS";
export const ADD_LISTING_ERROR = "ADD_LISTING_ERROR";


export const EDIT_LISTING = "EDIT_LISTING";
export const EDIT_LISTING_SUCCESS = "EDIT_LISTING_SUCCESS";
export const EDIT_LISTING_ERROR = "EDIT_LISTING_ERROR";


export const DELETE_LISTING = "DELETE_LISTING";
export const DELETE_LISTING_SUCCESS = "DELETE_LISTING_SUCCESS";
export const DELETE_LISTING_ERROR = "DELETE_LISTING_ERROR";





export const getListings = () => dispatch => {
    dispatch({ type: FETCH_LISTINGS })
    // axiosWithAuth()
    //     //Write in correct endpoint here
    //     .get('/listings')
    //     .then(res => {
    //         //Write in correct data property here
    //         dispatch({ type: FETCH_LISTINGS_SUCCESS, payload: res.data })
    //     })
    //     .catch(err => {
    //         //Write in correct error property here
    //         dispatch({ type: FETCH_LISTINGS_ERROR, payload: err.data.message })
    //     })
}

export const addListing = (newListing) => dispatch => {
    dispatch({ type: ADD_LISTING })
    axiosData()
        .get(formatQuery(newListing))
        .then((dataRes) => {
            console.log(dataRes)
            // axiosWithAuth()
            //     .post('/listings', {
            //         ...newListing,
            //         // price: dataRes
            //     })
            //     .then(backendRes => {
            //         dispatch({ type: ADD_LISTING_SUCCESS, payload: backendRes.data })
            //     })
            //     .catch(err => {
            //         dispatch({ type: ADD_LISTING_ERROR, payload: err.data.message })
            //         console.log('here');
            //     })
        })
        .catch(err => {
            // dispatch({ type: SET_ERROR, payload: err.data.message })
            console.log(err)
        });


}

export const editListing = (editedListing) => dispatch => {

    dispatch({ type: EDIT_LISTING })

    //Uncomment data science call and fix axiosData.js once DS endpoint is done
    // axiosData()
        // .post('', editedListing)
        // .then((dataRes) => {
            //  axiosWithAuth()
            //     .put(`/listings/${editedListing.id}`, {
            //         ...editedListing,
            //         // price: dataRes
            //     })
            //     .then(backendRes => {
            //         dispatch({ type: EDIT_LISTING_SUCCESS, payload: backendRes.data })
            //     })
            //     .catch(err => {
            //         dispatch({ type: EDIT_LISTING_ERROR, payload: err.data.message })
            //     })
        // })
        // .catch(err => {
            // dispatch({ type: EDIT_LISTING_ERROR, payload: err.data.message })
        // });


}

export const deleteListing = (id) => dispatch => {
    dispatch({ type: DELETE_LISTING })
    axiosWithAuth()
        .delete(`/listings/${id}`)
        .then(res => {
            dispatch({ type: DELETE_LISTING_SUCCESS, payload: id })
        })
        .catch(err => {
            dispatch({ type: DELETE_LISTING_ERROR, payload: err.data.message })
        })
}