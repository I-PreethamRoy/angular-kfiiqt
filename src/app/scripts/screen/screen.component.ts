import { Component, } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: '../../screens/screen.component.html',
  styleUrls: ['../app.component.css']
})
export class screencomponent{	
	@Input()
	public props:any={};
	checkScreenType(){
		return this.props.screenType=='PG'?true:false;
	}
}
