import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Time {

  private time = new Date().getTime();

  getTime() {
    return this.time;
  }

}
