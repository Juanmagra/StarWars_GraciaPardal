import { Pelicula } from './peliculasInterface';

export interface PeliculasResponse {
  count: number;
  next?: any;
  previous?: any;
  results: Pelicula[];
}
