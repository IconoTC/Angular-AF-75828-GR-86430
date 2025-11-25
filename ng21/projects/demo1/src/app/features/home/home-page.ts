import { Component } from '@angular/core';
import { Counter } from "./components/counter/counter";
import { Greetings } from "./components/greetings/greetings";
import { Greetings2 } from "./components/greetings2/greetings2";
import { CounterStyled } from "./components/counter-styles/counter-styled";

@Component({
  selector: 'ind-home-page',
  imports: [Counter, Greetings, Greetings2, CounterStyled],
  template: `
    <h2>Home Page</h2>
    <ind-counter />
    <ind-greetings />
    <ind-greetings2 />
    <ind-counter-styled />
  `,
  styles: ``,
})
class HomePage {

}

export default HomePage;
