import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolioWebsite';
  activeRoute: string;

  constructor() {}
  ngOnInit(): void {}
}
