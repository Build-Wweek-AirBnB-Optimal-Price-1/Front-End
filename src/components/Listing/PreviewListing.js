import React from 'react';
import ListingCard from './ListingCard';
import './AddListings.css';

/*
    Preview Listing
    @props: TBD
    @return: A preview container that allows the user to see changes
    to their new/old card
*/
function PreviewListing(){
    return(
        <div className='preview-container'>
            <h1>Preview</h1>
            <ListingCard preview={true}/>
        </div>
    );
}

export default PreviewListing;