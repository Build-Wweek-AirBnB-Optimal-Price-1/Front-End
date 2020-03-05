import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Title, Card, CardTitle, CardText, ResponsiveContainer } from '../PresentationalComponents';
import { ButtonContainer, DetailsButton, ConfirmDelete, ConfirmButton, Text} from '../PresentationalComponents';
import { deleteListing } from '../../actions/listingActions';
import { connect } from 'react-redux';

/*
    Listing Details
    @props: 
        - listings from redux state
    @params:
        - An id to represent which listing we want to view
    @return: A page that displays current listing information based off of given id.
                Two buttons -> Edit Listing and Delete Listing
*/
function ListingDetails(props){
    const {id} = useParams();
    const [listing, setListing] = useState({})
    const [ confirmDelete, setConfirmDelete ] = useState(false);
    const history = useHistory();
    
    useEffect(() => {
        setListing({
            ...props.listings.find(listing => listing.id === id*1)
        })
    }, [props.listings]) 

    // useEffect(() => {
    //     //Dummy data
    //     setListing(
    //         {
    //             title: 'Berlin Downtown Apartment',
    //             bedrooms: 2,
    //             bathrooms: 1
    //         }
    //     )
    //     // Fix url when we get endpoints
    //     axios.get(`/listings/${id}`)
    //     .then(res => {
    //         console.log(res);
    //         // setData(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }, [])

    function handleConfirm(){
        setConfirmDelete(true);
    }

    function handleCancel(){
        setConfirmDelete(false);
    }

    function handleDelete(){
        deleteListing(id);
        history.push('/listings');
    }

    return(
        <div>
            <ResponsiveContainer>
                <Title>Listing Details</Title>
                <Card>
                    <CardTitle>{listing.title}</CardTitle>
                    <CardText>Bedrooms: {listing.bedrooms}</CardText>
                    <CardText>Bathrooms: {listing.bathrooms}</CardText>
                    <CardText>Optimal Price: {listing.price ? `€${listing.price}` : 'Not yet calculated.'}</CardText>
                    <ButtonContainer>
                        <DetailsButton onClick={() => history.push(`/listings/edit/${listing.id}`)}>Edit Listing</DetailsButton>
                        <DetailsButton delete onClick={handleConfirm}>Delete Listing</DetailsButton>
                    </ButtonContainer>
                </Card>
                {confirmDelete && 
                <ConfirmDelete>
                    <Text>Are you sure you want to delete this listing?</Text>
                    <ConfirmButton onClick={handleDelete}>Confirm</ConfirmButton>
                    <ConfirmButton onClick={handleCancel}>Cancel</ConfirmButton>
                </ConfirmDelete>}
            </ResponsiveContainer>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        listings: state.listings
    }
}

export default connect(mapStateToProps)(ListingDetails);