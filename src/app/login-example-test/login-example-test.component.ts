import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-example-test',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <form [formGroup]="loginForm">
      <input formControlName="email" />
      <button [disabled]="!loginForm.valid">Submit</button>
    </form>
  `,
  styleUrl: './login-example-test.component.scss',
})
export class LoginExampleTestComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}
