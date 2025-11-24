import { Component, signal } from '@angular/core';

@Component({
  selector: 'ind-sample',
  imports: [],
  templateUrl: './sample.html',
  styleUrls: ['./sample.css'],
})
export class Sample {
  protected readonly title = signal("Sample Component");
  protected readonly pTitle = signal("Sample Component Tooltip");
  private readonly id = Math.floor(Math.random() * 1000);

  onClick() {
    alert('Button clicked in Sample Component! + ID: ' + this.id);
  }
}
