import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { LivrosService } from './livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  idCategoria: any;
  livros!: any[];
  displayModalCreate!: boolean;
  autor = '';
  titulo = '';
  descricao = '';

  constructor( private service: LivrosService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idCategoria = params['id']
    })
    this.list();
  }

  list() {
    this.service.findAll(this.idCategoria).subscribe((response) => {
      this.livros = response
      console.log(response)
    })
  }

}
