import React, { Component } from 'react';
import './Navbar.css';
import NavItem from './navItem/NavItem';

class Navbar extends Component {
  render() {
    return (
    	<nav>
        {window.location.pathname !== "/" ? <NavItem url="/" text="Home" /> : null}
        {window.location.pathname !== "/blog" ? <NavItem url="/blog" text="Blog" /> : null}
    	</nav>
    );
  }
}

export default Navbar;
