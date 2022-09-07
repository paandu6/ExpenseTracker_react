import './App.css';
import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom'
import Login from './Pages/Auth/Login';
import Home from './Pages/Profile/Home'
import UpdateProfile from './Pages/Profile/UpdateProfile';
import  { AuthContextProvider } from './Storage/authContext';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import { ExpensesContectProvider } from './Storage/expenseContext';
import {useSelector} from 'react-redux'

function App() {
  const isLoggedin=useSelector(state=>state.auth.isLoggedin)
  console.log(isLoggedin)
  return (
    <ExpensesContectProvider>
    <AuthContextProvider>
      <Switch>
    {!isLoggedin && <Route path="/login">
      <Login  />
      </Route>}

      {isLoggedin && <Route path="/home">
      <Home />
      </Route>
      }
      { <Route path="/updateprofile">
      <UpdateProfile />
      </Route>}
      {<Route path="/forgotpassword">
      <ForgotPassword />
      </Route>}
      {!isLoggedin && <Route path='*'>
      <Redirect to='/login'></Redirect>
      </Route>}
      </Switch>
    </AuthContextProvider>
    </ExpensesContectProvider>
  );
}

export default App;
