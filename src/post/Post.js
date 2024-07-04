import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Markdown from 'react-markdown';
import hljs from 'highlight.js';
import Giscus from '@giscus/react';
import BlogData from '../blog/assets/Blog.json';
import './Post.css';
import 'highlight.js/styles/androidstudio.css';

const Post = () => {
  const location = useLocation();
  const path = location.pathname;
  const currentFilename = path.substring(path.lastIndexOf('/') + 1);

  const [content, setContent] = useState('');
  const [article, setArticle] = useState({
    title: "404 Article Not Found",
    info: "Feel free to shoot me an email about the blog idea you have =)",
    image: "/card-background/snow.jpg"
  });

  useEffect(() => {
    const getArticleContent = async (filename) => {
      try {
        const response = await fetch(filename);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error fetching file:', error);
      }
    };

    const constructDefaultArticle = () => {
      return {
        title: "404 Article Not Found",
        info: "Feel free to shoot me an email about the blog idea you have =)",
        image: "/card-background/snow.jpg"
      };
    };

    const getArticle = (name) => {
      const foundArticle = BlogData.blog.find(blog => {
        return blog.link.substring(blog.link.lastIndexOf("/") + 1) === name;
      });

      if (foundArticle) {
        getArticleContent(`/articles/${name}.md`);
        setArticle(foundArticle);
        return foundArticle;
      } else {
        return constructDefaultArticle();
      }
    };

    hljs.highlightAll();

    const data = getArticle(currentFilename);

  }, [currentFilename]); // Dependency array to run effect when currentFilename changes

  return (
    <div className="post">
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} />
      <Markdown className="content">{content}</Markdown>
      <Giscus
        repo="im-liang/im-liang.github.io"
        repoId="MDEwOlJlcG9zaXRvcnk1NDczMTYwMQ=="
        category="General"
        categoryId="DIC_kwDOA0MjUc4Cgj46"      
        mapping="pathname"
        term="pathname"
        reactionsEnabled="true"
        emitMetadata="0"
        crossorigin="anonymous"
        async
        createDiscussion="true"
      />
    </div>
  );
};

export default Post;
