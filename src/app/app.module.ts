import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons/pokemons.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
@NgModule({
  // L'odre de chargement des modules est très important
  // pour l'ordre de déclaration des routes !
  imports: [
    BrowserModule,
    PokemonsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


