import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor() { }

  private observeVariable = new BehaviorSubject<string>(`I'm Observable`)
  observe$ = this.observeVariable.asObservable()

  private subject = new Subject<number>()
  subject$ = this.subject.asObservable()

  setObserve(value: string):void {
    this.observeVariable.next(value)
  }
  
  setSubject(value: number): void{
    this.subject.next(value)
  }
}
