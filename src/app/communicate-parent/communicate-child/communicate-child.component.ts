import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommunicateParentComponent } from '../communicate-parent.component';

@Component({
  selector: 'app-communicate-child',
  templateUrl: './communicate-child.component.html'
})
export class CommunicateChildComponent {
  @Input()
  fromParent!:string
  
  @Output()
  sendToParent: EventEmitter<string> = new EventEmitter<string>()

  sendToSibling = "this value passed to sibling using extends concept, if extends is given, both component ts file is consider as same file"

  sendtoParentUsingConstructor = "value is passed from child to parent, accessed through parent"

  valueFromParent:string = ""
  constructor(private communicateParentComponent: CommunicateParentComponent) {
    this.valueFromParent = this.communicateParentComponent.sendtoChildUsingConstructor
  }
  sendToChild() {
   this.sendToParent.emit("this is from child") 
  }
}
