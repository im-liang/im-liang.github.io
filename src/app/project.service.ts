import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Project } from './project';
import { PROJECTS } from './project-data';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjectById(id): Project {
    return PROJECTS.find(project => project.id == id);
  }
  
  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }
}
