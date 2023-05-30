import { Component } from '@angular/core';
import { Store } from '@ngrx/store'; 
import { CounterInterface } from '../counter.state';
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html'
})
export class CounterOutputComponent {
  constructor(private store:Store<{counter:CounterInterface}>){}
  counter!: number
  ngOnInit() {
    this.store.select('counter').subscribe(val => {
      this.counter = val.counter
    })
  }
}
