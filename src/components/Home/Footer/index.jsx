import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header(props) {
  const userStr = localStorage.getItem("user");
  const [navClass, setNavClass] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(userStr ? true : false);

  return (

    <footer className='' >

    </footer>
  );
}

export default Header;
