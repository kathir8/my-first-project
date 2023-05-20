import { Component } from '@angular/core';
import { BehaviorSubject, Subject, from, fromEvent, interval, map, of } from 'rxjs';

@Component({
  selector: 'app-basic',
  template: '',
})
  
export class BasicComponent {

  private subject = new Subject<string>();
  private mapSubject = this.subject.pipe(
    map((value: string) => value + ' with map concept')
  );
  private behaviorSubject = new BehaviorSubject<string>('Initial Value');


  ngOnInit() {

    /* ----------------------------------- map ---------------------------------- */

    this.mapSubject.subscribe(value => {
      console.log(value);
    })

    this.subject.next('Updated to check');

    /* --------------------------------- Subject -------------------------------- */

    this.subject.subscribe((value) => {  // Subscriber 1
      console.log('Subscriber 1 received Subject value:', value);
    });

    this.subject.next('Updated Value'); // Emit a new value

    this.subject.subscribe((value) => { // Subscriber 2
      console.log('Subscriber 2 will not recieve Subject value:', value);
    });


    /* ----------------------------- BehavorSubject ----------------------------- */

    this.behaviorSubject.subscribe((value) => {  // Subscriber 1
      console.log('Subscriber 1 received BehaviorSubject value:', value);
    });

    this.behaviorSubject.next('Updated Value'); // Emit a new value

    this.behaviorSubject.subscribe((value) => { // Subscriber 2
      console.log('Subscriber 2 received BehaviorSubject value:', value);
    });

    /* ------------------------------- Observable ------------------------------- */

    const variable = 'Hello, Observable!';

    const varObservable$ = of(variable)
    varObservable$.subscribe(value => {
      console.log(value);
    })

    const arr = [1, 2, 3, 4, 5];
    const arrObservable$ = from(arr)
    arrObservable$.subscribe(value => {
      console.log(value);
    })

    const obj = {
      'name': 'kathir',
      'age': 25
    };

    const objOfObservable$ = of(obj)
    objOfObservable$.subscribe(value => {
      console.log(value);
    })

    const objFromObservable$ = from(Object.entries(obj))
    objFromObservable$.subscribe(([key, value]) => {
      console.log(key, value);
    })

  }



  ngOnDestroy() {
    this.behaviorSubject.unsubscribe()
    this.subject.unsubscribe()
  }
}
