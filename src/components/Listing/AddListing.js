import React from 'react';
import PreviewListing from './PreviewListing';
import ListingForm from './ListingForm';

/*
    Add Listing
    @return: A container that holds a preview and the form to make changes
*/
function AddListing(){
    return(
        <div className='container'>
            <PreviewListing/>
            <ListingForm/>
        </div>
    )
}

export default AddListing;