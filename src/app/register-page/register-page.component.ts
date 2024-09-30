import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  formBuilder = inject(FormBuilder);

  // conditions de validité du mot de passe (sécurité)
  securePasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value || '';
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const isValidLength = value.length >= 12;

      const passwordValid =
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSpecialChar &&
        isValidLength;

      return passwordValid ? null : { securePassword: true };
    };
  }
  // formGroup imbriqués : conditons imbirquées pour valider les mots de passe (vérifeir si les deux correspondent)

  passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get('password')?.value;
      const confirmedPassword = formGroup.get('confirmedPassword')?.value;

      return password === confirmedPassword
        ? null
        : { passwordsMismatch: true };
    };
  }

  signUpForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    // on crée un objet passwords qui vient vérifier deux choses : si le mdp est sécurisé et si le confirmedPassword correspond au mot de passe
    passwords: this.formBuilder.group(
      {
        password: ['', [Validators.required, this.securePasswordValidator()]],
        confirmedPassword: [''],
      },
      { validators: this.passwordMatchValidator() }
    ),
  });

  onSubmit(): void {
    if (this.signUpForm.valid) {
      console.log('Sign-up successfull', this.signUpForm.value);
    } else {
      console.log('Unvalid here');
    }
  }
}
