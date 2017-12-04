import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var typed = new Typed('#element', {
      strings: ["I Software Engineer", "I live in New York"],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true
    });
  }
}
