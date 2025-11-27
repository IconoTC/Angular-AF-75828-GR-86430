import { Component, inject, OnInit } from '@angular/core';
import { Time } from '../../core/services/time';

@Component({
  selector: 'ind-about-page',
  imports: [],
  template: ` <h2>About Us</h2> `,
  styles: ``,
})
class AboutPage implements OnInit {
  timeService = inject(Time);

  ngOnInit(): void {
    console.log(this.timeService.getTime());
  }
}

export default AboutPage;
