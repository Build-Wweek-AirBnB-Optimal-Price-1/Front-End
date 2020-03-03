import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';

import {useHistory} from 'react-router-dom'

import styled from 'styled-components';
import theme from '../../theme';
import {ResponsiveContainer, Title, CardContainer} from '../PresentationalComponents';
import ListingCard from './ListingCard';


const ListingPageContainer = styled.div`
    margin-top: 60px;
`

const ControlBar = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
`;

const ControlBarText = styled.p`
    font-size: 2rem;
    font-family: 'Raleway';
    margin-left: 10px;
    -moz-user-select: none; 
    -ms-user-select: none; 
    -khtml-user-select: none; 
    -webkit-user-select: none; 
    -webkit-touch-callout: none;
    cursor: pointer;
`;

const ControlBarItem = styled.div`
    display: flex;
    align-items: center;
   
`;

const PlusButton = styled.button`
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FF5A5F;
    color: white;
    font-size: 3rem;
    font-family: 'Raleway';
    outline: none;
    &:hover{
        cursor: pointer;
    }
    &:after {
        content: "+"
    }
`;



/*
    ListingPage
    @props: All listing objects stored in redux
            Various methods -> Refer to reducers/listingReducer.js -> initialState
    @return: A page that displays all listings and has an option to add a new listing or
                search for a current listing
*/
function ListingPage(props){    
    const history = useHistory()
    /*
        Renders when component mounts
        Re-renders whenever there is a change to isFetching from props
    */
    if(props.isFetching){
        return(
            <p>Grabbing Data</p>
        );
    }else{
        return (

                <ListingPageContainer>
                <ResponsiveContainer>
                <Title>My Listings</Title>
                <ControlBar>
                    <ControlBarItem onClick={() => history.push('/listings/add')}>
                        <PlusButton />
                        <ControlBarText margin>Add New Listing</ControlBarText>
                    </ControlBarItem>
                    <ControlBarItem>
                        <ControlBarText>Search</ControlBarText>
                    </ControlBarItem>
                </ControlBar>
                    <CardContainer>
                    {props.listings.map((listing, index) => {
                        return <ListingCard preview={false} listing={listing} key={index}/>
                    })}
                    </CardContainer>
                </ResponsiveContainer>
                </ListingPageContainer>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps)(ListingPage);