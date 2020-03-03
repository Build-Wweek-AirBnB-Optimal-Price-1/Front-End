import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Title, CardTitle, CardText } from '../PresentationalComponents';
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

/*
    Listing Details
    @state: Listing object that represent the respective id
    @return: A page that displays current listing information based off of given id.
                Two buttons -> Edit Listing and Delete Listing
*/
function ListingDetails(){
    const {id} = useParams();
    const [ data, setData ] = useState([]);

    useEffect(() => {
        // Fix url when we get endpoints
        axios.get(`/listings/${id}`)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return(
        <div>
            <Title>Listing Details</Title>
            <DetailsContainer>
                <CardTitle>Location: <span>Location Here</span></CardTitle>
                <CardText>Room Type: Room Type Here</CardText>
                <CardText>Minimum Nights: 11</CardText>
                <ButtonContainer>
                    <DetailsButton>Edit Listing</DetailsButton>
                    <DetailsButton delete>Delete Listing</DetailsButton>
                </ButtonContainer>
            </DetailsContainer>
        </div>
    );
}

export default ListingDetails;