import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Project } from '../data/project';
import { PROJECTS } from '../data/project-data';

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
