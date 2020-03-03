import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.form`
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    width: 50%;
    max-width: 400px;
    min-width: 280px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -webkit-appearance: none;
    margin: 20px auto;
    padding: 0 10px;
    font-size: 1.2rem;
    font-family: 'Raleway';
`;

const Label = styled.label`
    font-size: 1.5rem;
    text-align: center;
    font-family: 'Raleway';
`;

/*
    Listing Form
    @props: A listing action that
            - if addListing is passed through, the listing will be added to listings state
            - if editListings is passed through, the listing will update the same listing in state
    @return: Returns a form that accepts input for adding or editing a listing
*/
function ListingForm(props){
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        // Add listing to state/overwrite current listing in state
        props.listingAction(data);
        e.target.reset();
    }

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>Location</Label>
            <Input
                name='location'
                ref={register({
                    required: true,
                    minLength: 6
                })}
            />
            <Label>Room Type</Label>
            <Input
                name='type'
                ref={register({
                    required: true,
                    minLength: 6
                })}
            />
            <Label>Minimum Nights Required</Label>
            <Input
                name='nights'
                ref={register({
                    required: true,
                })}
            />
            <Input type='submit' className='submit-button' value='Add Listing'/>
        </Form>
    )
}

export default ListingForm;