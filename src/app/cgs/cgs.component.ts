import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-cgs',
    templateUrl: './cgs.component.html',
    styleUrls: ['./cgs.component.css'],
    standalone: false
})
export class CgsComponent {

  private commonDetails = {
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    dob: ['', Validators.required],
    email: ['', Validators.email],
    mobile: ['', Validators.required, Validators.minLength(10)],
    idType: ['aadhar', Validators.required],
    id: ['', Validators.required],
    address: this.fb.group({
      address1: ['', Validators.required],
      address2: '',
      address3: '',
    }),
    landmark: '',
    city: ['', Validators.required],
    state: ['', Validators.required]
  }
  registrationForm = this.fb.group({
    ...this.commonDetails,
    nominee: [false, Validators.required],
    nomineeDetails: this.fb.group({
      ...this.commonDetails,
    }),
    guardianDetails: this.fb.group({
      ...this.commonDetails,
    }),
  });


  get f(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }

  param: any = {
    'f': this.f,
    'submitted': false,
    'form': this.registrationForm,
    'nominee': true,
  }
  nomineeParam: any = {
    'f': this.f,
    'submitted': false,
    'form': this.registrationForm.controls.nomineeDetails,
  }
  guardianParam: any = {
    'f': this.f,
    'submitted': false,
    'form': this.registrationForm.controls.guardianDetails
  }



  constructor(private fb: FormBuilder){

  }

  ngOnInit() {
    const mobileControl = this.registrationForm.get('mobile')!;
    mobileControl.setValidators(Validators.compose([
      Validators.required,
      Validators.minLength(10),
    ]));
    this.registrationForm.get('nominee')?.valueChanges.subscribe(value => {
      const nomineeDetails = this.registrationForm.get('nomineeDetails') as FormGroup;
    
      for (let key in nomineeDetails.controls) {
        const control = nomineeDetails.get(key)!;

        if (value) {
          if (['fname', 'lname', 'dob', 'id', 'city', 'state'].includes(key)) {
            control.setValidators([Validators.required]);
          } else if (key === 'idType') {
            control.setValidators([Validators.required]);
            control.setValue('aadhar')
          } else if (key === 'address') {
            const addrress = nomineeDetails.get(key) as FormGroup
            addrress.get('address1')?.setValidators([Validators.required]);
          } else if (key === 'mobile') {
            control.setValidators(Validators.compose([
              Validators.required,
              Validators.minLength(10),
            ]));
          }
        } else {
          control.clearValidators();
        }
        control.updateValueAndValidity();
      }

    });
  }

  onSubmit() {
    this.param['submitted'] = true
    this.nomineeParam['submitted'] = true
    this.guardianParam['submitted'] = true
    console.log(this.registrationForm.value);
  }
}
