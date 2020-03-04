import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {addListing, editListing} from '../../actions/listingActions';
import ListingCard from './ListingCard';
import {ResponsiveContainer, Form, Input, Label, Error} from '../PresentationalComponents';

// Material UI Imports
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// Auto Complete Multiple Input Styles
const useStyles = makeStyles(theme => ({
    root: {
      margin: '20px 0',
      width: '50%',
      maxWidth: '400px',
      minWidth: '280px',
      border: 0,
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      borderRadius: '5px',
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    }
  }));

/*
    Listing Form
    @return: Returns a form that accepts input for adding or editing a listing
*/
function ListingForm(props){
    const classes = useStyles();

    const {id} = useParams();
    const [ autoComplete, setAutoComplete] = useState(props.listings.find(listing => listing.id === parseInt(id, 10).features));

    const { register, handleSubmit, errors, watch } = useForm({defaultValues: {
        ...props.listings.find((listing) => listing.id === parseInt(id, 10))
    }});


    const onSubmit = (data, e) => {
        const listing = {...data, features: [...autoComplete]};
        props.edit ? props.editListing(listing) : props.addListing(listing)
        e.target.reset();
    }
    
    return(
        <ResponsiveContainer>
        <ListingCard preview={true} listing={{location: watch('location', 'location'), type: watch('type', 'type'), nights: watch('nights', 'nights')}}/>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>Location</Label>
            <Input
                name='location'
                ref={register({
                    required: true,
                    minLength: 6
                })}
            />
            {errors.location && errors.location.type === 'required' && <Error margin>Please enter a location</Error>}
            {errors.location && errors.location.type === 'minLength' && <Error margin>Location must be at least 4 characters long</Error>}
            <Label>Room Type</Label>
            <Input
                name='type'
                ref={register({
                    required: true,
                    minLength: 3
                })}
            />
            {errors.type && errors.type.type === 'required' && <Error margin>Please enter a room type</Error>}
            {errors.type && errors.type.type === 'minLength' && <Error margin>Room type must be at least 3 characters long</Error>}
            <Label>Minimum Nights Required</Label>
            <Input
                name='nights'
                ref={register({
                    required: true,
                    pattern: {
                        value: /^[0-9]*$/gm
                    }
                })}
            />
            {errors.nights && errors.nights.type === 'required' && <Error margin>Please enter a minimum amount of nights</Error>}
            {errors.nights && errors.nights.type === 'pattern' && <Error margin>Minimum nights must be a number</Error>}
            <Label>Features</Label>
            <Autocomplete
                className = {classes.root}
                onChange={(event, value) => setAutoComplete(value)}
                multiple
                id="tags-outlined"
                options={['Washer', 'HairDryer']}
                defaultValue={autoComplete}
                getOptionLabel={option => option}
                filterSelectedOptions
                renderInput={params => (
                <TextField
                    {...params}
                />
                )}
            />

            <Input type='submit' className='submit-button' value={`${props.edit ? 'Edit Listing' : 'Add Listing'}`}/>
        </Form>
        </ResponsiveContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        error: state.error
    };
}

export default connect (mapStateToProps, {addListing, editListing})(ListingForm);