import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appHover]',
    standalone: false
})
export class HoverDirective {

  constructor(private el :ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Add your custom behavior here when the mouse leaves the element
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
