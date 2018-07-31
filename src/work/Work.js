import React, { Component } from 'react';
import './Work.css';
import Header from './header/Header';
import Project from './project/Project';
import ProjectData from './assets/ProjectData.json';

class Work extends Component {
  render() {
    return (
    	<div className="main">
    		<Header />
    		{ProjectData.project.map((item, i) => 
    			<Project key={i} title={item.title} backgroundColor={item.backgroundColor} description={item.description} link={item.link} linkColor={item.linkColor} img={item.img} />
    		)}
    	</div>
    );
  }
}

export default Work;
