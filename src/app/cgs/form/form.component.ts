import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() param: any;
  
  mobileValidation(event: KeyboardEvent) {
    const isDigit = /^\d$/.test(event.key);
    if (!isDigit) event.preventDefault();
  }
}
