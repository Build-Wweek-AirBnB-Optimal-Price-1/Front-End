import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { logoutAction } from '../actions/authActions';
import Logo from '../assets/logo.png';
import {HeaderStruct, HeaderLogo, Navigation, LinkContainer} from './PresentationalComponents';
import '../App.css';

// Displays public header to un-registered/un-authenticated users
function Header(){
    const history = useHistory();
    const token = window.localStorage.getItem('token');
    if(token){
        return(
            <HeaderStruct>
                <HeaderLogo src={Logo} alt='Optimal BNB' />
                <Navigation>
                    <Link to='/listings'>Listings</Link>
                    <Link onClick={() => logoutAction(history)}><LinkContainer>Log Out</LinkContainer></Link>
                </Navigation>
            </HeaderStruct>  
        );
    }else{
        return(
            <HeaderStruct>
                <a href='https://build-wweek-airbnb-optimal-price-1.github.io/Marketing-Page/index.html'>
                    <HeaderLogo src={Logo} alt='Optimal BNB' />
                </a>
                <Navigation>                    
                    <a href={'https://build-wweek-airbnb-optimal-price-1.github.io/Marketing-Page/about-us.html'}>
                        About
                    </a>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'><LinkContainer>Sign Up</LinkContainer></Link>
                </Navigation>
            </HeaderStruct>  
        );
    }
}

export default Header;