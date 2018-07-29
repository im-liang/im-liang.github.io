import React, { Component } from 'react';
import './NavItem.css';

class NavItem extends Component {
  
  render() {
    return (
    	<a className="nav-item" href={this.props.url}>{this.props.text}</a>
    );
  }
}

export default NavItem;
