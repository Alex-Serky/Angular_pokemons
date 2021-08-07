import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BorderCardDirective } from './border-card.directive';
import { AppComponent } from './app.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

@NgModule({
  // déclarez BorderCardDirective dans le module racine de l'application
  declarations: [
    AppComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
