import React, { Component } from 'react';
import './Blog.css';
import Header from './header/Header';
import Card from './card/Card';
import BlogMetaData from './assets/Blog.json'

class Blog extends Component {
  render() {
    return (
    	<div className="main">
    		<Header />
          <div className="card-container">
            {BlogMetaData.blog.map((item, i) =>
              <Card key={i} image={item.image} title={item.title} introduction={item.introduction} info={item.info} time={item.time} date={item.date} link={item.link}/>
            )}
          </div>
    	</div>
    );
  }
}

export default Blog;
