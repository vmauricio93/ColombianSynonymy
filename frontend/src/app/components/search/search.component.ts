import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Router, ActivatedRoute } from '@angular/router';
import { WordService } from 'src/app/services/word.service';
import { Entrada } from 'src/app/models/entrada';

declare var $ : any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit, OnDestroy {

  lema : string;
  private subscription : any;

  constructor(private searchService : SearchService,
    private router : Router,
    private wordService : WordService,
    private route : ActivatedRoute) { }

  ngOnInit() {

    this.searchService.getData();
    this.subscription = this.route.paramMap
    .subscribe(paramMap => {
      this.lema = paramMap.get('lema');
      this.search(this.lema);
    });
    
    var $grid = $('.grid').packery({
      columnWidth: '.grid-sizer',
      itemSelector: '.grid-item',
      percentPosition: true
    })
    
  }
  
  ngAfterViewInit() {
    
    if(this.lema !== '_') {
      this.search(this.lema);
    }
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.wordService.searchedWord.lema = '';
    this.wordService.results = [];
  }
  
  search (form : any) {
    var searchedWord = '';
    
    if(form.constructor.name !== 'NgForm') {
      searchedWord = form;
    } else {      
      searchedWord = form.value.autocomplete;    
    }

    if(searchedWord != null && searchedWord.trim().length !== 0) {
      this.router.navigate(['/entrada', searchedWord]); // TODO: Esto hace que se llame el método dos veces (CORS?)
    } else {
      this.router.navigate(['/entrada', '_']);
      searchedWord = '_';
    }
    
    this.searchService.searchWord(searchedWord);
    this.wordService.searchWord(searchedWord)
      .subscribe(res => {
        this.wordService.results = res as Entrada[];
        
      });
    this.searchService.getData();
    
  }

}
