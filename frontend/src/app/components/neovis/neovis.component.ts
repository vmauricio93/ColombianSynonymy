import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neovis',
  templateUrl: './neovis.component.html',
  styleUrls: ['./neovis.component.css']
})
export class NeovisComponent implements OnInit {

  expandVis : boolean;
  icon : string;

  constructor() {
    this.expandVis = false;
    this.icon = 'add';
  }
    
  ngOnInit() {

  }

  expandVisualization() {
    this.expandVis = !this.expandVis;
    (document.querySelector('.grid-item--width2') as HTMLElement).style.width =
    this.expandVis ? '100%' : '54%';
    this.icon = this.expandVis ? 'remove' : 'add';
    
  }

}
