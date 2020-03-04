import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom'
import { ResponsiveContainer, Title, CardContainer, 
        ControlBar, ControlBarText, ControlBarItem, 
        PlusButton, Input } from '../PresentationalComponents';
import ListingCard from './ListingCard';

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
    if(props.isFetching){
        return(
            <p>Grabbing Data</p>
        );
    }else{
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
                    <CardContainer>
                    {search.map((listing, index) => {
                        return <ListingCard preview={false} listing={listing} key={index}/>
                    })}
                    </CardContainer>
                </ResponsiveContainer>

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