import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginAction } from '../actions/authActions';
import { Form, Input, Label, Error } from './PresentationalComponents';

function Login(){
    const { register, handleSubmit, errors } = useForm();
    const [ error, setError ] = useState('');

    // Submit data to back-end and reset form
    const onSubmit = (data, e) => {
        loginAction(data, setError);
        e.target.reset();
    }

    return(
        <Form auth onSubmit={handleSubmit(onSubmit)}>
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
            <Input type='submit' submit value='Login'/>
        </Form>
    );
}

export default Login;