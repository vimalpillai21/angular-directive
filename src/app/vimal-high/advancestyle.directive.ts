import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appAdvancestyle]'
})
export class AdvancestyleDirective implements OnInit {
  @Input() defaultColor: string = 'cyan';
  @Input('appAdvancestyle') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef,private render: Renderer2) { }

  ngOnInit(){
    //this.render.setStyle(this.elRef.nativeElement,'background-color','blue');
    // this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.render.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.render.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.backgroundColor = this.highlightColor;
  }
}
