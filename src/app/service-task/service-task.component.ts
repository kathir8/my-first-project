import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-service-task',
  templateUrl: './service-task.component.html',
  styleUrls: ['./service-task.component.css']
})
export class ServiceTaskComponent implements OnInit{

  // this is to access something in the html page in first time
  // myCustomInput is a variable
  @ViewChild('templateRefName', { static: true }) myCustomInput!: ElementRef<HTMLInputElement>; 

  // this is to access the service page
  constructor(private nameService: NameService) { }

 
  getName!: string

  ngOnInit() { // ngOnInit should come whem implents OnInit wrote in class line 
    this.myCustomInput.nativeElement.focus() // this is to trigger somthing in the html page in first time
  }

  submit(templateRefName: HTMLInputElement) {
    this.nameService.setName(templateRefName.value)
    this.getName = this.nameService.getName()
  }
}


 
