import { Component, inject } from '@angular/core';
import { Card } from '../../../../core/components/card/card';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ind-register',
  imports: [Card],
  template: ` <ind-card title="Register"> register works! </ind-card> `,
  styles: ``,
})
export class Register {
  private fb = inject(FormBuilder);
  // private repo = inject(UsersMemoryRepoService);

  public formGroup = this.fb.group({
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
}
