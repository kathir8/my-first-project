import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-dir',
  templateUrl: './attr-dir.component.html',
  styleUrls: ['./attr-dir.component.css']
})
export class AttrDirComponent {
  highLightColor: string = "black"
  isBlue:boolean = false
  highLight(clr:string){
    this.highLightColor = clr  
  }
}
