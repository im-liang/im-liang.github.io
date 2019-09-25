import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <hr className="footer-line"/>
        <p>© {(new Date().getFullYear())} Claire Liang.  All rights reserved.</p>
      </div>
    );
  }
}

export default Footer;
