import { Component } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    templateUrl: './data-binding.component.html',
    styleUrls: ['./data-binding.component.css'],
    standalone: false
})
export class DataBindingComponent {
  btnDisabled: boolean = true
  name!: string;
  text: string = "No name is added !";

  constructor() {  // constructor execute 1st when the class is called
    setTimeout(() => {
      this.btnDisabled = false;
    }, 2000);
  }
  addName() {

    this.text = "your name is " + this.name
  }


  age: number = 23;
  isDisabled: boolean = false;
  searchValue: string = "from prop binding";

  getCity() {
    return "Chennai"
  }

  changeName() {
    this.name = "kathiravan"
  }
  getDataEventBinding(event: Event) {
    this.name = (<HTMLInputElement>event.target).value
  }
}
