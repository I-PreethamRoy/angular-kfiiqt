import {Component,OnInit} from '@angular/core';
import { Input } from '@angular/core';
@Component({
	selector:'bodycomponent',
	templateUrl:"../../screens/body.component.html",
	styleUrls:['../app.component.css']
})

export class bodycomponent{
	@Input()
	public props:any={};
}
