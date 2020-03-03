import React from 'react';
import { useParams } from 'react-router-dom';

/*
    Listing Details
    @state: Listing object that represent the respective id
    @return: A page that displays current listing information based off of given id.
                Two buttons -> Edit Listing and Delete Listing
*/
function ListingDetails(){
    const {id} = useParams();
    return(
        <div>
            <h1>Listing Details</h1>
        </div>
    );
}

export default ListingDetails;