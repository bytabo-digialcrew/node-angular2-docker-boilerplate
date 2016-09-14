import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[example]'
})
export class ExampleDirective {
    constructor(el: ElementRef, renderer: Renderer) {
        // el.nativeElement.style.color = 'red';
        renderer.setElementStyle(el.nativeElement, 'color', 'red');
    }
}