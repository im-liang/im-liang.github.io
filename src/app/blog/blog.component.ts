import { Component, OnInit } from '@angular/core';
import { Blog } from '../data/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: Blog[];
  content: String;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getBlogs()
      .subscribe(blogs => this.blogs = blogs);
  }

  searchBlogs(content): void {
    if(this.cleanSearchInput(content)) {
      this.blogs = this.blogService.searchBlogs(content);
    }else {
      this.getBlogs();
    }
    this.jumpToId('blog-container');
  }

  jumpToId(fragment): void {
    window.location.hash = fragment;

    if (fragment) {
      const element = document.querySelector('#' + fragment);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  cleanSearchInput(content): String[] {
    content = content.trim().toLowerCase();
    return content;
  }
}
