import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import BlogData from '../blog/assets/Blog.json';
import './Post.css';


class Post extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      metaData: this.getArticle(this.props.match.params.name),
      content: null
    };
  }

  getArticle(name) {
    for(let i = 0; i < BlogData.blog.length; i++) {
      if(BlogData.blog[i].link.substring(BlogData.blog[i].link.lastIndexOf("/") + 1) === name) {
        this.getArticleContent(`/articles/${name}.md`);
        return BlogData.blog[i];
      }
    }
    return this.constructDefaultArticle();
  }

  constructDefaultArticle() {
    let article = [];
    article["title"] = "404 Article Not Found";
    article["info"] = "Feel free to shoot me an email about the blog idea you have =)";
    article["image"] = "/card-background/snow.jpg";
    this.getArticleContent(`/articles/default-article.md`);

    return article;
  }

  getArticleContent(filename) {
    fetch(filename)
      .then((response) => response.text())
      .then(text  => {
        this.setState({content: text})
      });
  }

  render() {
    return (
      <div className="post">
        <h1>{this.state.metaData.title}</h1>
        <img src={this.state.metaData.image} alt="post image" />
        <ReactMarkdown source={this.state.content} className="content" />
      </div>
    );
  }
}

export default Post;
