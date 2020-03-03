import React from 'react';
import ListingCard from './ListingCard';
import './AddListings.css';

function PreviewListing(){
    return(
        <div className='preview-container'>
            <ListingCard/>
        </div>
    );
}

export default PreviewListing;