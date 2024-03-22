import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact Component={Home} />
      </Routes>
    </Router>
  );
};
export default App;
