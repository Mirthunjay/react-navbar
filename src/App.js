import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Marketing from "./pages/Marketing";
import Product from "./pages/Product";
import ContactUs from "./pages/ContactUs";
import Consulting from "./pages/Consulting";
import Home from "./pages/Home";
import Service from "./pages/Service";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/services" exact component={Service} />
        <Route path="/marketing" exact component={Marketing} />
        <Route path="/products" exact component={Product} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/consulting" exact component={Consulting} />
      </Switch>
    </Router>
  );
}

export default App;
