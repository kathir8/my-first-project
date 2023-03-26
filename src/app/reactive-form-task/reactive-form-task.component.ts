import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Select2Data, Select2UpdateEvent } from 'ng-select2-component';
import { allState, country, personalDetails } from './reactive-form-task.data';

@Component({
  selector: 'app-reactive-form-task',
  templateUrl: './reactive-form-task.component.html',
  styleUrls: ['./reactive-form-task.component.css']
})
export class ReactiveFormTaskComponent {
  showPassword: boolean = false
  loginSubmitted: boolean = false // to validate login form after login button click
  loginBtnLoading: boolean = false // to show login button loading
  loginFormValid: boolean = false // to toggle login and personal detail form

  loginForm = new FormGroup({
    "email": new FormControl("", [Validators.required, Validators.email]),
    "password": new FormControl("", Validators.required)
  })
  personalSubmitted: boolean = false // to validate personal detail form after submit button click
  personalBtnLoading: boolean = false // to show submit button loading
  sameAddress: boolean = false // permanent address toggle
  hobbyCheck: boolean = false // hobby validation while clicking plus button

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
        "country": new FormControl("", [Validators.required]),
        "state": new FormControl("", [Validators.required]),
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
    "nationality": new FormControl("indian", [Validators.required]),
    "hobbies": new FormArray([new FormControl("", [Validators.required])]),
    "description": new FormControl("")
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
    return this.personalForm.controls.hobbies.controls
  }

  loginSubmit() {
    this.loginSubmitted = true
    this.loginBtnLoading = true
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      this.loginFormValid = true;
      this.loginForm.reset()
      console.log(this.loginForm.controls);
    }
    this.loginBtnLoading = false
  }

  toggleAddress() {

    this.sameAddress = !this.sameAddress
    const permanentAddress = this.personalForm.get('addressDetails')?.get('permanentAddress') as FormGroup;
 
    for (let key in permanentAddress.controls) {
      const control = permanentAddress.get(key)!;
      if (this.sameAddress) {
        control.clearValidators();
      } else {
        if (key === 'zipcode') {
          control.setValidators([Validators.required, Validators.maxLength(50)]);
        } else {
          control.setValidators([Validators.required]);
        }
      }
      control.updateValueAndValidity();
    }
  }

  addHobby() {
    if (this.p['hobbies'].valid) {
      this.hobbyCheck = false;
      (<FormArray>this.personalForm.get('hobbies')).push(new FormControl("", [Validators.required]));
    } else {
      this.hobbyCheck = true;
    }
  }
  removeHobby(index: number) {
    (<FormArray>this.personalForm.get('hobbies')).removeAt(index);
  }

  personalSubmit() {
    this.personalSubmitted = true
    this.personalBtnLoading = true
    this.hobbyCheck = true

    console.log(this.personalForm);
    if (this.personalForm.valid) {
      let tempObj: any = this.personalForm.value
      tempObj['email'] = this.f['email'].value
      let personalDetailsObj: personalDetails = tempObj
      /* -----------------------------remove email in interface --------------------------------------------- */
      // let personalDetailsObj: personalDetails = this.personalForm.value

      if (this.sameAddress) {
        personalDetailsObj['addressDetails']['permanentAddress'] = personalDetailsObj['addressDetails']['presentAddress']
      }
      console.log(personalDetailsObj);
      setTimeout(() => {
        this.personalForm.reset()
        this.personalForm.patchValue({
          nationality: 'indian'
        });
        this.personalBtnLoading = false
      }, 1500);
    }
    this.personalBtnLoading = false
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

  perCountry: Select2Data = country;
  perState: Select2Data = [];

  updateCountry(type: string, event: Select2UpdateEvent<any>) {
    if (type === 'present') {
      this.prstState = allState[event.value]
    } else {
      this.perState = allState[event.value]
    }
  }

}
