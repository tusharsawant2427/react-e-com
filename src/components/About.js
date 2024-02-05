import React from "react";
import Header from "./_partials/header";

const About = ({userMenuShow, onUserMenuClick}) => {
  return (
    <Header userMenuShow={userMenuShow} onUserMenuClick={onUserMenuClick} />
  );
};

export default About;
