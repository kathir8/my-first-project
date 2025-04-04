import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-view-child-task',
    templateUrl: './view-child-task.component.html',
    styleUrls: ['./view-child-task.component.css'],
    standalone: false
})
export class ViewChildTaskComponent implements OnInit {

  @ViewChild('heading', { static: true }) viewChildVariable!: ElementRef<HTMLInputElement>
  ngOnInit(): void {
    this.viewChildVariable.nativeElement.innerHTML = "Analyze Word"
  }

  vowelArr: number[] = []

  vowelFn(word: string) {
    let vowelOutput = [0, 0, 0, 0, 0]

    for (const letter of word) {

      switch (letter) {
        case "a":
          vowelOutput[0] += 1
          break;

        case "e":
          vowelOutput[1] += 1
          break;

        case "i":
          vowelOutput[2] += 1
          break;

        case "o":
          vowelOutput[3] += 1
          break;

        case "u":
          vowelOutput[4] += 1
          break;
      }
    }

    this.vowelArr = vowelOutput
  }
}
