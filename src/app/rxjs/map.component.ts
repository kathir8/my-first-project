import { Component } from '@angular/core';
import { from, map, of, delay, mergeMap, concatMap, switchMap, exhaustMap } from 'rxjs'
@Component({
    selector: 'app-map',
    template: '',
    standalone: false
})
export class MapComponent {
  private arr = [1, 2, 3, 4, 5]
  map$ = from(this.arr).pipe(map(item => item * 10))
  
  constructor() {
    this.map$.subscribe(value => console.log(value))

    const mapExample = (operator: any) => {
      from(this.arr)
        .pipe(operator((v: any) => of(v).pipe(delay(500))))
        .subscribe({
          next: (val) => console.log(val),
          error: (err) => console.log("Error in this map " + err),
          complete: () => console.log(`${operator.name} completed`)
        })
    }

    mapExample(exhaustMap)
  }
}



/*
      INSTRUCTIONS:
      mergeMap / flatMap : It creates directly observable from our source but it is not killing all exisiting observable.
      It allows multiple inner observables to be active at the same time.
      It subscribes to all inner observables and merges the values emitted by them into a single observable.
      mergeMap will not wait until the previous observable complete

      concatMap : Waits for the previous observable to be completed / Waits for the current inner observable to complete before subscribing to the next one

      switchMap : When a new value is emitted by the source observable, it cancels the previous inner observable and switches to a new one.

      exhaustMap : All next observables are ignored until observable won't be completed.
      Ignores new values from the source observable while an inner observable is still active.
      Once the inner observable completes, only then it switches to a new one when a new value arrives
*/