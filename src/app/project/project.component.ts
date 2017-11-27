import { Component, OnInit } from '@angular/core';

export class Project {
  name: string;
  hightlight: string;
  link: string;
  description: string;
  image: string;
}
const PROJECTS: Project[] = [
  { name: 'Mr. Nice', hightlight: 'p', link: '#', image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Narco', hightlight: 'p', link: '#', image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Bombasto', hightlight: 'p', link: '#', image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Celeritas', hightlight: 'p', link: '#', image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Magneta', hightlight: 'p', link: '#', image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'RubberMan', hightlight: 'p', link: '#', image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Dynama', hightlight: 'p', link: '#', image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Dr IQ', hightlight: 'p', link: '#', image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Magma', hightlight: 'p', link: '#', image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Tornado', hightlight: 'p', link: '#', image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' }
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
