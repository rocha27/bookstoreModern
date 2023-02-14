import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  // baseUrl: String = environment.baseUrl;
  baseUrl = 'http://localhost:3002/categorias/'

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  create(categoria: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, categoria);
  }

  edit(categoria: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}${categoria.id}`, categoria);
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}${id}`);
  }
}
