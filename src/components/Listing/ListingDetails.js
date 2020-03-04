import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Title, Card, CardTitle, CardText, ResponsiveContainer } from '../PresentationalComponents';
import { deleteListing } from '../../actions/listingActions';
import { connect } from 'react-redux';
import theme from '../../theme';
import styled from 'styled-components';
import axios from 'axios';

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

const DetailsButton = styled.div`
    margin: 10px 20px;
    font-family: 'Raleway';
    font-size: ${theme.fontsizes.small}px;
    color: ${props => props.delete ? theme.colors.red : theme.colors.black};
    &:hover{
        cursor: pointer;
    }
`;

const ConfirmDelete = styled.div`
    margin: 20px 0;
    width: 400px;
    background-color: ${theme.colors.red};
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;

const ConfirmButton = styled.div`
    font-family: 'Raleway';
    font-size: 1.53rem;
    margin-left: 10px;
    border-radius: 10px;
    padding: 10px;
    background-color: white;
    &:hover{
        cursor: pointer;
    }
`;

const Text = styled.p`
    text-align: center;
    font-family: 'Raleway';
    font-size: 1.3rem;
    color: white;
`;

/*
    Listing Details
    @state: Listing object that represent the respective id
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
                    <ButtonContainer>
                        <DetailsButton onClick={() => history.push(`/listings/edit/${listing.id}`)}>Edit Listing</DetailsButton>
                        <DetailsButton delete onClick={handleConfirm}>Delete Listing</DetailsButton>
                    </ButtonContainer>
                    {confirmDelete && 
                    <ConfirmDelete>
                        <Text>Are you sure you want to delete this listing?</Text>
                        <ConfirmButton onClick={handleDelete}>Confirm</ConfirmButton>
                        <ConfirmButton onClick={handleCancel}>Cancel</ConfirmButton>
                    </ConfirmDelete>}
                </Card>
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