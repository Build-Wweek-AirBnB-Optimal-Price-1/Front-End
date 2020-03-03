import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CardTitle, CardText } from '../PresentationalComponents';
import styled from 'styled-components';

const Card = styled.div`
    border-radius: 10px;
    width: 300px;
    height: 200px;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    position: relative;
    margin: 20px;
`

const CardDetails = styled.div`
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;
    span {
        text-decoration: none;
        color: #00A699;
        font-size: 1.9rem;
        font-family: 'Raleway';
        cursor: pointer;   
    }
`

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
    const history = useHistory()
    return(
        <Card>
            <CardTitle>Location: <span>{props.listing.location}</span></CardTitle>
            <CardText>Room Type: {props.listing.type}</CardText>
            <CardText>Minimum Nights: {props.listing.nights}</CardText>
            <CardDetails>
                {props.preview && <span>Details</span>}

                {/* Temporary hardcoded id value -> change to listing id */}
                {props.preview === false && <span onClick={() => {history.push(`/listings/details/${props.listing.id}`)}} >Details</span>}
            </CardDetails>
        </Card>
    );
}

export default ListingCard;