import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <span className="navbar-language">EN</span>
          <div className="navbar-search-container">
            <input className="navbar-input" placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="navbar-center">
          <h1 className="navbar-logo">LAMA.</h1>
        </div>
        <div className="navbar-right">
          <div className="navbar-menu-item">REGISTER</div>
          <div className="navbar-menu-item">SIGN IN</div>
          <div className="navbar-menu-item">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
