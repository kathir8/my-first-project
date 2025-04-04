import { Component } from '@angular/core';

@Component({
    selector: 'app-parent-task',
    templateUrl: './parent-task.component.html',
    styleUrls: ['./parent-task.component.css'],
    standalone: false
})
export class ParentTaskComponent {
  selectedParent: string = ""
  selectedItem!: string
  
}
