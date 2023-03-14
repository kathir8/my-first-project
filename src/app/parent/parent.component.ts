import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  yourName = ""
  age=0
  recieveMsg(msg:number) {
      this.age=msg
  }
}
