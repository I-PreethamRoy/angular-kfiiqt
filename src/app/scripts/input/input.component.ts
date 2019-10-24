import {Component,OnInit} from '@angular/core';
import {Input} from '@angular/core';

@Component({
	selector:'inputcomponent',
	templateUrl:"../../screens/input.component.html",
	styleUrls:['../app.component.css']
})

export class inputcomponent implements OnInit{
	@Input()
	public props:any;
	isWrapped = false;
	maxLength ='';

	ngOnInit(){
	if (this.props.hasSymbol == "Y" || this.props.hasIcon == "Y" || 							this.props.isdateOrDateTime == "Y" || this.props.hasLov == "Y") {
		this.isWrapped = true;
		}
	if(this.props.content.direct.maxLength=="undefined" 										|| this.props.content.direct.maxLength==""){
		this.maxLength = undefined;
		}
	}
	alertInp(){
		console.log("hi");
	}
	
}