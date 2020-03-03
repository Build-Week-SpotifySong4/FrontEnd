import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../NavBar.scss";

const NavBar = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  // The login to check if the user is loggedin, and if true display logout button in menu instead of login button.
  return (
    <div>
      <Navbar color="solid" style={{ backgroundColor: "#00BE50" }} light>
        <NavbarBrand
          id="brand"
          href={props.loggedIn ? "/homepage" : "/"}
          className="home"
        >
          <h1>Spotify</h1>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="toggle" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {props.loggedIn ? (
              <>
                <NavItem>
                  <NavLink href="/homepage">
                    <h3>Homepage</h3>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/songlist">
                    <h3>Song List</h3>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/logout" className="logout">
                    <h3>Logout</h3>
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink href="/login" className="login">
                    <h3>Login</h3>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/register" className="signup">
                    <h3>Register</h3>
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;