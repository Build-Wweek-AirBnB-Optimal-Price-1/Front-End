import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.form`
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 15%;
`;

const Input = styled.input`
    width: 50%;
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

function Login(){
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>Email</Label>
            <Input
                name='email'
                ref={register({ required: true })}
                placeholder='email'
            />
            {errors.email && <p>Email Required</p>}
            <Label>Password</Label>
            <Input
                name='password'
                ref={register({ required: true })}
                placeholder='password'
            />
            {errors.password && <p>Password Required</p>}
            <Input type='submit' className='submit-button'/>
        </Form>
    );
}

export default Login;