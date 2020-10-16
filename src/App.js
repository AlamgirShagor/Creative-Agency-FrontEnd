import React, { createContext, useState } from 'react';

import './App.css';
import Home from './Compunents/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Compunents/Login/Login';
import Order from './Compunents/Customar/Order/Order';
import CustomarDisplay from './Compunents/Customar/CustomarDisplay/CustomarDisplay';
import ServiceList from './Compunents/Customar/ServiceList/ServiceList';
import Review from './Compunents/Customar/Review/Review';
import PrivateRoute from './Compunents/Login/PrivateRoute/PrivateRoute';
import AdminHeader from './Compunents/Admin/AdminHeader/AdminHeader';
import AdminServicList from './Compunents/Admin/AdminServicList/AdminServicList';
import AddService from './Compunents/Admin/AddService/AddService';
import MakeAdmin from './Compunents/Admin/MakeAdmin/MakeAdmin';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
    <Switch>
          <Route path="/AdminHeader">
            <AdminHeader></AdminHeader>
          </Route>
          <Route path="/AddService">
            <AddService></AddService>
          </Route>
          <Route path="/MakeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/AdminServicList">
            <AdminServicList></AdminServicList>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          
          <PrivateRoute path="/customarDisplay">
            <CustomarDisplay></CustomarDisplay>
          </PrivateRoute>
          <Route path="/serviceList">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
