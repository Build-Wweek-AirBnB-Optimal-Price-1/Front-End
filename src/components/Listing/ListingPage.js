import React from 'react';
import {connect} from 'react-redux';

import {addListing} from '../../actions/listingActions'

function ListingPage(props){
    return (
        <>
        <h1 onClick={() => addListing()}>Listing Page</h1>
        {props.listings.map()}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        isFetching: state.isFetching

    }
}

export default connect(mapStateToProps, {addListing})(ListingPage);