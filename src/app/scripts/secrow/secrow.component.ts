import {Component,OnInit} from '@angular/core';
import { Input } from '@angular/core';
import '../app.component.css';

@Component({
	selector:'secrowcomponent',
	templateUrl:"../../screens/secrow.component.html",
	styleUrls: ['../app.component.css']
})

export class secrowcomponent{
	@Input()
	public props:any;
}