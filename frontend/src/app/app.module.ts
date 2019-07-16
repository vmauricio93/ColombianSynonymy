import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordsComponent } from './components/words/words.component';
import { NeovisComponent } from './components/neovis/neovis.component';
import { SearchComponent } from './components/search/search.component';
import { WordService } from './services/word.service';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    NeovisComponent,
    SearchComponent,
    HomeComponent,
    NotFoundComponent,
    EntradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WordService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
