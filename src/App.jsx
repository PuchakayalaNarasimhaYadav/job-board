import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Nav-bar";
import Home from "./Components/Home/Home";
import Signin from "./Components/Sign-in/Sign-in";
import Footercomponent from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Sign-up/Sign-up";
import Pagenotfound from "./Components/Page Not Found/Pagenotfound";
import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar";
export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footercomponent />
      </div>
    </>
  );
}
