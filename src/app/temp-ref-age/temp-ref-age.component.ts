import { Component } from '@angular/core';

@Component({
    selector: 'app-temp-ref-age',
    templateUrl: './temp-ref-age.component.html',
    styleUrls: ['./temp-ref-age.component.css'],
    standalone: false
})
export class TempRefAgeComponent {
  age!: number;
}
