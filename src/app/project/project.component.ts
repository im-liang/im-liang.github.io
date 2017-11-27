import { Component, OnInit } from '@angular/core';

export class Project {
  id: number;
  name: string;
  hightlight: string;
  description: string;
  image: string;
}
const PROJECTS: Project[] = [
  { name: 'Mr. Nice',  hightlight: 'p', id: 1, image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Narco',     hightlight: 'p', id: 2, image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Bombasto',  hightlight: 'p', id: 3, image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Celeritas', hightlight: 'p', id: 4, image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Magneta',   hightlight: 'p', id: 5, image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'RubberMan', hightlight: 'p', id: 6, image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Dynama',    hightlight: 'p', id: 7, image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Dr IQ',     hightlight: 'p', id: 8, image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Magma',     hightlight: 'p', id: 9, image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' },
  { name: 'Tornado',   hightlight: 'p', id: 10, image: '/assets/bg.jpg', description: 'Zoe never had the patience of her sisters. She deliberately punched the bear in his face.' }
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
