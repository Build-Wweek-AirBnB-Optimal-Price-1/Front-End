import React from 'react';
import HeaderPublic from './components/Header.js/HeaderPublic';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Default Route? */}
      <Route path='/login'>
        <HeaderPublic/>
        <Login/>
      </Route>
      <Route path='/signup'>
        <HeaderPublic/>
        <SignUp/>
      </Route>
    </div>
  );
}

export default App;
