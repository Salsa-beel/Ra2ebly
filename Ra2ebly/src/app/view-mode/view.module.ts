import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { linechartComponent } from './lineChart/linechart.component';
import { BarchartComponent } from './barchart/barchart.component';


@NgModule({
  declarations: [
    linechartComponent,
    BarchartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,


  ],
  exports: [
    linechartComponent,
    BarchartComponent
  ]
})
export class ViewModule { }
