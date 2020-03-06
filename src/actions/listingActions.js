

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
    axiosWithAuth()
        //Write in correct endpoint here
        .get('/listing')
        .then(res => {
            console.log(res)
            //Write in correct data property here
            dispatch({ type: FETCH_LISTINGS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            //Write in correct error property here
            console.log(err)
            dispatch({ type: FETCH_LISTINGS_ERROR, payload: err })
        })
}

export const addListing = (newListing, history) => dispatch => {
    console.log(newListing)
    dispatch({ type: ADD_LISTING })
    axiosData()
        .get(formatQuery(newListing))
        .then((dataRes) => {
            console.log(dataRes)
            const newListingWithPrice = {
                ...newListing,
                price: dataRes.data[0].toFixed(2)
            }
            console.log(newListingWithPrice)
            dispatch({ type: ADD_LISTING_SUCCESS, payload: newListingWithPrice})

        //     axiosWithAuth()
        //         .post('/listing', newListingWithPrice)
        //         .then(backendRes => {
        //                 console.log(backendRes)
        //             // dispatch({ type: ADD_LISTING_SUCCESS, payload: backendRes.data })
        //                 // Make sure history pushes to id of new listing
        //                 // history.push(`/listings/details/${backendRes.data.id}`)
        //         })
        //         .catch(err => {
        //             console.log(err);

        //             // dispatch({ type: ADD_LISTING_ERROR, payload: err.data.message })
        //         })
        })
        .catch(err => {
            dispatch({ type: ADD_LISTING_ERROR, payload: err.data.message })
        });


}

export const editListing = (editedListing, history) => dispatch => {

    dispatch({ type: EDIT_LISTING })


    axiosData()
        .get(formatQuery(editedListing))
        .then((dataRes) => {
                    const editedListingWithPrice = {
                        ...editedListing,
                        price: dataRes.data[0].toFixed(2),
                    }
                    dispatch({ type: EDIT_LISTING_SUCCESS, payload: editedListingWithPrice})

            //  axiosWithAuth()
            //     .put(`/listing/${editedListing.id}`, editedListingWithPrice)
            //     .then(backendRes => {
            //         // dispatch({ type: EDIT_LISTING_SUCCESS, payload: backendRes.data })

            //             // Make sure history pushes to id of Edited listing
            //             // history.push(`/listings/details/${backendRes.data.id}`)
            //     })
            //     .catch(err => {
            //         // dispatch({ type: EDIT_LISTING_ERROR, payload: err })
            //     })
        })
        .catch(err => {
            dispatch({ type: EDIT_LISTING_ERROR, payload: err.data.message })
        });


}

export const deleteListing = (id) => dispatch => {
    dispatch({ type: DELETE_LISTING })
    axiosWithAuth()
        .delete(`/listing/${id}`)
        .then(res => {
            dispatch({ type: DELETE_LISTING_SUCCESS, payload: id })
        })
        .catch(err => {
            dispatch({ type: DELETE_LISTING_ERROR, payload: err })
        })
}