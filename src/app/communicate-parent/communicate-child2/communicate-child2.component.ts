import { Component } from '@angular/core';
import { CommunicateChildComponent } from '../communicate-child/communicate-child.component';

@Component({
    selector: 'app-communicate-child2',
    templateUrl: './communicate-child2.component.html',
    standalone: false
})
export class CommunicateChild2Component extends CommunicateChildComponent{
 
}
