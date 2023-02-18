import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivrosService } from './livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css'],
})
export class LivrosComponent implements OnInit {
  categoriaId: any;
  id!: any;
  livros!: any[];
  livro!: any;
  displayModalCreate!: boolean;
  displayModalEdit!: boolean;
  displayModalDelete!: boolean;
  autor = '';
  titulo = '';
  descricao = '';

  constructor(
    private service: LivrosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoriaId = params['id'];
    });
    this.list();
  }

  list() {
    this.service.findAll(this.categoriaId).subscribe((response) => {
      this.livros = response;
      console.log('xxx ', this.livros)
    });
  }

  showModalDialogCreate() {
    this.autor = '';
    this.titulo = '';
    this.descricao = '';
    this.displayModalCreate = true;
  }

  showModalDialogEdit(item: any) {
    this.livro = item
    this.autor = item.autor;
    this.titulo = item.titulo;
    this.descricao = item.descricao;
    this.displayModalEdit = true;
  }

  showModalDialogDelete(id: any) {
    this.id = id;
    this.displayModalDelete = true
  }
  
  showModalDialogDeleteClose() {
    this.displayModalDelete = false;
  }

  create() {
    let requisicao = {
      autor: this.autor,
      titulo: this.titulo,
      descricao: this.descricao,
      categoriaId: this.categoriaId
    };

    this.service.create(requisicao).subscribe((response) => {
      console.log(response);
      this.list();
    });

    this.displayModalCreate = false;
  }

  edit() {
    let requisicao = {
      id: this.livro.id,
      autor: this.autor,
      titulo: this.titulo,
      descricao: this.descricao,
      categoriaId: this.categoriaId
    };

    this.service.edit(requisicao).subscribe((response) => {
      console.log(response);
      this.list()
    })
    this.displayModalEdit = false;
  }

  delete() {
    this.service.delete(this.id).subscribe((response) => {
      console.log(response)
      this.list();
    })
    this.displayModalDelete = false;
  }
}
