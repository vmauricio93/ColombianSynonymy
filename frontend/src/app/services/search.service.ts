import { Injectable } from '@angular/core';
import { WordService } from './word.service';
import { Lema } from 'src/app/models/lema';
import { NeovisService } from './neovis.service';

declare var $ : any;

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  data : object;

  constructor(private wordService : WordService, private neovisService : NeovisService) {
    this.data = {};
   }
  
  getData() {
    this.data = {};
    this.wordService.getWords()
      .subscribe(res => {
        this.wordService.words = res as Lema[];
        this.wordService.words.forEach(word => {
          this.data[word.lema as string] = null 
        })
    
        var options = {
          data : this.data,
          onAutocomplete : (lema) => {
            this.wordService.searchedWord.lema = lema;
            //TODO: cuando se selecciona con el teclado hay que dar dos veces Enter
          }};
        
        $(document).ready(function(){
          $('input.autocomplete').autocomplete(options);  
        });
        
                
      });
      
  }

  searchWord(lema : string) {
    this.neovisService.reload(lema);

    this.wordService.queryToNeovis(lema,this.neovisService.query)
    .subscribe(res => {      
      this.neovisService.dataVis.nodes = res['nodes'];
      this.neovisService.dataVis.edges = res['edges'];
      this.neovisService.draw();
    }); 
    
  }

}
