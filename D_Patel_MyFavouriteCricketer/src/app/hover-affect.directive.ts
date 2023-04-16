import { Input, Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  @Input('Hover-Affect') affectStyle: string = 'underline';

  constructor(private el: ElementRef) 
  {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.affectStyle === 'underline') {
      this.el.nativeElement.style.textDecoration = this.affectStyle;
    } else if (this.affectStyle === 'bold') {
      this.el.nativeElement.style.fontWeight = 'bold';
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    if (this.affectStyle === 'underline') {
      this.el.nativeElement.style.textDecoration = 'none';
    } else if (this.affectStyle === 'bold') {
      this.el.nativeElement.style.fontWeight = 'normal';
    }

  }

}
