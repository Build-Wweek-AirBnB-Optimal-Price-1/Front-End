import React from 'react';
import { Link } from 'react-router-dom';
import './Listing.css'

/*
    Listing Card
    @props: A listing object to be displayed
            {
                id: num
                type: 'string'
                nights: num
                location: 'string'
            }

            A {preview} boolean values to represent if the card is for preview or not
            - If preview is true: The card is displayed with an inactive details link
            - If preview is false: The card is displayed with a React-Router Link
    @return: A card that displays listing information with a button that links
                to a route with details and more options for the listing
*/
function ListingCard(props){    
    return(
        <div className='card'>
            <h3>Location: <span style={{fontSize: '1.5rem'}}>location goes here</span></h3>
            <p>Room Type: Room type goes here</p>
            <p>Minimum Nights: 6</p>
            <div className='details'>
                {props.preview && <a>Details</a>}

                {/* Temporary hardcoded id value -> change to listing id */}
                {props.preview === false && <Link to={`/details/1}`}>Details</Link>}
            </div>
        </div>
    );
}

export default ListingCard;