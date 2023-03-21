import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  template: `<p>Current Time is : {{ myDate | moment: 'MMM Do YYYY, h:mm:ss a' }}</p>
  <input type="text" #username> <button (click)='addUser(username.value)'>Add</button>

  <b class="my-3 d-block">won't affect</b>
  <div *ngFor="let user of wontAffect | filter: 'gender' : 'm' ">{{user.name}}</div>  
  <hr>
  <b class="my-3 d-block">will affect</b>
  <div *ngFor="let user of willAffect | filter: 'gender' : 'm' ">{{user.name}}</div> `,
})
export class CustomPipeComponent {
  myDate: Date = new Date();

  wontAffect: any = [
    {
      "name": "kathir",
      "gender": "m"
    },
    {
      "name": "arul",
      "gender": "m"
    },
    {
      "name": "aqeel",
      "gender": "m"
    },
    {
      "name": "jenet",
      "gender": "f"
    }
  ]

  willAffect: any = [
    {
      "name": "kathir",
      "gender": "m"
    },
    {
      "name": "arul",
      "gender": "m"
    },
    {
      "name": "aqeel",
      "gender": "m"
    },
    {
      "name": "jenet",
      "gender": "f"
    }
  ]

  addUser(name: string) {
    
    this.wontAffect.push({ name, 'gender': 'm' })
    console.log(this.wontAffect);
    
    this.willAffect = [...this.willAffect, {name,'gender':'m'}]
    console.log(this.willAffect);
    
  }
}

/* Impure pipes will render the pipe for all lifecycles 
  Pure pipes will render only if the variable is created or completely changed (will not render when variable is updated)
*/