import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
  render() {
    return (
    	<section className="project" style={{background: this.props.backgroundColor}}>
    		<img src={process.env.PUBLIC_URL + this.props.img} alt='project screen shot'/>
    		<h2>{this.props.title}</h2>
    		<p>{this.props.description}</p>
    		<a href={this.props.link} style={{background: this.props.linkColor}}>View Work</a>
    	</section>
    );
  }
}

export default Project;
