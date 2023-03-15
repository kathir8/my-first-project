import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  template: `<p>Current Time is : {{ myDate | moment: 'MMM Do YYYY, h:mm:ss a' }}</p>`,
})
export class CustomPipeComponent {
  myDate:Date = new Date()
}
