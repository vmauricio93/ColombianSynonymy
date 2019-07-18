import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/app/services/word.service';
import { log } from 'util';

declare var $ : any;
declare var Draggabilly : any;

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  
  constructor(private wordService : WordService) { } // se usa wordService en el css
  
  ngOnInit() {
    var $grid = $('.grid').packery({
      columnWidth: '.grid-sizer',
      itemSelector: '.grid-item',
      percentPosition: true
    })
        
  }
  
  
  
}
