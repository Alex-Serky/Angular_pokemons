import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { PokemonsModule } from './pokemons/pokemons.module';
@NgModule({
  // L'odre de chargement des modules est très important
  // par rapport à l'ordre de déclaration des routes !
  imports: [
    BrowserModule,
    PokemonsModule,
    AppRoutingModule // pour l'ordre de déclaration des routes !
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


