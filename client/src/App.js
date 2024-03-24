import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Category from "./Pages/Category/Category";
import Tags from "./Pages/Tags/Tags";
import User from "./Pages/User/User";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import ProjectView from "./Pages/ProjectView/ProjectView";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/contact-us" exact Component={Contact} />
        <Route path="/projects" exact Component={Projects} />
        <Route path="/project/:project" exact Component={ProjectView} />
        <Route path="/login" exact Component={Login} />
        <Route path="/register" exact Component={Signup} />
        <Route path="/category/:category" exact Component={Category} />
        <Route path="/tag/:tag" exact Component={Tags} />
        <Route path="/user/:user" exact Component={User} />
        <Route path="/dashboard" exact Component={Dashboard} />
        <Route path="*" exact Component={NotFound} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
