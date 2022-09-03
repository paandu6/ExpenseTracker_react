import './App.css';
import  { Fragment } from "react";
import React from 'react';
import {Route, Switch,Redirect} from 'react-router-dom'
import Auth from './Pages/Auth/Auth';
import Home from './Pages/Profile/Home'
import UpdateProfile from './Pages/Profile/UpdateProfile';

function App() {
  return (
    <Fragment>
      <Route path="/home">
      <Home />
      </Route>
      <Route path="/auth">
      <Auth />
      </Route>
      <Route path="/updateprofile">
      <UpdateProfile />
      </Route>
    </Fragment>
  
  );
}

export default App;
