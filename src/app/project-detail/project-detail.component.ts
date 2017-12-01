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
  curPage: number = 0;
  numOfPages: number;
  animTime: number = 1000;
  scrolling: boolean = false;

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.project = this.projectService.getProjectById(params.get('id'));
      this.numOfPages = this.project.pages.length;
    });
  }

  pagination(): void {
    this.scrolling = true;

    setTimeout(() => {
      this.scrolling = false;
    }, this.animTime);
  }

  navigateUp(): void {
    if(this.curPage == 0)
      return;
    this.curPage--;
    this.pagination();
  }

  navigateDown(): void {
    if(this.curPage == this.numOfPages - 1)
      return;
    this.curPage++;
    this.pagination();
  }


}
