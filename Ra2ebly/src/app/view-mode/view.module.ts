import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { linechartComponent } from './lineChart/linechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    linechartComponent,
    BarchartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgChartsModule


  ],
  exports: [
    linechartComponent,
    BarchartComponent
  ]
})
export class ViewModule { }
