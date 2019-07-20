import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http' // para comunicarse con el backend
import { Lema } from '../models/lema';
import { Entrada } from '../models/entrada';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  selectedWord: Lema;
  searchedWord : Lema;
  results : Entrada[];
  words: Lema[];

  readonly URL_API = 'http://localhost:3000';

  constructor(private http : HttpClient) { //instanciar el modulo HttpClient para tenerlo disponible en el servicio
    this.selectedWord = new Lema();
    this.searchedWord = new Lema();
  }

  getWords() {
    return this.http.get(this.URL_API);
  }

  getWord(lema : Lema) {
    return this.http.get(this.URL_API + `/${lema.lema}`);
  }

  postWord(lema : Lema) {
    return this.http.post(this.URL_API, lema);
  }

  putWord(lema : Lema) {
    return this.http.put(this.URL_API + `/${lema.lema}`, lema); // `${lema.lema}` sintaxis ECMAScript para leer el valor de la propiedad lema del objeto lema
  }

  deleteWord(lema : Lema) { // aqui se usa como argumento la propiedad lema del objeto (se podria usar idLema)
    return this.http.request(
      'delete',
      this.URL_API + `/${lema.lema}`, 
      {
        body : {
          idLema : lema.idLema,
          lema : lema.lema
        }
      });
  }

  searchWord(lema : string) {
    return this.http.get(this.URL_API + '/resultados' + `/${lema}`);
  }
}
