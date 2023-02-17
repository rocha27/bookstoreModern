import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { LivrosService } from './livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  userId: any;

  constructor( private service: LivrosService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id']
    })
    this.teste();
  }

  teste() {
    this.service.findAll(this.userId).subscribe((response) => {
      console.log(response)
    })
  }
}
