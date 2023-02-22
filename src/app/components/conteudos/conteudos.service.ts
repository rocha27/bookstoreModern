import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConteudosService {
  baseUrl = 'http://localhost:3002/conteudos/';
  constructor(private http: HttpClient) {}

  findAll(idCategoria: any): Observable<any> {
    const url = 'http://localhost:3002/categorias/';
    return this.http.get(`${url}${idCategoria}/conteudos`);
  }

  create(conteudo: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, conteudo);
  }

  edit(conteudo: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${conteudo.id}`, conteudo);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}`);
  }
}
