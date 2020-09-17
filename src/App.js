import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';
import Home from './components/Home/Home';
import NotMatch from './components/NotMatch/NotMatch';
import ConfirmBook from './components/ConfirmBook/ConfirmBook';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {

  const [signInUser, setSignInUser] = useState({});
  return (
    <UserContext.Provider value={[signInUser, setSignInUser]}>
      <p>{signInUser.email}</p>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/booking/:id">
            <Booking></Booking>
          </Route>
          <PrivateRoute path="/confirm">
            <ConfirmBook />
          </PrivateRoute>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
