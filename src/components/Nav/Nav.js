import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import Logo from "../../Assets/images/white-logo.png";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsNavbarFixed(window.scrollY >= 500);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className={isNavbarFixed ? "fixed-navbar" : ""}>
        <img src={Logo} alt="Logo-img" />
        <ul>
          <li >
            <NavLink to="/" >Homepage</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/work">Explore Work</NavLink>
          </li>
          <li>
            <NavLink to="/trend">Trending</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
        <div className="menu-logo">
          <span class="material-symbols-outlined" onClick={showDrawer}>
            menu
          </span>
        </div>
      </nav>
      <div className="mobile-nav">
        <Drawer
          placement="top"
          onClose={onClose}
          open={open}
          height={350}
          drawerStyle={{
            backgroundColor: "#343a40",
            color: "white",
          }}
        >
          <ul>
            <li onClick={onClose}>
              <NavLink to="/">Homepage</NavLink>
            </li>
            <li onClick={onClose}>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li onClick={onClose}>
              <NavLink to="/work">Explore Work</NavLink>
            </li>
            <li onClick={onClose}>
              <NavLink to="/trend">Trending</NavLink>
            </li>
            <li onClick={onClose}>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </Drawer>
      </div>
    </>
  );
};

export default Nav;
