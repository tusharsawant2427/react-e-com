import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";

const WebRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Main route="Home" />} />
      <Route path="/about" element={<Main route="About" />} />
      <Route path="/contact-us" element={<Main route="Contact-us" />} />
      <Route path="/shop" element={<Main route="Shop" />} />

      <Route path="/login" element={<Main route="Login" />} />
      <Route path="*" element={<Main route="Home" />} />
    </Routes>
  );
};

export default WebRoute;
