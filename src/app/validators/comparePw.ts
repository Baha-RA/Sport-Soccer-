import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName]; // pointer sur control Name 
        const matchingControl = formGroup.controls[matchingControlName];


        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true }); // creation d'erreur mustMatch
        } else {
            matchingControl.setErrors(null);
        }
    }
}
// appel du validator dans signup .ts (voir signup.ts & signup html)