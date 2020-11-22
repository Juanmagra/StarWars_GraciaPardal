import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { PlanetsService } from './services/planets.service';
import { PlanetsListadoComponent } from './components/planets-listado/planets-listado.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { PeliculasService } from "./services/peliculas.service";
import { ListadoPeliculasComponent } from './components/listado-peliculas/listado-peliculas.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanetsListadoComponent,
    ListadoPeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [PlanetsService,PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
