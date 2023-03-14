import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  fromParent = ""

  @Output()
  sendMsgEmitter = new EventEmitter()

  sendtoParent(e:Event) {
    this.sendMsgEmitter.emit((e.target as HTMLInputElement).value)
    
  }
}
