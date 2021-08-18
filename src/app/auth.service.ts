import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    // L'utilisateur est-il connecté ?
    isLoggedIn: boolean = false;
    // où rediriger l'utilisateur après l'authentification ?
    redirectUrl!: string;

    // Une méthode de connexion
    login(name: string, password: string): Observable<boolean> {
    // Faites votre appel à un service d'authentification si besoin ...
    let isLoggedIn = (name === 'pikachu' && password === 'pikachu');

    return of(true).pipe(
            delay(1000),
            tap(_ => this.isLoggedIn = isLoggedIn)
        );
    }

   // Déconnexion
    logout(): void {
        this.isLoggedIn = false;
    }
}