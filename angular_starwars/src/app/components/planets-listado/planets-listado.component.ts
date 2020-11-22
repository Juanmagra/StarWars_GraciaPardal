import { Component, OnInit } from '@angular/core';
import { PlanetsService } from 'src/app/services/planets.service';
import { Planeta } from '../../models/planetaInterface';
import { PlanetaResponse } from '../../models/planetaResponse';


@Component({
  selector: 'app-planets-listado',
  templateUrl: './planets-listado.component.html',
  styleUrls: ['./planets-listado.component.scss']
})
export class PlanetsListadoComponent implements OnInit {

listadoPlanetas: Planeta[];
columnsToDisplay = ['name', 'rotation_period','orbital_period','diameter','climate',
                    'gravity','terrain','surface_water','population'];


  constructor( private planetService: PlanetsService) { }

  ngOnInit() {
    this.loadPlanets();
  }

  loadPlanets() {
    this.planetService.getPlanets().subscribe(resp => {
       this.listadoPlanetas = resp.results;
    });
 }


}
