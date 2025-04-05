import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.css'],
    standalone: false
})
export class ReactiveFormComponent{

  loginSubmitted:boolean = false;
  isPwdEnabled: boolean = false;
  isLoading: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  reactiveForm = new FormGroup({
    personaldetails: new FormGroup({
      firstname: new FormControl("", Validators.required),
      lastname: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
    }),
    country: new FormControl('india'),
    gender: new FormControl('male'),
    hobbies: new FormArray([]),
  });
  
  get hobbyControls() {
    return (<FormArray>this.reactiveForm.get('hobbies')).controls;
  }

  login() {
    this.loginSubmitted = true;
    this.isLoading = true;
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      console.log("login form valid");
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  addHobby() {
    const control = new FormControl("", [Validators.required]);
    (<FormArray>this.reactiveForm.get('hobbies')).push(control)
  }

  onSubmit() {
    console.log(this.reactiveForm);
    if (this.reactiveForm.valid) {
      console.log("reacitve form valid");
      this.reactiveForm.reset()
      this.reactiveForm.patchValue({
        country: 'india',
        gender: 'male',
      });
    }
    
  }
}
