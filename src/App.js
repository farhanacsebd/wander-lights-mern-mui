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
import Pay from "./Pages/Dashboard/Pay/Pay";
import Review from "./Pages/Dashboard/Review/Review";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import Footer from "./Pages/Home/Shared/Footer/Footer";
import Navigation from "./Pages/Home/Shared/Navigation/Navigation";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import ManageAllOrder from "./Pages/ManageAllOrder/ManageAllOrder";
import ManageAllProduct from "./Pages/ManageAllProduct/ManageAllProduct";
import MyOrder from "./Pages/MyOrder/MyOrder";
import Notfound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch> <Route exact path="/">
            <Home />
          </Route>
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
            <Route path="/Services">
              <Services />
            </Route>
            <PrivateRoute path="/AddService">
              <AddService />
            </PrivateRoute>


            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>

            <PrivateRoute path="/Pay">
              <Pay />
            </PrivateRoute>

            <AdminRoute path="/ManageAllOrder">
              <ManageAllOrder></ManageAllOrder>
            </AdminRoute>
            <AdminRoute path="/MyOrder">
              <MyOrder></MyOrder>
            </AdminRoute>
            <AdminRoute path="/ManageAllProduct">
              <ManageAllProduct />
            </AdminRoute>
            <AdminRoute path="/makeAdmin">
              <MakeAdmin />
            </AdminRoute>

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
