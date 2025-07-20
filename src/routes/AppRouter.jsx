import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/signup/page";
import SignUp2 from "../pages/signup2/page";
import Login from "../pages/login/page";
import Fpass from "../pages/fpass/page";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup2" element={<SignUp2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fpass" element={<Fpass/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
