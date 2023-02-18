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

  create(id: any, livro: any) {
    let url = `${this.baseUrl}${id}/livros`;
    console.log(url, livro)
    return this.http.post<any>(url, livro)
  }

}
