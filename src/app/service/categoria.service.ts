import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { CategoriaDTO } from '../model/categoria-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url = 'http://localhost:8080/';

  // injetando o HttpClient
  constructor(private http: HttpClient) {}


   findAll(): Observable<CategoriaDTO[]>  {
    return this.http.get<CategoriaDTO[]>(`${this.url}categorias`);
  }
}