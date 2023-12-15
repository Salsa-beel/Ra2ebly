import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditModeModule } from './edit-mode/edit-mode.module';
import { SharedModule } from './shared/shared.module';
import { ViewModule } from './view-mode/view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ViewModule,
   EditModeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
