import React from 'react';
import PreviewListing from './PreviewListing';
import ListingForm from './ListingForm';

function AddListing(){
    return(
        <div className='container'>
            <PreviewListing/>
            <ListingForm/>
        </div>
    )
}

export default AddListing;