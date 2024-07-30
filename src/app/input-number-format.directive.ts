import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputNumberFormat]'
})
export class InputNumberFormatDirective {
  constructor(private el:ElementRef) { }
  @Input('appInputNumberFormat') format:string = '';
  @HostListener('focus') onFocus(){
    console.log("on Focus");
  }
  @HostListener('blur') onBlur(){
    console.log("on Blur");
    let value:string = this.el.nativeElement.value;
    if(this.format === 'uppercase')
      this.el.nativeElement.value = value.toUpperCase()
    else
      this.el.nativeElement.value = value.toLowerCase()
  }
  

}
