import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditModeComponent } from './edit-mode.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@NgModule({

  imports: [
    CommonModule,
    SharedModule

  ],
  declarations: [
    EditModeComponent,
  ],
  exports:[
    EditModeComponent
  ]
})
export class EditModeModule { }
