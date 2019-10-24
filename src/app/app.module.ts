import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BodyComponent} from'./scripts/body/body.component';
import {FormComponent} from'./scripts/form/form.component';

import {GridcolComponent} from'./scripts/gridcol/gridcol.component';
import {GridrowComponent} from'./scripts/gridrow/gridrow.component';
import {InputComponent} from'./scripts/input/input.component';
import {PanelComponent} from'./scripts/panel/panel.component';
import {PanelsecComponent} from'./scripts/panelsec/panelsec.component';
import {ScreenComponent} from'./scripts/screen/screen.component';
import {SeccolComponent} from'./scripts/seccol/seccol.component';
import {SecrowComponent} from'./scripts/secrow/secrow.component';


import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
