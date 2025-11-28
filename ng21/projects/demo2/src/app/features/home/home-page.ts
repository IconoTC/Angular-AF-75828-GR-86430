import { Component, signal } from '@angular/core';
import { Time } from '../../core/services/time';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

@Component({
  selector: 'ind-home-page',
  imports: [Login, Register],
  template: `
    <h2>Home Page</h2>

    @if (isRegistered()) {
      <ind-login />
    } @else {
      <ind-register />
    }

    <button (click)="isRegistered.set(!isRegistered())">
      {{ isRegistered() ? 'Ir a Register' : 'Ir a Login' }}
    </button>
  `,
  styles: ``,
})
class HomePage {
  isRegistered = signal(true);

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(public timeService: Time) {
    console.log(this.timeService.getTime());
  }
}

export default HomePage;
