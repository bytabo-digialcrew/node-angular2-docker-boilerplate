import { Component } from '@angular/core';

import { ExampleDirective } from './shared/index';


@Component({
  selector: 'my-app',
  directives: [ ExampleDirective ] ,
  template: `
  	<h1>Eine App. Hallo {{company}}</h1>
  	    <form *ngIf="isVisible">
  	    <input 
           type="text"
           [(ngModel)]="name" name="test" >
        <p example>Du bist der: {{name}}</p>
    </form>

	<button (click)="onSave()" >Save</button>
	<button (click)="isVisible = !isVisible">Show/Hide</button>
    `
})

export class AppComponent {

	company = "Bytabo";
	isVisible = true;
	name;

    onSave() {

    	alert(this.name + " von " + this.company);

    	var object = {
    		name: this.name,
    		company: this.company,
    	};

    }


}