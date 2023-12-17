import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditModeComponent } from './edit-mode.component';
import { SharedModule } from '../shared/shared.module';
import { ViewModule } from '../view-mode/view.module';

@NgModule({

  imports: [
    CommonModule,
    SharedModule,
    ViewModule

  ],
  declarations: [
    EditModeComponent
  ],
  exports:[
    EditModeComponent
  ]
})
export class EditModeModule { }
