import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { CounterState } from '../state/counter.state';
import { customIncrement, nameChange } from '../state/counter.action';
import { getName } from '../state/counter.selectors';
import { Observable } from 'rxjs'
@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  standalone: false
})
export class CounterInputComponent {
  constructor(private store: Store<{ counter: CounterState }>) { }
  value!: number
  name$!: Observable<string>
  onAdd() {
    this.store.dispatch(customIncrement({ count: this.value }))
  }
  nameChange() {
    this.store.dispatch(nameChange())
  }
  ngOnInit() {
    this.name$ = this.store.select(getName)
  }
}
