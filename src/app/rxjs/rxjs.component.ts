import { Component } from '@angular/core';
import { RxjsService } from './rxjs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  private observeSubscription : Subscription
  private subjectSubscription : Subscription
  changedObservable: string = ''
  subjectVar: number = 0
  
  constructor(private rxjsService : RxjsService) {
    this.observeSubscription = this.rxjsService.observe$.subscribe(value => {
      this.changedObservable = value
    })
    this.subjectSubscription = this.rxjsService.subject$.subscribe((value:number) => {
      this.subjectVar = value
    })
  }

  observeChange(value:string):void {
    this.rxjsService.setObserve(value)
    this.rxjsService.setSubject(5)
  }

  ngOnDestroy() {
    this.observeSubscription.unsubscribe()
    this.subjectSubscription.unsubscribe()
  }

}
