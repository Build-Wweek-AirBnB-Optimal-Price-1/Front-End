import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { registerAction } from '../actions/authActions';
import { Form, Input, Label, Error } from './PresentationalComponents';

function SignUp(){
    const { register, handleSubmit, errors, watch } = useForm();
    const [ error, setError ] = useState('');

    // Submit data to back-end and reset form
    const onSubmit = (data, e) => {
        data = {
            username: data[0],
            password: data[1]
        };
        registerAction(data, setError);
        e.target.reset();
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
            <Input type='submit' submit value='Create Account'/>
        </Form>
    );
}

export default SignUp;