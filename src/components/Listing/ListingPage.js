import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {getListings} from '../../actions/listingActions';
import {useHistory} from 'react-router-dom'
import { ResponsiveContainer, Title, CardContainer, 
        ControlBar, ControlBarText, ControlBarItem, 
        PlusButton, Input, LoadingContainer, Circular } from '../PresentationalComponents';
import { CircularProgress } from '@material-ui/core';
import ListingCard from './ListingCard';
import { Motion, Spring, spring } from 'react-motion';

/*
    ListingPage
    @props: All listing objects stored in redux
            Various methods -> Refer to reducers/listingReducer.js -> initialState
    @return: A page that displays all listings and has an option to add a new listing or
                search for a current listing
*/
function ListingPage(props){    
    const history = useHistory()
    const [search, setSearch] = useState(props.listings);
    const [input, setInput] = useState('');

    function handleChange(e){
        setInput(e.target.value)
    }

    useEffect(() => {
        if(input){
            setSearch(search.filter(listing => {
                return listing.title.toLowerCase().includes(input.toLowerCase());
            }))
        }else{
            setSearch(props.listings);
        }
    }, [props.listings, input])

    /*
        Renders when component mounts
        Re-renders whenever there is a change to isFetching from props
    */
    useEffect(() => {
        props.getListings()
    }, [])

    return (
        <ResponsiveContainer>
            <Title>My Listings</Title>
            <ControlBar>
                <ControlBarItem onClick={() => history.push('/listings/add')}>
                    <PlusButton />
                    <ControlBarText margin>Add New Listing</ControlBarText>
                </ControlBarItem>
                <ControlBarItem>
                    <ControlBarText>Search</ControlBarText>
                    <form>
                        <Input search onChange={handleChange}></Input>
                    </form>
                </ControlBarItem>
            </ControlBar>
            {props.isFetching ? 
                <LoadingContainer>
                    <Title>Loading Listings</Title>
                    <Circular>
                        <CircularProgress color={'inherit'}/>
                    </Circular>
                </LoadingContainer> 
                :
                <Motion
                    defaultStyle={{opacity: 0}}
                    style={{opacity: spring(1, {stiffness: 10, damping: 10})}}
                >
                    {style => (
                        <CardContainer style={{opacity: style.opacity}}>
                        {search.map(listing => {
                            return <ListingCard preview={false} listing={listing} key={listing.id}/>
                        })}
                        </CardContainer>
                    )}
                </Motion>
            }
        </ResponsiveContainer>
    );
}

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, {getListings})(ListingPage);