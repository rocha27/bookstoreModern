import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaModel } from './categoria.model';
import { CategoriaService } from './categoria.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {


  categorias!: CategoriaModel[];
  darkmode = false

  constructor(private service: CategoriaService,
              private router: Router,
              private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.list();
    this.primengConfig.ripple = true;
  }

  list() {
    this.service.findAll().subscribe(resposta => {
      this.categorias = resposta;
      console.log(resposta)
    })
  }

  displayModal!: boolean;

    displayBasic!: boolean;

    displayBasic2!: boolean;

    displayMaximizable!: boolean;

    displayPosition!: boolean;

    position!: string;

    showModalDialog() {
        this.displayModal = true;
    }

    showBasicDialog() {
        this.displayBasic = true;
    }

    showBasicDialog2() {
        this.displayBasic2 = true;
    }

    showMaximizableDialog() {
        this.displayMaximizable = true;
    }

    showPositionDialog(position: string) {
        this.position = position;
        this.displayPosition = true;
    }
}
