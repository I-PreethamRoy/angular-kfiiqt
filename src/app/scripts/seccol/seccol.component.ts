import {Component,OnInit} from '@angular/core';
import {Input} from '@angular/core';
import '../app.component.css';

@Component({
	selector:'seccolcomponent',
	templateUrl:"../../screens/seccol.component.html",
	styleUrls:['../app.component.css']
})

export class seccolcomponent implements OnInit{
	@Input()
	public props:any;
	columnTag;
	ngOnInit(){
		this.columnTag = this.props.cntrType == "NAVBAR" ? "li" : "span";
	}
	containerCheck(){
		return (this.props.cntrType=='NAVBAR')?false:true;
	}
}