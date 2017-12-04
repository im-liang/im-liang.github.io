import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Blog } from '../data/blog';
import { BLOG } from '../data/blog-data';

@Injectable()
export class BlogService {

  constructor() { }

  getBlogByLink(link): Blog {
    return BLOG.find(blog => blog.link == link);
  }

  getBlogs(): Observable<Blog[]> {
    return of(BLOG);
  }
}
