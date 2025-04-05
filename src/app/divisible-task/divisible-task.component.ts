import { Component } from '@angular/core';

@Component({
    selector: 'app-divisible-task',
    templateUrl: './divisible-task.component.html',
    styleUrls: ['./divisible-task.component.css'],
    standalone: false
})
export class DivisibleTaskComponent {
isDisabled: boolean = true
  selected:number = 0
  numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50
  ]

  divisibleBtn(num: number) {
    this.selected = num
    this.isDisabled = false
  }



}
