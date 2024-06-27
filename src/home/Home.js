import React, {Component} from 'react';
import './Home.css';
import { TypeAnimation } from 'react-type-animation';
import Experience from './experience/Experience';
import Project from "./project/Project";
// assets
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import email from './assets/email.png';

class Home extends Component {
  render() {
    return (
      <div className="homeParent">
        <div className="container">
          <h1>Claire Liang</h1>
          <div className="typingContainer">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'I am a software engineer',
              1000, // wait 1s before replacing
              'live in Washington',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
          </div>
          <div className="linkContainer">
            <a href='https://github.com/im-liang'><img src={github} alt="Github"/></a>
            <a href='https://www.linkedin.com/in/jieliang1/'><img src={linkedin} alt="Linkedin"/></a>
            <a href='mailto:jie.liang.cs@gmail.com'><img src={email} alt="Email"/></a>
          </div>
        </div>
        <Experience/>
        <Project/>
      </div>
    );
  }
}

export default Home;
