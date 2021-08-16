import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

@Component({
    selector: 'detail-pokemon',
    templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {
    pokemons: Pokemon[] = []; // La liste des pokémons de notre application.
    pokemon: Pokemon = null!; // Le pokémon à afficher dans le template.

    // On injecte 'route' pour récupérer les paramètres de l'url,
    // et 'router' pour rediriger l'utilisateur.
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private pokemonsService: PokemonsService) {}

    ngOnInit(): void {
        // On récupère le paramère 'id' contenu dans l'url :
        let id = +this.route.snapshot.paramMap.get('id')!;
        this.pokemon = this.pokemonsService.getPokemon(id);
    }

    // On crée une méthode qui s'occupe de la redirection
    goEdit(pokemon: Pokemon): void {
    let link = ['/pokemon/edit', pokemon.id];
    this.router.navigate(link);
    }

    // Méthode permettant de rediriger l'utilisateur vers la page principale    de l'application.
    goBack(): void {
        this.router.navigate(['/pokemons']);
    }
}
