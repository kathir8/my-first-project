import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { getCounter } from '../state/counter.selectors';
import { Observable } from 'rxjs'
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  standalone: false
})
export class CounterOutputComponent {
  constructor(private store: Store<{ counter: CounterState }>) { }
  counter$!: Observable<number>
  ngOnInit() {
    this.counter$ = this.store.select(getCounter)
  }
}