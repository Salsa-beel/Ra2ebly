import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { linechartComponent } from './lineChart/linechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    linechartComponent,
    BarchartComponent,
    DashboardComponent,



  ],
  imports: [
    CommonModule,
    SharedModule,


  ],
  exports: [
    linechartComponent,
    BarchartComponent,
    DashboardComponent
  ]
})
export class ViewModule { }
