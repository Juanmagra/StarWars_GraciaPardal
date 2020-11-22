import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/peliculasInterface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss']
})
export class ListadoPeliculasComponent implements OnInit {
  listadoPeliculas: Pelicula[];
columnsToDisplay = ['title', 'director','producer','created','edited','url'];

  constructor(private peliculaService:PeliculasService) { }

  ngOnInit() {
    this.loadPeliculas();
  }
  loadPeliculas() {
    this.peliculaService.getPeliculas().subscribe(resp=>{
      this.listadoPeliculas = resp.results;
    });
  }

}
