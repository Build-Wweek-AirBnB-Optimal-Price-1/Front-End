import React from 'react';

import { createStore, applyMiddleware } from "redux";
import {listingReducer} from "./reducers/listingReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SignUpInfo from './components/SingUpInfo';
import ListingPage from './components/Listing/ListingPage';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

const Title = styled.h1`
  font-size: 2rem;
  font-family: 'Raleway';
  text-align: center;
  margin: 80px 0;
`;

const store = createStore(listingReducer, applyMiddleware(thunk));


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* Default Route? */}
      <Header/>
      <Route path='/login'>
        <Title>Login</Title>
        <Login/>
      </Route>
      <Route path='/signup'>
        <SignUpInfo/>
        <SignUp/>
      </Route>
      <Route path='/listings'>
        <ListingPage/>
      </Route>
    </div>
    </Provider>
  );
}

export default App;
