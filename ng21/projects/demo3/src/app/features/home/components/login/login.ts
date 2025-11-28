import { Component, inject } from '@angular/core';
import { Card } from '../../../../core/components/card/card';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginData } from '../../types/user';

@Component({
  selector: 'ind-login',
  imports: [Card, ReactiveFormsModule],
  template: `
    <ind-card title="Login">
      <form [formGroup]="loginFormGroup" (ngSubmit)="handleLogin()">
        <div class="form-control">
          <label>
            <input type="email" formControlName="email" />
            <span>Correo electrónico</span>
          </label>
        </div>
        @if (loginFormGroup.get('email')?.invalid && loginFormGroup.get('email')?.touched) {
          @if (loginFormGroup.get('email')?.errors?.['required']) {
            <p class="error">El correo es obligatorio</p>
          }
          @if (loginFormGroup.get('email')?.errors?.['email']) {
            <p class="error">El correo no es válido</p>
          }
        }
        <div class="form-control">
          <label>
            <input type="password" formControlName="password" />
            <span>Contraseña</span>
          </label>
        </div>
        @if (loginFormGroup.get('password')?.invalid && loginFormGroup.get('password')?.touched) {
          @if (loginFormGroup.get('password')?.errors?.['required']) {
            <p class="error">La contraseña es obligatoria</p>
          }
          @if (loginFormGroup.get('password')?.errors?.['minlength']) {
            <p class="error">La contraseña debe tener al menos 6 caracteres</p>
          }
        }

        <div class="form-control">
          <label>
            <input type="number" formControlName="score" />
            <span>Puntuación</span>
          </label>
        </div>

        <div>
          <button type="submit" [disabled]="loginFormGroup.invalid">Login</button>
        </div>
      </form>
    </ind-card>
  `,
  styleUrls: ['../forms.css'],
})
export class Login {
  // FormGroup, FormControl, Validators

  fb = inject(FormBuilder);

  loginFormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    score: [0, []],
  });

  // loginFormGroup = new FormGroup({
  //   username: new FormControl('', []),
  //   password: new FormControl('', []),
  // });

  handleLogin() {
    if (this.loginFormGroup.invalid) {
      console.log('Formulario inválido');
      return;
    }
    const loginData: LoginData = {
      email: this.loginFormGroup.value.email?.toLocaleLowerCase() || '',
      password: this.loginFormGroup.value.password || '',
      score: this.loginFormGroup.value.score! > 5 ? 5 : (this.loginFormGroup.value.score as number),
    };

    console.log('Enviando', loginData);
  }
}
