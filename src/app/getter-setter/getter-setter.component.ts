import { Component } from '@angular/core';
import { GetterSetterService } from './getter-setter.service';

@Component({
  selector:'app-getter-setter',
  template: ''
})
export class GetterSetterComponent {
  constructor(private getterSetterService: GetterSetterService) { }
  
  ngOnInit() {
    console.log(this.getterSetterService.data);
    this.getterSetterService.data = "hi!"
    console.log(this.getterSetterService.data);
  }
}
