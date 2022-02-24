import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export const formCrossValidator: ValidatorFn =
    (control: AbstractControl): ValidationErrors | null => {
        const name = control.get('name');
        const ability = control.get('ability');

        return !!name && !!ability && name.value === 'Mattia' && ability.value === 'Speaker'
            ? { formCross: true }
            : null;
    }