import React from 'react';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ListingPage from './components/Listing/ListingPage';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Default Route? */}
      <Header/>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/signup'>
        <SignUp/>
      </Route>
      <Route path='/listings'>
        <ListingPage/>
      </Route>
    </div>
  );
}

export default App;
