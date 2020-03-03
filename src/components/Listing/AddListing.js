import React, { useEffect } from 'react';
import PreviewListing from './PreviewListing';
import ListingForm from './ListingForm';
import { connect } from 'react-redux';
import { addListing } from '../../actions/listingActions';

/*
    Add Listing
    @return: A container that holds a preview and the form to make changes
*/
function AddListing(props){

    useEffect(() => {
        console.log(props.error);
    }, [props.error]);

    return(
        <div className='container'>
            <PreviewListing/>
            <ListingForm listingAction={props.addListing}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        error: state.error
    };
}

export default connect (mapStateToProps, {addListing})(AddListing);