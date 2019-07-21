import { Component, OnInit } from '@angular/core';
import { WordService } from '../../services/word.service';
import { NgForm } from '@angular/forms';
import { Lema } from 'src/app/models/lema';
import { NeovisService } from 'src/app/services/neovis.service';
import { SearchService } from 'src/app/services/search.service';

declare var M : any; // para que no tome la variable M desde typescript sino desde materialize (ya fue declarada)

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  constructor(private wordService : WordService) { }

  ngOnInit() {
    this.getWords();
  }

  addWord(form : NgForm ) {
    
    if (form.value._id) {
      
      this.wordService.putWord(form.value)
      .subscribe((res : any) => {
        this.resetForm(form);         
        M.toast({html : res.status});
        this.getWords(); 
        });
        
    } else if (form.value.lema != null && form.value.lema != '') {
      this.wordService.postWord(form.value)
        .subscribe((res : any) => { // para escuchar la respuesta del servidor
          this.resetForm(form);
          M.toast({html : res.status});
          this.getWords();
        });        
    }
  }

  getWords() {
    this.wordService.getWords()
      .subscribe(res => {
        this.wordService.words = res as Lema[];       
      })
      
  }

  editWord(word : Lema) {
    this.wordService.selectedWord = word;
  }

  deleteWord(word : Lema) {
    this.wordService.deleteWord(word)
      .subscribe((res : any) => {
        M.toast({html : res.status});
        this.getWords();    
      })
  }

  resetForm(form? : NgForm) {
    if (form) {
      form.reset();
      this.wordService.selectedWord = new Lema();
      this.getWords();
    }
  }

}
