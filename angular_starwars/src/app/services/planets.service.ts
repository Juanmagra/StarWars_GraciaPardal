import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Planeta } from '../models/planetaInterface';
import { PlanetaResponse } from '../models/planetaResponse';
import { Observable } from 'rxjs';


const authURL = 'https://swapi.dev/api/planets/';
const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor( private http: HttpClient) { }

  public getPlanets(): Observable<PlanetaResponse> {
    return this.http.get<PlanetaResponse>(
      authURL,
      requestOptions
    );
  }
}

