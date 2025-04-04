import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appSetBackground]',
    standalone: false
})
export class SetBackgroundDirective {

  constructor(private element: ElementRef) {
    this.element = element
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = "#C8E6C9"
  }
}
