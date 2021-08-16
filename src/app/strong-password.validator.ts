import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export function strongPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        // On utilise une expression régulière pour la validation :
        var strongRegex =
        new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        // On récupère le mot de passe du champ 'control' passé en paramètre :
        const password = control.value;
        // On teste le mot de passe avec l'expression régulière :
        const valid = strongRegex.test(password);

        // On retourne null si le mot de passe est assez fort, et un dictionnaire d'erreur sinon :
        return valid ? null : { 'strongPasswordError': { password } };
    };
}