import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { LivrosComponent } from './components/livros/livros.component';
import { ConteudosComponent } from './components/conteudos/conteudos.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categorias',
    component: CategoriasComponent
  },
  {
    path: 'categorias/:id/livros',
    component: LivrosComponent
  },
  {
    path: 'categorias/:id/conteudos',
    component: ConteudosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
