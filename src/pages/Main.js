import React, { useState } from "react";
import Header from "../pages/_partials/header";
import { signOutUser, user } from "../helpers/Utils";
import { currentPage } from "../helpers/Utils";
import { useNavigate } from "react-router-dom";

const Main = ({ route }) => {
  const [userMenuShow, onUserMenuShow] = useState(false);
  const navigate = useNavigate();
  const userInfo = user();
  const onUserMenuClick = () => {
    onUserMenuShow(!userMenuShow);
  };

  const onSignOut = () => {
    if(signOutUser()){
      onUserMenuShow(!userMenuShow);
      navigate("/");
    }
  }

  return (
    <Header
      userMenuShow={userMenuShow}
      onUserMenuClick={onUserMenuClick}
      user={userInfo}
      page={currentPage(route, userInfo)}
      onSignOut= {onSignOut}
    ></Header>
  );
};

export default Main;
