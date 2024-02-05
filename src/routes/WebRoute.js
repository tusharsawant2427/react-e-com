import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";

const WebRoute = ({ userMenuShow, onUserMenuClick }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home userMenuShow={userMenuShow} onUserMenuClick={onUserMenuClick} />
        }
      />
      <Route
        path="/about"
        element={
          <About
            userMenuShow={userMenuShow}
            onUserMenuClick={onUserMenuClick}
          />
        }
      />
      <Route
        path="/contact-us"
        element={
          <Contact
            userMenuShow={userMenuShow}
            onUserMenuClick={onUserMenuClick}
          />
        }
      />
      <Route
        path="/shop"
        element={
          <Contact
            userMenuShow={userMenuShow}
            onUserMenuClick={onUserMenuClick}
          />
        }
      />
    </Routes>
  );
};

export default WebRoute;
