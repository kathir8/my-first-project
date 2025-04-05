import { Component } from '@angular/core';

@Component({
    selector: 'app-sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.css'],
    standalone: false
})
export class SampleComponent {
  event_notification_list = [1, 3, 4, 5, 6, 7, 8]

}
