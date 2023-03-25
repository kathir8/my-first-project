import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Select2Data, Select2UpdateEvent } from 'ng-select2-component';
import { allState, country } from './reactive-form-task.data';

@Component({
  selector: 'app-reactive-form-task',
  templateUrl: './reactive-form-task.component.html',
  styleUrls: ['./reactive-form-task.component.css']
})
export class ReactiveFormTaskComponent {
  showPassword: boolean = false
  loginSubmitted: boolean = false
  loginBtnLoading:boolean = false
  loginFormValid:boolean = false
  loginForm = new FormGroup({
    "email": new FormControl("", [Validators.required, Validators.email]),
    "password": new FormControl("", Validators.required)
  })
  personalSubmitted: boolean = false
  personalBtnLoading:boolean = false
  sameAddress: boolean = false
  hobbyForm = new FormControl("", [Validators.required]);

  personalForm = new FormGroup({
    "name": new FormControl("", [Validators.required]),
    "mobile": new FormControl("", Validators.minLength(10)),
    "addressDetails": new FormGroup({
      "presentAddress": new FormGroup({
        "country": new FormControl("", [Validators.required]),
        "state": new FormControl("", [Validators.required]),
        "addressLine1": new FormControl("", [Validators.required]),
        "addressLine2": new FormControl(""),
        "street": new FormControl("", [Validators.required]),
        "area": new FormControl("", [Validators.required]),
        "city": new FormControl("", [Validators.required]),
        "zipcode": new FormControl("", [Validators.required, Validators.minLength(6)])
      }),
      "permanentAddress": new FormGroup({
        "country": new FormControl(""),
        "state": new FormControl(""),
        "addressLine1": new FormControl("", [Validators.required]),
        "addressLine2": new FormControl(""),
        "street": new FormControl("", [Validators.required]),
        "area": new FormControl("", [Validators.required]),
        "city": new FormControl("", [Validators.required]),
        "zipcode": new FormControl("", [Validators.required, Validators.minLength(6)])
      })
    }),
    "gender": new FormControl("", [Validators.required]),
    "dob": new FormControl("", [Validators.required]),
    "hobbies": new FormArray([new FormControl("", [Validators.required])]),
  })


  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls
  }

  get p(): { [key: string]: AbstractControl } {
    return this.personalForm.controls
  }
  get prsntAdrs(): { [key: string]: AbstractControl } {
    return this.personalForm.controls.addressDetails.controls.presentAddress.controls
  }
  get perAdrs(): { [key: string]: AbstractControl } {
    return this.personalForm.controls.addressDetails.controls.permanentAddress.controls
  }
  get hobbyControls() {
    return (<FormArray>this.personalForm.get('hobbies')).controls;
  }

  updateHobby(type: string, index?: number) {
    if (type === "add") {
      (<FormArray>this.personalForm.get('hobbies')).push(new FormControl("", [Validators.required]))
    } else if (typeof index === "number") {
      (<FormArray>this.personalForm.get('hobbies')).removeAt(index)
    }
  }
  
  loginSubmit() {
    this.loginSubmitted = true
    this.loginBtnLoading = true
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      this.loginFormValid= true;
      console.log(this.loginForm.controls);
    }

    setTimeout(() => {
      this.loginBtnLoading = false
    }, 1500);
  }

  personalSubmit() {
        this.personalSubmitted = true
      this.personalBtnLoading = true

     console.log(this.personalForm);
    if (this.personalForm.valid) {
      console.log(this.personalForm.value);
    }

    setTimeout(() => {
      this.personalBtnLoading = false
    }, 1500);
  }

  filterCharCode(event: any, type: string): void {
    const pattern = type === "letter" ? /^[a-zA-Z]+$/ : /[0-9\+\-\\]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  /* ------------------------------ select2plugin ----------------------------- */
  
  prstCountry: Select2Data = country;
  prstState: Select2Data = [];

  updateCountry(event: Select2UpdateEvent<any>) {
    this.prstState = allState[event.value]
  }

  /* ----------------------------------- try ---------------------------------- */
  
}
