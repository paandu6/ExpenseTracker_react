import './App.css';
import  { useContext } from "react";
import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom'
import Login from './Pages/Auth/Login';
import Home from './Pages/Profile/Home'
import UpdateProfile from './Pages/Profile/UpdateProfile';
import AuthContext, { AuthContextProvider } from './Storage/authContext';
import ForgotPassword from './Pages/Auth/ForgotPassword';
function App() {
  const ctx=useContext(AuthContext)
  return (
    <AuthContextProvider>
      <Switch>
    { <Route path="/login">
      <Login />
      </Route>}

      { <Route path="/home">
      <Home />
      </Route>
      }
      { <Route path="/updateprofile">
      <UpdateProfile />
      </Route>}
      <Route path="/forgotpassword">
      <ForgotPassword />
      </Route>
      <Route path='*'>
        <Redirect to='/login'></Redirect>
      </Route>
      </Switch>
    </AuthContextProvider>
  );
}

export default App;
