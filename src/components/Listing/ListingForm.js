import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.form`
    width: 100%;
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

function ListingForm(){
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
        e.target.reset();
        // Add listing to state/overwrite current listing in state
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
            <Input type='submit' className='submit-button'/>
        </Form>
    )
}

export default ListingForm;