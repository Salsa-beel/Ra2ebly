import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [

    SidebarComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NgChartsModule,

  ],

  exports:[

    SidebarComponent,
  ]
})
export class SharedModule { }
