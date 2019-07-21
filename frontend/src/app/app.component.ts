import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'frontend';

  ngOnInit() {
    
  }
  
  ngAfterViewInit() {
    this.loadSideNav();
  }

  loadSideNav() {
    $(document).ready(() => {
      $(".sidenav").sidenav();
    });
  }

}
