import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html'
})
export class TemplateFormComponent {

  submitted: boolean = false;
  isLoading: boolean = false;
  pwdShow: boolean = false;

  onLogin(myForm: NgForm):void {
    this.submitted = true;
    this.isLoading = true;

    if (myForm.form.valid) { 

      setTimeout(() => {
        this.submitted = false;
        this.isLoading = false;
      }, 1500);

    } else {
      this.isLoading = false;
    }
  }
}
