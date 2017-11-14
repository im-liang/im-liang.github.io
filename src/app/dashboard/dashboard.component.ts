import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var typed = new Typed('#element', {
      strings: ["test sentence", "Second sentence."],
      typeSpeed: 30,
      backSpeed: 30,
      loop: true
    });
  }

}
