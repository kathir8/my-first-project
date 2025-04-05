import { Component } from '@angular/core';
import { GetterSetterService } from './getter-setter.service';

@Component({
    selector: 'app-getter-setter',
    template: '',
    standalone: false
})
export class GetterSetterComponent {
  constructor(private getterSetterService: GetterSetterService) {
    this.getterSetterService.sample$.subscribe(value => {
      console.log(value);
    })
   }
  
  ngOnInit() {
    console.log(this.getterSetterService.data);
    this.getterSetterService.data = "hi!"
    console.log(this.getterSetterService.data);
    this.getterSetterService.sampleVal = "ge"
  }
}
