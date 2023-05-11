import { Component } from '@angular/core';

@Component({
  selector: 'app-communicate-parent',
  templateUrl: './communicate-parent.component.html'
})
export class CommunicateParentComponent {
  parentStr: string = 'this is from parent to child'
  
  fromChild!: string

  sendtoChildUsingConstructor: string = "value is passed from parent to child, accessed through constructor in child component, this is not possible from child to parent"
  
}
