import { Component } from '@angular/core';
import { Time } from '../../core/services/time';

@Component({
  selector: 'ind-home-page',
  imports: [],
  template: `
    <h2>Home Page</h2>
  `,
  styles: ``,
})
class HomePage {

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(public timeService: Time) {
    console.log(this.timeService.getTime())
  }

}

export default HomePage;
