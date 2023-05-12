import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetterSetterService {

  private _data: string = "hello"
  
  get data():string {
    return this._data
  }

  set data(value: string) {
    this._data = value
  }
}
