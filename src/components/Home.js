import React from "react";
import Header from "./_partials/header";
import "../css/custom.css";

const Home = ({ userMenuShow, onUserMenuClick }) => {
  return (
    <>
      <Header userMenuShow={userMenuShow} onUserMenuClick={onUserMenuClick} />
    </>
  );
};

export default Home;
