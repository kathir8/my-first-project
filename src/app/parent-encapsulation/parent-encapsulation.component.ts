import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent-encapsulation',
  
  template: `<div class="btn sameStyle me-2">parent</div>
<app-child-encapsulation/>`,
  
  styles: [`.sameStyle{
    background-color: orange;
    color: white;
}`],
  
  encapsulation: ViewEncapsulation.None
})
export class ParentEncapsulationComponent {

}
