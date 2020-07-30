import { Component, OnInit } from '@angular/core';
declare const ga: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-google-analytics';

  ngOnInit() {
    console.log(ga);
    ga('create', 'UA-174052756-1', 'auto');
    ga('send', 'pageview');
  }
}
