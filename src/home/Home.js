import React, {Component} from 'react';
import './Home.css';
import Typist from 'react-typist';
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
            <Typist>
              <span> I am a software engineer </span>
              <Typist.Backspace count={24} delay={200}/>
              <span> live in Washington </span>
            </Typist>
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
