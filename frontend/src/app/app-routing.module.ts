import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WordsComponent } from './components/words/words.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'entrada/:lema', //parametro lema
    component : SearchComponent
  },
  {
    path : 'editar/entradas', //importante separar por prefijos para evitar request raros
    component : WordsComponent
  },
  {
    path : '**',
    component : NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
