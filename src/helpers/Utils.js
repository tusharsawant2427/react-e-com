import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Shop from "../pages/Shop";

import { storage_key } from "./Constant";

export function user() {
  const user =
    localStorage.getItem(storage_key) != null
      ? JSON.parse(localStorage.getItem(storage_key))
      : null;
  return user;
}

export function signOutUser() {
  localStorage.removeItem(storage_key);
  return true;
}

export function currentPage(route, userInfo) {
  if (route === "Home") {
    return <Home />;
  } else if (route === "About") {
    return <About />;
  } else if (route === "Contact-us") {
    return <Contact />;
  } else if (route === "Shop") {
    return <Shop />;
  } else if (route === "Product") {
    return <Product />;
  }
  else if (route === "Login" && userInfo === null) {
    return <Login />;
  } else {
    return <Home />;
  }
}
