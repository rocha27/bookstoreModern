import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  baseUrl = 'http://localhost:3002/categorias/'

  constructor(private http: HttpClient) { }

  findAll(id_categorias: any): Observable<any> {
    return this.http.get(`${this.baseUrl}${id_categorias}/livros`)
  }

  create(livro: any): Observable<any> {
    const url = 'http://localhost:3002/livros/'
    return this.http.post(`${url}`, livro)
  }

  edit(livro: any): Observable<any> {
    const url = 'http://localhost:3002/livros/'
    return this.http.put(`${url}${livro.id}`, livro)
  }

  delete(id: any): Observable<any> {
    const url = 'http://localhost:3002/livros/';
    return this.http.delete(`${url}${id}`)
  }

}
