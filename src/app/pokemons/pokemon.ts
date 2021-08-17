export class Pokemon {
    id: number;
    name: string;
    hp: number;
    cp: number;
    picture: string;
    types: Array<string>;
    created: Date;

    // … Les propriétés de notre modèle Pokémon …
    constructor(
        hp: number = 100,
        cp: number = 10,
        name: string = 'name',
        picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
        types: Array<string> = ['Normal'],
        created: Date = new Date()
    ) {
        this.hp = hp;
        this.cp = cp;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created;

    }

}