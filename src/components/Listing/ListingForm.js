import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import {useParams, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {addListing, editListing} from '../../actions/listingActions';
import ListingCard from './ListingCard';
import {ResponsiveContainer, Form, 
        Input, Label, Error, Checkbox,
        InputLabelContainer
        } from '../PresentationalComponents';
import styled from 'styled-components';

// Material UI Imports
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const ButtonContainer = styled.div`
    display: flex;
`;


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
    @props:
        - edit => to determine if the form is for adding a new listing or make an edit to a current one
        - listings from redux state
        - error from redux state
    @params: An id to represent which listing we want to edit
    @return: Returns a form that accepts input for adding or editing a listing
*/
function ListingForm(props){
    const history = useHistory();
    const classes = useStyles();

    const {id} = useParams();
    const [ autoComplete, setAutoComplete ] = useState( props.listings.find(listing => listing.id === (id*1)) ? props.listings.find(listing => listing.id === (id*1)).amenities : [] );

    const selectOptions = [
                            {label: 'High End Electronics', value:'high_end_electronics'}, 
                            {label: 'High End Appliances', value:'high_end_appliances'}, 
                            {label: 'Kitchen Luxury', value:'kitchen_luxury'}, 
                            {label: 'Child Friendly', value:'child_friendly'}, 
                            {label: 'Privacy', value:'privacy'}, 
                            {label: 'Free Parking', value:'free_parking'}, 
                            {label: 'Smoking Allowed', value:'smoking_allowed'}, 
                            {label: 'Pets Allowed', value:'pets_allowed'}, 
                            {label: 'Handicap Accessible', value:'handicap_accessible'}
                            ];

    const [listing, setListing] = useState({})

    // Importing properties from useForm and setting defaultValues
    const { register, handleSubmit, errors, watch } = useForm({defaultValues: {
        ...props.listings.find((listing) => listing.id === id*1 )
    }});

    // Handles re-formatting of data and passing to respective actions on submission of form
    const onSubmit = (data, e) => {
        data.bedrooms *= 1;
        data.bathrooms *= 1;
        data.accomodates *= 1;
        data.maximum_nights *= 1;
        data.minimum_nights *= 1;
        if(data.instant_bookable){
            data.instant_bookable = 1;
        }else{
            data.instant_bookable = 0;
        }

        const listing = id ? {...data, amenities: autoComplete ? [...autoComplete] : [], price: null, id: id*1} : {...data, amenities: autoComplete ? [...autoComplete] : [], price: null};

        props.edit ? props.editListing(listing, history) : props.addListing(listing, history)
        e.target.reset();
    }

    useEffect(() => {
        setListing({...props.listings.find((listing) => listing.id === id*1)}   )
    }, [props.listings])
    
    return(
        <ResponsiveContainer>
            <ListingCard preview={true} listing={{title: watch('title', 'title'), bedrooms: watch('bedrooms', 'bedrooms'), bathrooms: watch('bathrooms', 'bathrooms')}}/>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <InputLabelContainer>
                    <Label>Title</Label>
                    <Input
                        name='title'
                        ref={register({
                            required: true,
                            minLength: 4,
                            maxLength: 50
                        })}
                    />
                    {errors.title && errors.title.type === 'required' && <Error margin>Please enter a title</Error>}
                    {errors.title && errors.title.type === 'minLength' && <Error margin>Title must be at least 4 characters long</Error>}
                    {errors.title && errors.title.type === 'maxLength' && <Error margin>Keep the title under 40 characters</Error>}
                </InputLabelContainer>

                <InputLabelContainer>
                    <Label>Bedrooms</Label>
                    <Input
                        name='bedrooms'
                        ref={register({
                            required: true,
                            pattern: {
                                value: /^[0-9]*$/gm
                            },
                            maxLength: 2
                        })}
                    />
                    {errors.bedrooms && errors.bedrooms.type === 'required' && <Error margin>Please enter number of bedrooms</Error>}
                    {errors.bedrooms && errors.bedrooms.type === 'pattern' && <Error margin>Number of bedrooms must be a number</Error>}
                    {errors.bedrooms && errors.bedrooms.type === 'maxLength' && <Error margin>Number of bedrooms must be less than 100</Error>}
                </InputLabelContainer>

                <InputLabelContainer>
                    <Label>Bathrooms</Label>
                    <Input
                        name='bathrooms'
                        ref={register({
                            required: true,
                            pattern: {
                                value: /^[0-9]*$/gm
                            },
                            maxLength: 2
                        })}
                    />
                    {errors.bathrooms && errors.bathrooms.type === 'required' && <Error margin>Please enter number of bathrooms</Error>}
                    {errors.bathrooms && errors.bathrooms.type === 'pattern' && <Error margin>Number of bathrooms must be a number</Error>}
                    {errors.bathrooms && errors.bathrooms.type === 'maxLength' && <Error margin>Number of bathrooms must be less than 100</Error>}
                </InputLabelContainer>

                <InputLabelContainer>
                    <Label>Accommodates</Label>
                    <Input
                        name='accomodates'
                        ref={register({
                            required: true,
                            pattern: {
                                value: /^[0-9]*$/gm
                            },
                            maxLength: 2
                        })}
                    />
                    {errors.accomodates && errors.accomodates.type === 'required' && <Error margin>Please enter how many people can be accomodated</Error>}
                    {errors.accomodates && errors.accomodates.type === 'pattern' && <Error margin>Accomodation count must be a number</Error>}
                    {errors.accomodates && errors.accomodates.type === 'maxLength' && <Error margin>Number of people that can be accomodated must be less than 100</Error>}
                </InputLabelContainer>

                <InputLabelContainer>
                    <Label>Maximum Nights</Label>
                    <Input
                        name='maximum_nights'
                        ref={register({
                            required: true,
                            pattern: {
                                value: /^[0-9]*$/gm
                            },
                            maxLength: 2
                        })}
                    />
                    {errors.maximum_nights && errors.maximum_nights.type === 'required' && <Error margin>Please enter maximum nights for stay</Error>}
                    {errors.maximum_nights && errors.maximum_nights.type === 'pattern' && <Error margin>Maximum nights must be a number</Error>}
                    {errors.maximum_nights && errors.maximum_nights.type === 'maxLength' && <Error margin>Maximum nights must be less than 100</Error>}
                </InputLabelContainer>

                <InputLabelContainer>
                    <Label>Minimum Nights</Label>
                    <Input
                        name='minimum_nights'
                        ref={register({
                            required: true,
                            pattern: {
                                value: /^[0-9]*$/gm
                            },
                            maxLength: 2
                        })}
                    />
                    {errors.minimum_nights && errors.minimum_nights.type === 'required' && <Error margin>Please enter minimum nights for stay</Error>}
                    {errors.minimum_nights && errors.minimum_nights.type === 'pattern' && <Error margin>Minimum nights must be a number</Error>}
                    {errors.minimum_nights && errors.minimum_nights.type === 'maxLength' && <Error margin>Minimum nights must be less than 100</Error>}
                </InputLabelContainer>

                <InputLabelContainer checkbox>
                    <Label>Instant Bookable</Label>
                    <Checkbox
                        checkbox
                        name='instant_bookable'
                        type='checkbox'
                        ref={register}
                    />
                </InputLabelContainer>

                <InputLabelContainer>
                {/* Need to remove duplicates and fix error if there are no inputs */}
                <Label>Amenities</Label>
                <Autocomplete
                    className = {classes.root}
                    onChange={(event, value) => setAutoComplete(value)}
                    multiple
                    options={selectOptions}
                    defaultValue={autoComplete}
                    getOptionLabel={option => option.label}
                    filterSelectedOptions
                    renderInput={params => (
                    <TextField
                        {...params}
                    />
                    )}
                />
                </InputLabelContainer>

                <ButtonContainer>
                    <Input type='submit' disabled={props.isFetching} submit value={props.edit ? (props.isFetching? 'Submitting...' : 'Edit Listing') : (props.isFetching ? 'Submitting...' : 'Add Listing')}/>
                </ButtonContainer>
            </Form>
        </ResponsiveContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        isFetching: state.isFetching,
        error: state.error
    };
}

export default connect (mapStateToProps, {addListing, editListing})(ListingForm);