import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Home from './home/Home';
import Blog from './blog/Blog';
import Post from './post/Post';
import NotFound from './404/NotFound';
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/:name" component={Post} />
            <Route component={NotFound}/>
          </Switch>
        </div>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;
