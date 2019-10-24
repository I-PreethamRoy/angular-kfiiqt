import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {bodycomponent} from'./scripts/body/body.component';
import {formcomponent} from'./scripts/form/form.component';
import {gridcolcomponent} from'./scripts/gridcol/gridcol.component';
import {gridrowcomponent} from'./scripts/gridrow/gridrow.component';
import {inputcomponent} from'./scripts/input/input.component';
import {panelcomponent} from'./scripts/panel/panel.component';
import {panelseccomponent} from'./scripts/panelsec/panelsec.component';
import {screencomponent} from'./scripts/screen/screen.component';
import {seccolcomponent} from'./scripts/seccol/seccol.component';
import {secrowcomponent} from'./scripts/secrow/secrow.component';
import {AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [  AppComponent,
    
    bodycomponent,
    screencomponent,
    gridrowcomponent,
    gridcolcomponent,
    panelcomponent,
    panelseccomponent
    formcomponent,
    secrowcomponent,
    seccolcomponent,
    inputcomponent,
 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
