import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { registerAction } from '../actions/authActions';

const Form = styled.form`
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
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

function SignUp(){
    const { register, handleSubmit, errors, watch } = useForm();

    // Submit data to back-end and reset form
    const onSubmit = (data, e) => {
        console.log('submitting');
        e.target.reset();
        registerAction(data);
    }

    // Watch first password input field to match with second password input field
    const password = useRef({});
    password.current = watch('password', '');

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>Username</Label>
            <Input
                name='username'
                ref={register({ required: true, minLength: 3 })}
                placeholder='username'
            />
            {errors.username && errors.username.type === 'required' && <Error margin>Please enter a username</Error>}
            {errors.username && errors.username.type === 'minLength' && <Error margin>Username must be at least 3 characters long</Error>}

            <Label>Password</Label>
            <Input
                name='password'
                type='password'
                ref={register({ 
                    required: true, 
                    minLength: 6,
                })}
                placeholder='password'
            />
            {errors.password && errors.password.type === 'required' && <Error margin>Please enter a password</Error>}
            {errors.password && errors.password.type === 'minLength' && <Error margin>Password must be 6 characters long</Error>}

            <Label>Confirm Password</Label>
            <Input
                name='passwordMatch'
                type='password'
                ref={register({
                    validate: value => value === password.current
                })}
                placeholder='password'
            />
            {errors.passwordMatch && errors.passwordMatch.type === 'validate' && <Error>Passwords don't match</Error>}
            <Input type='submit' className='submit-button' value='Create Account'/>
        </Form>
    );
}

export default SignUp;