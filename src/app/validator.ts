import { ValidationErrors, AbstractControl } from '@angular/forms';

export interface Validator {
    validate(c: AbstractControl): ValidationErrors | null;
    registerOnValidatorChange?(fn: () => void): void;
}