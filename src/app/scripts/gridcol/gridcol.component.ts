import {Component,OnInit} from '@angular/core';
import { Input } from '@angular/core';
import '../app.component.css';

@Component({
	selector:'gridcolcomponent',
	templateUrl:"../../screens/gridcol.component.html",
	styleUrls:['../app.component.css']
})

export class gridcolcomponent{
	@Input()
	public props:any={}
	
}