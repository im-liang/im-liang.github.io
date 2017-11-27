import { Component, OnInit } from '@angular/core';

export class Project {
  name: string;
  link: string;
  description: string;
}
const PROJECTS: Project[] = [
  { name: 'Mr. Nice', link: '#', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Narco', link: '#', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Bombasto', link: '#', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Celeritas', link: '#', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Magneta', link: '#', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'RubberMan', link: '#', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Dynama', link: '#', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Dr IQ', link: '#', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Magma', link: '#', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Tornado', link: '#', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' }
];

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects = PROJECTS;

  constructor() { }

  ngOnInit() {
  }

}
