import {Component,OnInit} from '@angular/core';
import { Input } from '@angular/core';
import '../app.component.css';

@Component({
	selector:'gridrowcomponent',
	templateUrl:"../../screens/gridrow.component.html",
	styleUrls:['../app.component.css']
})

export class gridrowcomponent{
 @Input()
 public props:any={};
}
