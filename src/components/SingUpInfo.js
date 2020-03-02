import React from 'react';
import styled from 'styled-components';

const Requirements = styled.div`
    margin-top: 80px;
    margin: 80px auto;
    width: 50%;
    max-width: 300px;
    min-width: 260px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #00A699;
    padding: 30px 20px;
    border-radius: 10px;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-family: 'Raleway';
    text-align: center;
    color: white;
`;

const Heading = styled.h6`
    font-size: 1.5rem;
    font-family: 'Raleway'; 
    margin-top: 20px;
    margin-bottom: 10px;
    color: white;
`;

const ListItem = styled.li`
    list-style: circle inside;
    font-size: 1.3rem;
    font-family: 'Raleway'; 
    color: white;
`;

function SignUpInfo(){
    return(
        <Requirements>
            <Title>Sign Up</Title>
            <div>
                <Heading>Username Requirements</Heading>
                <ul>
                    <ListItem>Username must be at least 3 characters long</ListItem>
                </ul>
                <Heading>Password Requirements</Heading>
                <ul>
                    <ListItem>Password must be at least 6 characters long</ListItem>
                </ul>
            </div>
        </Requirements>
    )
}

export default SignUpInfo;