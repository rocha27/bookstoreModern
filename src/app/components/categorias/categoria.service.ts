import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CategoriaModel } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  // baseUrl: String = environment.baseUrl;
  baseUrl = 'http://localhost:3002/categorias'

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
