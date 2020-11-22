import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculasResponse } from '../models/peliculasResponse';


const authURL = 'https://swapi.dev/api/films/';
const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  public getPeliculas(): Observable<PeliculasResponse> {
    return this.http.get<PeliculasResponse>(
      authURL,
      requestOptions
    );
  }
}

