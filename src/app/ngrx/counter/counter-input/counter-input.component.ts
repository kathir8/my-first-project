import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { CounterInterface } from '../counter.state';
import { customIncrement, nameChange } from '../counter.action';
@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html'
})
export class CounterInputComponent {
constructor(private store: Store<{ counter: CounterInterface }>){ }
  value!: number
  name!:string
  onAdd() {
    this.store.dispatch(customIncrement({count:this.value}))
  }
  nameChange() {
    this.store.dispatch(nameChange())
  }
  ngOnInit() {
    this.store.select('counter').subscribe(val => {
      this.name = val.name
    })
  }
}
