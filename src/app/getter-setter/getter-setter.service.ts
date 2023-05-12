import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetterSetterService {

  private _data: string = "hello"

  private sample = new BehaviorSubject<string>("gm")
  sample$ = this.sample.asObservable()
  
  get data():string {
    return this._data
  }

  set data(value: string) {
    this._data = value
  }
  set sampleVal(value:string) {
    this.sample.next(value)
  }
}
