import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from './categoria.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent implements OnInit {
  categorias!: any[];
  nomeCategoria = '';
  descricaoCategoria = ''
  displayModal!: boolean;

  constructor(
    private service: CategoriaService,
    private router: Router,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.list();
    this.primengConfig.ripple = true;
  }

  list() {
    this.service.findAll().subscribe((response) => {
      this.categorias = response;
      console.log(response);
    });
  }

  showModalDialog() {
    this.displayModal = true;
  }

  create() {
    let requisicao = {
      nome : this.nomeCategoria,
      descricao: this.descricaoCategoria
    }

    this.service.create(requisicao).subscribe((response) => {
      console.log(response)
      this.list();
    })
    this.nomeCategoria = ''
    this.descricaoCategoria = ''
    this.displayModal = false;
    console.log(requisicao)
  }
}
