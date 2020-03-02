import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { loginAction } from '../actions/authActions';

const Form = styled.form`
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Input = styled.input`
    width: 50%;
    max-width: 400px;
    min-width: 300px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
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

const Error = styled.p`
    font-size: 1.5rem;
    text-align: center;
    font-family: 'Raleway';
    color: red;
    margin-bottom: ${props => props.margin ? '20px' : '0'};
`;

function Login(){
    const { register, handleSubmit, errors } = useForm();

    // Submit data to back-end and reset form
    const onSubmit = (data, e) => {
        e.target.reset();
        loginAction(data);
    }

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>Username</Label>
            <Input
                name='username'
                ref={register({ required: true })}
                placeholder='username'
            />
            {errors.username && <Error margin>Username Required</Error>}
            <Label>Password</Label>
            <Input
                name='password'
                type='password'
                ref={register({ required: true })}
                placeholder='password'
            />
            {errors.password && <Error>Password Required</Error>}
            <Input type='submit' className='submit-button' value='Login'/>
        </Form>
    );
}

export default Login;