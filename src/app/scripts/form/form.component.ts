import {Component,OnInit} from '@angular/core';
import {Input} from '@angular/core';
import '../app.component.css';

@Component({
	selector:'formcomponent',
	templateUrl:"../../screens/form.component.html",
	styleUrls:['../app.component.css']
})

export class formcomponent{
	@Input()
	public props:any={};
	@Input()
	public titleValue:string;
}