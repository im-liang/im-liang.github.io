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

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getBlogs()
      .subscribe(blogs => this.blogs = blogs);
  }

  jumpToId( fragment ): void {

    // Use the browser to navigate
    window.location.hash = fragment;

    // But also scroll when routing / deep-linking to dynamic page
    // or re-clicking same anchor
    if (fragment) {
        const element = document.querySelector('#' + fragment);
        if (element) element.scrollIntoView({behavior: 'smooth'});
    }
}

}
