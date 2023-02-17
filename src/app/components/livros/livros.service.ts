import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  baseUrl = 'http://localhost:3002/categorias/'

  constructor(private http: HttpClient) { }

  findAll(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}${id}`)
  }

}
