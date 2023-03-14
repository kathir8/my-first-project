import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-task',
  templateUrl: './child-task.component.html',
  styleUrls: ['./child-task.component.css']
})
export class ChildTaskComponent {
  content = [
    {
      name: "Green",
      type:"color"
    },
    {
      name: "Dog",
      type:"animal"
    },
    {
      name: "Apple",
      type:"fruit"
    },
    {
      name: "Mango",
      type:"fruit"
    },
    {
      name: "Yellow",
      type:"color"
    },
    {
      name: "Cat",
      type:"animal"
    },
    {
      name: "Blue",
      type:"color"
    },
    {
      name: "Cow",
      type:"animal"
    },
    {
      name: "Goat",
      type:"animal"
    },
    {
      name: "Black",
      type:"color"
    },
    {
      name: "Banana",
      type:"fruit"
    },
    {
      name: "Cherry",
      type:"fruit"
    },
  ]

  @Input()
  selected:string = ""

  @Output()
  sendMsgEmitter = new EventEmitter()

}
