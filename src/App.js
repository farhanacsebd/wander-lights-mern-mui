import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
}
  from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import AddService from "./Pages/AddService/AddService";
import AllServices from "./Pages/AllServices/AllServices";
import Booking from "./Pages/Booking/Booking";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import Review from "./Pages/Dashboard/Review/Review";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import Footer from "./Pages/Home/Shared/Footer/Footer";
import Navigation from "./Pages/Home/Shared/Navigation/Navigation";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import ManageAllOrder from "./Pages/ManageAllOrder/ManageAllOrder";
import MyOrder from "./Pages/MyOrder/MyOrder";
import Notfound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>

            <Route path="/home">
              <Home />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking />
            </PrivateRoute>
            <Route path="/AllServices">
              <AllServices></AllServices>
            </Route>
            <Route path="/ManageAllOrder">
              <ManageAllOrder></ManageAllOrder>
            </Route>
            <Route path="/MyOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <PrivateRoute path="/Services">
              <Services />
            </PrivateRoute>
            <PrivateRoute path="/AddService">
              <AddService />
            </PrivateRoute>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
