import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
`;

const Navigation = styled.nav`
    display: flex;
    align-items: center;
`;

const LinkContainer = styled.div`
    margin: 0 20px;
    border-radius: 10px;
    background-color: #FF5A5F;
    padding: 10px;
    &:hover{
        cursor: pointer;
    }
`;

function HeaderPublic(){
    return(
        <Header>
            <h1>Logo Here</h1>
            <Navigation>
                <a>About</a>
                <Link to='/login'>Login</Link>
                <LinkContainer><Link to='signup' className='sign-up'>Sign Up</Link></LinkContainer>
            </Navigation>
        </Header>        
    );
}

export default HeaderPublic;