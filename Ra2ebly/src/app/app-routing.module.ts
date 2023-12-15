import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditModeComponent } from './edit-mode/edit-mode.component';
import { BarchartComponent } from './view-mode/barchart/barchart.component';

const routes: Routes = [
  {path:'dashboard',component:BarchartComponent},
  {path:'edit',component:EditModeComponent},
  {path:'',redirectTo:'/dashboard', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
