import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import { user } from "../helpers/Utils";
import { Navigate } from 'react-router-dom';

const WebRoute = () => {
  const userInfo = user();
  return (
    <Routes>
      <Route path="/" element={<Main route="Home" />} />
      <Route path="/about" element={<Main route="About" />} />
      <Route path="/contact-us" element={<Main route="Contact-us" />} />
      <Route path="/shop" element={<Main route="Shop" />} />

      <Route path="/login" element={userInfo === null ? <Main route="Login" /> : <Navigate to='/' />} />
    </Routes>
  );
};

export default WebRoute;
