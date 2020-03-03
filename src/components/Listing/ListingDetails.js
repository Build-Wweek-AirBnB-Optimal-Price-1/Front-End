import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Title, CardTitle, CardText } from '../PresentationalComponents';
import { deleteListing } from '../../actions/listingActions';
import theme from '../../theme';
import styled from 'styled-components';
import axios from 'axios';

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 40px;
`;

const ButtonContainer = styled.div`
    display: flex;
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
function ListingDetails(){
    const {id} = useParams();
    const [ data, setData ] = useState([]);
    const [ confirmDelete, setConfirmDelete ] = useState(false);
    const history = useHistory();

    useEffect(() => {
        // Fix url when we get endpoints
        axios.get(`/listings/${id}`)
        .then(res => {
            console.log(res);
            // Set state
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

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
            <Title>Listing Details</Title>
            <DetailsContainer>
                <CardTitle>Location: <span>Location Here</span></CardTitle>
                <CardText>Room Type: Room Type Here</CardText>
                <CardText>Minimum Nights: 11</CardText>
                <ButtonContainer>
                    <DetailsButton onClick={() => history.push(`/listings/edit/${id}`)}>Edit Listing</DetailsButton>
                    <DetailsButton delete onClick={handleConfirm}>Delete Listing</DetailsButton>
                </ButtonContainer>
                {confirmDelete && 
                <ConfirmDelete>
                    <Text>Are you sure you want to delete this listing?</Text>
                    <ConfirmButton onClick={handleDelete}>Confirm</ConfirmButton>
                    <ConfirmButton onClick={handleCancel}>Cancel</ConfirmButton>
                </ConfirmDelete>}
            </DetailsContainer>
        </div>
    );
}

export default ListingDetails;