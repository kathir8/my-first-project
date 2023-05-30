import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { decrement, increment, reset } from '../state/counter.action';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html'
})
export class CounterButtonsComponent {
  constructor(private store: Store<{ counter: CounterState }>) { }
  onIncrement() {
    this.store.dispatch(increment())
  }
  onDecrement() {
    this.store.dispatch(decrement())
  }
  onReset() {
    this.store.dispatch(reset())
  }
}
