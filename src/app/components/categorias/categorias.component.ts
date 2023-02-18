import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent implements OnInit {
  categorias!: any[];
  id!: any;
  categoria!: any;
  nome = '';
  descricao = '';
  displayModalCreate!: boolean;
  displayModalEdit!: boolean;
  displayModalDelete!: boolean;
  buttonDelete!: boolean;

  constructor(private service: CategoriaService, private router: Router) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.findAll().subscribe((response) => {
      this.categorias = response;
      console.log(response);
    });
  }

  showModalDialogCreate() {
    this.nome = '';
    this.descricao = '';
    this.displayModalCreate = true;
  }

  showModalDialogEdit(item: any) {
    this.categoria = item;
    this.nome = item.nome;
    this.descricao = item.descricao;

    this.displayModalEdit = true;
  }

  showModalDialogDelete(id: any) {
    this.id = id;
    this.displayModalDelete = true;
    console.log(this.categorias);
  }

  showModalDialogDeleteClose() {
    this.displayModalDelete = false;
  }

  create() {
    let requisicao = {
      nome: this.nome,
      descricao: this.descricao,
    };

    this.service.create(requisicao).subscribe((response) => {
      console.log(response);
      this.list();
    });
    this.displayModalCreate = false;
    console.log(requisicao);
  }

  edit() {
    let requisicao = {
      id: this.categoria.id,
      nome: this.nome,
      descricao: this.descricao
    }

    this.service.edit(requisicao).subscribe((response) => {
      console.log(response);
      this.list();
    })
    this.displayModalEdit = false;
  }

  delete() {
    this.service.delete(this.id).subscribe((response) => {
      console.log(response);
      this.list();
    });
    this.displayModalDelete = false;
  }
}
