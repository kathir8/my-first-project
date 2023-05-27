import { Component } from '@angular/core';
import { concat, from, interval, merge, of, timer, zip, forkJoin, throwError, fromEvent } from 'rxjs';
import { auditTime, catchError, debounceTime, delay, distinct, endWith, filter, finalize, repeat, skip, startWith, take, tap, throttleTime, timeout, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-types',
  template: `<input id='debounce' placeholder="debounce">
  
  <div class="btn btn-primary ms-2 btn-sm" id="throttle">Throttle</div>`
})
export class TypesComponent {


  ngOnInit() {

    console.log('-------repeat---------');

    // const repeat$ = of(1, 2, 3);

    // const repeated$ = repeat$.pipe(repeat(3));  // Repeat the emissions 3 times

    // repeated$.subscribe(value => console.log(value));


    console.log('-------filter---------');

    // const filter$ = from([1, 2, 3, 4, 5]);

    // const evenNumbers$ = filter$.pipe(filter(value => value % 2 === 0));

    // evenNumbers$.subscribe(value => console.log(value));


    console.log('-------merge, concat, zip, forkJoin---------');


    // const source1$ = of('A', 'B', 'C');
    // const source2$ = of(1, 2, 3);
    // const source3$ = of(true, false, true);

    // merge(source1$, source2$, source3$).subscribe(value => console.log(value));


    console.log('-------withLatestFrom---------');

    // const withLatestFrom$ = interval(1000);
    // const array$ = of([1, 2, 3, 4, 5]);

    // const subscribe = withLatestFrom$.pipe(
    //   withLatestFrom(array$)
    // ).subscribe(([sourceValue, arrayValue]) => {
    //   console.log(`Source value: ${sourceValue}, Array:`, arrayValue);
    // });

    // setTimeout(() => {
    //   subscribe.unsubscribe()
    // }, 5000);


    console.log('-------take,skip---------');

    // const take$ = interval(1000);

    // take$.pipe(
    //   take(5) // Take only 5 values
    // ).subscribe(value => {
    //   console.log(value);
    // });


    console.log('-------distinct---------');

    // const distinct$ = of(1, 2, 2, 3, 1, 4, 4, 5);

    // distinct$.pipe(
    //   distinct()
    // ).subscribe(value => console.log(value));


    console.log('-------delay---------');

    // const delay$ = of(1, 2, 3, 4, 5).pipe(
    //   delay(2000)
    // );

    // delay$.subscribe(value => console.log('delay:', value))


    console.log('-------tap---------');


    // const tap$ = of(1, 2, 3, 4, 5).pipe(
    //   tap((value) => {
    //     console.log('Received:', value);
    //     // Perform side effects or additional actions here
    //   })
    // );

    // tap$.subscribe(value => console.log('Next:', value));


    console.log('-------finalize---------');

    // const finalize$ = of(1, 2, 3).pipe(
    //   finalize(() => {
    //     console.log('Finalize callback executed');
    //     // Perform cleanup or side effects here
    //   })
    // );

    // finalize$.subscribe(value => console.log('delay:', value))


     console.log('-------timeout---------');

    // interval(1000).pipe(
    //   timeout(500)
    // ).subscribe({
    //   next: (val => console.log(val)),
    //   error: (err) => console.error('Error:', err)
    // });


     console.log('-------startWith,endWith---------');

    // const startWith$ = of(1, 2, 3).pipe(
    //   startWith(0)
    // );

    // startWith$.subscribe(value => console.log(value));


    console.log('-------interval---------');

    // const subscription = interval(1000).subscribe(value => {
    //   console.log(value)
    //   if (value === 5) {
    //     subscription.unsubscribe()
    //   }
    // });

    console.log('---------timer----------');

    // timer(2000).subscribe(value => console.log(value));

    // timer(3000, 1000).subscribe(value => console.log(value));


    console.log('---------debounce----------');

    const inputElement = document.getElementById('debounce')!;
    const input$ = fromEvent(inputElement, 'input');

    const debouncedInput$ = input$.pipe(debounceTime(500));

    debouncedInput$.subscribe((event) => {
      const inputValue = (event.target as HTMLInputElement).value;
      console.log('Debounced Input:', inputValue);
    });


    console.log('---------throttle----------');

    const buttonElement = document.getElementById('throttle')!;

    const click$ = fromEvent(buttonElement, 'click');

    const throttledClick$ = click$.pipe(throttleTime(1000));

    throttledClick$.subscribe(() => console.log('Throttled click event'));

    
    console.log('---------audit----------');

    // interval(1000).pipe(
    //   auditTime(2000)
    // ).subscribe(value => console.log(value));
  }
}
