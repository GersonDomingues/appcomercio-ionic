import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { API_CONFIG } from 'src/config/api.config';
import { CategoriaDTO } from '../../models/categoria-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  

  // injetando o HttpClient
  constructor(private http: HttpClient) {}


   findAll(): Observable<CategoriaDTO[]>  {
    return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
  }
}