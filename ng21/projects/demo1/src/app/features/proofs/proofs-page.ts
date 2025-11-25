import { Component } from '@angular/core';
import { CounterNS } from "./components/counter-no-signals/counter";
import { CounterNSAsync } from "./components/counter-ns-async/counter";
import { Counter } from "./components/counter/counter";

@Component({
  selector: 'ind-proofs-page',
  imports: [CounterNS, CounterNSAsync, Counter],
  template: `
    <h2>Proofs Page</h2>
    <ind-counter-ns />
    <ind-counter-ns-async />
    <ind-counter-async />
  `,
  styles: ``,
})
class ProofsPage {

}

export default ProofsPage;
