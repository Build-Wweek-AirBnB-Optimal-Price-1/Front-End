import React from 'react';
import { useHistory } from 'react-router-dom';
import { CardTitle, CardText, Card, CardDetails, CardSubtitle } from '../PresentationalComponents';

/*
    Listing Card
    @props: A listing object to be displayed
            {
                id: num
                type: 'string'
                nights: 'string'
                location: 'string'
                features: ['strings']
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
            <CardTitle>{props.listing.title}</CardTitle>
            <CardText><CardSubtitle>Bedrooms:</CardSubtitle> {props.listing.bedrooms}</CardText>
            <CardText><CardSubtitle>Bathrooms:</CardSubtitle> {props.listing.bathrooms}</CardText>
            <CardText><CardSubtitle>Optimal Price:</CardSubtitle> {props.listing.price ? `€${props.listing.price}` : 'Not yet calculated.'}</CardText>
            
            <CardDetails>
                {props.preview && <span>Details</span>}
                {props.preview === false && <span onClick={() => {history.push(`/listings/details/${props.listing.id}`)}} >Details</span>}
            </CardDetails>
        </Card>
    );
}

export default ListingCard;