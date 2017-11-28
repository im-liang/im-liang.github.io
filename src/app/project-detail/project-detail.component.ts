import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project }        from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.project = this.projectService.getProjectById(params.get('id'));
    });
  }
}
