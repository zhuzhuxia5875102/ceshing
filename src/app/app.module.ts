import {NgModule, NgZone} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeComponent } from './me/me.component';
import { ChildrenComponent } from './me/children/children.component';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {ModuleFederationToolsModule, shareNgZone} from "@angular-architects/module-federation-tools";
import {NzStepComponent, NzStepsComponent} from "ng-zorro-antd/steps";

@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    ChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzButtonComponent,
    ModuleFederationToolsModule,
    NzStepsComponent,
    NzStepComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngZone: NgZone) {
    shareNgZone(ngZone);
  }
}
