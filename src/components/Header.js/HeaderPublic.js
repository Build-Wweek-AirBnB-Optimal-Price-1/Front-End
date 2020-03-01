import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
`;

const Navigation = styled.nav`
    display: flex;
    align-items: center;
`;

const LinkContainer = styled.div`
    border-radius: 10px;
    background-color: #FF5A5F;
    padding: 10px 15px;
    color: white;
    &:hover{
        cursor: pointer;
    }
`;

// Displays public header to un-registered/un-authenticated users
function HeaderPublic(){
    return(
        <Header>
            <h1>Logo Here</h1>
            <Navigation>
                {/* Link to marketing about page */}
                <a>About</a>
                
                <Link to='/login'>Login</Link>
                <Link to='signup'><LinkContainer>Sign Up</LinkContainer></Link>
            </Navigation>
        </Header>        
    );
}

export default HeaderPublic;