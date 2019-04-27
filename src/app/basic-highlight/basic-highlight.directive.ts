import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighLight]'//app - element, [app] - attribute
})
export class BasicHighLightDirective implements OnInit{
    constructor(private elementRef: ElementRef){

    }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}