import {Component,OnInit,ContentChild} from '@angular/core';
import { Input } from '@angular/core';
import '../app.component.css';

@Component({
	selector:'panelseccomponent',
	templateUrl:"../../screens/panelsec.component.html",
	styleUrls:['../app.component.css']
})

export class panelseccomponent{
	
	@Input()
	public props:any;
	@Input()
	public panelType:string;


	ifCheckForPanelType(){
		if(this.panelType == 'SIMPLE' || this.panelType == 'ACCORDION' || this.panelType == 'CAROUSEL' || this.panelType == 'COLLAPSIBLE'){
			return true;
		}else{
			return false;
		}
	}

	checkTitleValue(){
		return (this.props.titleValue)?true:false;
	}

	checkTitleIcon(){
		return (this.props.titleIcon)?true:false;
	}
}