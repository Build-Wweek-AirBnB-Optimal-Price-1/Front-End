import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ListingCard({listing}){    
    return(
        <div className='listing-card'>
            <h3>Location: </h3>
            <h6>Room Type: </h6>
            <p>Minimum Nights: </p>
            <Link>Details</Link>
        </div>
    );
}

export default ListingCard;