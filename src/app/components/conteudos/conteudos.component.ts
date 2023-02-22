import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConteudosService } from './conteudos.service';

@Component({
  selector: 'app-conteudos',
  templateUrl: './conteudos.component.html',
  styleUrls: ['./conteudos.component.css']
})
export class ConteudosComponent implements OnInit {
  categoriaId: any;
  id: any;
  conteudos!: any[];
  conteudo: any;
  displayModalCreate!: boolean;
  displayModalEdit!: boolean;
  displayModalDelete!: boolean;
  autor = '';
  titulo = '';
  link = '';

  constructor(
    private service: ConteudosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoriaId = params['id'];
    });
    this.list();
  }

  list() {
    this.service.findAll(this.categoriaId).subscribe((response) => {
      this.conteudos = response;
      console.log(this.conteudos)
    })
  }

  showModalDialogCreate() {
    this.autor = '';
    this.titulo = '';
    this.link = '';
    this.displayModalCreate = true;
  }

  showModalDialogEdit(item: any) {
    this.conteudo = item
    this.autor = item.autor;
    this.titulo = item.titulo;
    this.link = item.link;
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
      link: this.link,
      categoriaId: this.categoriaId
    };
    // console.log(requisicao)

    this.service.create(requisicao).subscribe((response) => {
      console.log(response);
      this.list();
    });

    this.displayModalCreate = false;
  }

  edit() {
    let requisicao = {
      id: this.conteudo.id,
      autor: this.autor,
      titulo: this.titulo,
      link: this.link,
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

  abreLink(link: any) {
    window.open(`${link}`, '_blank');
  }
}
