import {Component,OnInit} from '@angular/core';
import { Input } from '@angular/core';
import '../app.component.css';


@Component({
	selector:'panelcomponent',
	templateUrl:"../../screens/panel.component.html",
	styleUrls:['../app.component.css']
})

export class panelcomponent{
userLoggedIn = true;
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
}