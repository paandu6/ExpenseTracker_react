import './App.css';
import  { Fragment } from "react";
import React from 'react';
import {Route, Switch,Redirect} from 'react-router-dom'
import Auth from './Pages/Auth';
import Home from './Pages/Home'

function App() {
  return (
    <Fragment>
      <Route path="/home">
      <Home />
      </Route>
      <Route path="/auth">
      <Auth />
      </Route>
    </Fragment>
  
  );
}

export default App;
