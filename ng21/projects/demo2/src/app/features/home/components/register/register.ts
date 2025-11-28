import { Component, inject } from '@angular/core';
import { Card } from '../../../../core/components/card/card';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../types/user';

@Component({
  selector: 'ind-register',
  imports: [Card, ReactiveFormsModule],
  template: `
    <ind-card title="Register">
      <form [formGroup]="registerFormGroup" (ngSubmit)="handleRegister()">
        <div class="form-control">
          <label>
            <input type="email" formControlName="email" />
            <span>Correo electrónico</span>
          </label>
        </div>
        @if (registerFormGroup.get('email')?.invalid && registerFormGroup.get('email')?.touched) {
          @if (registerFormGroup.get('email')?.errors?.['required']) {
            <p class="error">El correo es obligatorio</p>
          }
          @if (registerFormGroup.get('email')?.errors?.['email']) {
            <p class="error">El correo no es válido</p>
          }
        }
        <div class="form-control">
          <label>
            <input type="password" formControlName="passwd" />
            <span>Contraseña</span>
          </label>
        </div>
        <div class="form-control">
          <label>
            <input type="text" formControlName="firstName" />
            <span>Nombre</span>
          </label>
        </div>
        <div class="form-control">
          <label>
            <input type="text" formControlName="surname" />
            <span>Apellido</span>
          </label>
        </div>
        <div class="form-control">
          <label>
            <span>País</span>
            <select formControlName="country">
              <option value="">-- Selecciona un país --</option>
              <option value="ES">España</option>
              <option value="FR">Francia</option>
              <option value="IT">Italia</option>
              <option value="DE">Alemania</option>
              <option value="OT">Otros</option>
            </select>
          </label>
        </div>
        <div class="form-control">
          <fieldset>
            <legend>Género</legend>
            <label>
              <input type="radio" formControlName="gender" value="M" />
              <span>Masculino</span>
            </label>
            <label>
              <input type="radio" formControlName="gender" value="F" />
              <span>Femenino</span>
            </label>
            <label>
              <input type="radio" formControlName="gender" value="O" />
              <span>Otro</span>
            </label>
          </fieldset>
        </div>
        <div class="form-control">
          <label>
            <textarea formControlName="bio"></textarea>
            <span>Biografía</span>
          </label>
        </div>
        <div class="form-control">
          <label>
            <input type="checkbox" formControlName="termsAcceptance" />
            <span>Acepto los términos y condiciones</span>
          </label>
        </div>
        <div class="form-control">
          <label>
            <input type="date" formControlName="birthDateIso" />
            <span>Fecha de nacimiento</span>
          </label>
        </div>
        <div>
          <button type="submit" [disabled]="registerFormGroup.invalid">Register</button>
        </div>
      </form>
    </ind-card>
  `,
  styleUrls: ['../forms.css'],
})
export class Register {
  private fb = inject(FormBuilder);
  // private repo = inject(UsersMemoryRepoService);

  public registerFormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    passwd: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
    firstName: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    country: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    bio: [''],
    termsAcceptance: [false, [Validators.requiredTrue]],
    birthDateIso: [''],
  });

  handleRegister() {
    if (this.registerFormGroup.valid) {
      console.log('Registering user:', this.registerFormGroup.value);
      // Implement registration logic here

      const user: Omit<User, 'id'> = {
        email: this.registerFormGroup.value.email!,
        password: this.registerFormGroup.value.passwd!,
        name: `${this.registerFormGroup.value.firstName!} ${this.registerFormGroup.value.surname!}`,
        country: this.registerFormGroup.value.country as User['country'],
        gender: this.registerFormGroup.value.gender as User['gender'],
        comments: this.registerFormGroup.value.bio!,
        termsAcceptance: this.registerFormGroup.value.termsAcceptance!,
        birthDate: new Date(this.registerFormGroup.value.birthDateIso!),
      };
      console.log('User registered:', user);
      // this.repo.addUser(user);
    } else {
      console.log('Form is invalid');
    }
  }
}
