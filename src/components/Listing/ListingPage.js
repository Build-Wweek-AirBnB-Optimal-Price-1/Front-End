import React, { useState, useEffect } from 'react';
import ListingCard from './ListingCard';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {addListing} from '../../actions/listingActions'

import styled from 'styled-components';

const Title = styled.h1`
    font-size: 2rem;
    font-family: 'Raleway';
    text-align: center;
    margin-top: 60px;
`;

const SubNav = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 30px;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
`;

const NewListing = styled.div`
    display: flex;
    align-items: center;
`;

const Button = styled.button`
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
`;

const SubTitle = styled.h6`
    font-size: 2rem;
    font-family: 'Raleway';
    margin-left: ${props => props.margin ? '10px' : '0'};
`;

/*
    ListingPage
    @props: All listing objects stored in redux
            Various methods -> Refer to reducers/listingReducer.js -> initialState
    @return: A page that displays all listings and has an option to add a new listing or
                search for a current listing
*/
function ListingPage(props){
    const [fetching, setFetching] = useState(true);
    
    /*
        Renders when component mounts
        Re-renders whenever there is a change to isFetching from props
    */
    useEffect(() => {
        setFetching(props.isFetching);
    }, [props.isFetching])

    if(fetching){
        return(
            <p>Grabbing Data</p>
        );
    }else{
        return (
            <div>
                <Title>My Listings</Title>
                <SubNav>
                    <NewListing>
                        <Link to='/listings/add'><Button>+</Button></Link>
                        <SubTitle margin>Add New Listing</SubTitle>
                    </NewListing>
                    <div className='search'>
                        <SubTitle>Search</SubTitle>
                    </div>
                </SubNav>
                <div className='listings-container'>
                    {props.listings.map((listing, index) => {
                        return <ListingCard listing={listing} key={index}/>
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, {addListing})(ListingPage);