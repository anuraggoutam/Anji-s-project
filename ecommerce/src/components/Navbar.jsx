import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined, Menu as MenuIcon, Close } from "@material-ui/icons";
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <span className="navbar-language">EN</span>
          <div className="navbar-search-container">
            <input className="navbar-input" placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
          <div className="navbar-mobile-menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <Close /> : <MenuIcon />}
          </div>
        </div>
        <div className="navbar-center">
          <h1 className="navbar-logo">Ecom Store.</h1>
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
        <div className="navbar-mobile-cart">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </div>
      </div>
      <div className={`navbar-mobile-menu ${mobileMenuOpen ? 'navbar-mobile-menu-open' : ''}`}>
        <div className="navbar-mobile-search">
          <div className="navbar-mobile-search-container">
            <input className="navbar-mobile-input" placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="navbar-mobile-menu-item">REGISTER</div>
        <div className="navbar-mobile-menu-item">SIGN IN</div>
      </div>
    </div>
  );
};

export default Navbar;
