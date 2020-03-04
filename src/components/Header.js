import React from 'react';
import { Link } from 'react-router-dom';
import { logoutAction } from '../actions/authActions';
import Logo from '../assets/logo.png';
import {HeaderStruct, HeaderLogo, Navigation, LinkContainer} from './PresentationalComponents';

// Displays public header to un-registered/un-authenticated users
function Header(){
    const token = window.localStorage.getItem('token');
    if(token){
        return(
            <HeaderStruct>
                <HeaderLogo src={Logo} alt='Optimal BNB' />
                <Navigation>
                    <Link to='/listings'>Listings</Link>
                    <Link onClick={logoutAction}><LinkContainer>Log Out</LinkContainer></Link>
                </Navigation>
            </HeaderStruct>  
        );
    }else{
        return(
            <HeaderStruct>
                <HeaderLogo src={Logo} alt='Optimal BNB' />
                <Navigation>
                    {/* Temporary link for development */}
                    <Link to='/listings'>Listings</Link>

                    {/* Link to marketing about page */}
                    <a>About</a>

                    <Link to='/login'>Login</Link>
                    <Link to='/signup'><LinkContainer>Sign Up</LinkContainer></Link>
                </Navigation>
            </HeaderStruct>  
        );
    }
}

export default Header;