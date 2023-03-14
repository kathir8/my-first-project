import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
  reactiveForm!: FormGroup;
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      personaldetails: new FormGroup({
        firstname: new FormControl(null,Validators.required),
        lastname: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required,Validators.email]),
      }),
        country: new FormControl('india'),
        gender: new FormControl('male'),
      hobbies: new FormControl(null),
    })
    
  }


  onSubmit() {
    console.log(this.reactiveForm);
    console.log(this.reactiveForm.value);
    if (this.reactiveForm.valid) {
      console.log("validddddddddddddddd");
      
    }
    
  }
}
