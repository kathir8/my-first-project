import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  nameFromService!:string
  setName(name: string) {
    this.nameFromService = name
  }
  getName() {
    return this.nameFromService 
  }
}
