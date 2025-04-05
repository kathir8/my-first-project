import { Component } from '@angular/core';

@Component({
    selector: 'app-data-binding-exercise',
    templateUrl: './data-binding-exercise.component.html',
    styleUrls: ['./data-binding-exercise.component.css'],
    standalone: false
})
export class DataBindingExerciseComponent {
  name:string = ""

  resetHandler() {
    this.name=""
  }
}
