import React, { Component } from 'react';
import './Navbar.css';
import NavItem from './navItem/NavItem';

class Navbar extends Component {
  render() {
    return (
    	<nav>
        {window.location.pathname !== "/" ? <NavItem url="/" text="Home" /> : null}
        {window.location.pathname !== "/blog" ? <NavItem url="/blog" text="Article" /> : null}
        {window.location.pathname !== "/Journal" ? <NavItem url="https://lets-blogy.netlify.app" text="Journal" /> : null}
    	</nav>
    );
  }
}

export default Navbar;
