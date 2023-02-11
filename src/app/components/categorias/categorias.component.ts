import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaModel } from './categoria.model';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias!: CategoriaModel[];

  constructor(private service: CategoriaService,
              private router: Router) { }

  ngOnInit(): void {
    this.teste()
  }

  teste() {
    this.service.findAll().subscribe(resposta => {
      this.categorias = resposta;
      console.log(resposta)
    })
  }

}
