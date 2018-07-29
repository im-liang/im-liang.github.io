import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Work from './work/Work';
import Blog from './blog/Blog';
import Post from './post/Post';
import NotFound from './404/NotFound';

class App extends Component {
  render() {
    return (
    	<div className="main">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:name" component={Post} />
          <Route component={NotFound}/>
        </Switch>
    	</div>
    );
  }
}

export default App;
