import React from "react";
import "./header.scss";
import logo from "../../assets/svg/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <div className="header__item">React On My Way</div>
    </header>
  );
};

export default Header;
