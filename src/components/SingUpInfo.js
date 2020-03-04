import React from 'react';
import { Requirements, Heading, ListItem, Title } from './PresentationalComponents';

function SignUpInfo(){
    return(
        <Requirements>
            <Title info>Sign Up</Title>
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