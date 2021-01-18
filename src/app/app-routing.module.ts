import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataTableComponent} from './component/data-table/data-table.component';
import {ChartDisplayComponent} from './component/chart-display/chart-display.component';


export const routes: Routes = [
  {
    path: '',
    component: DataTableComponent
  },
  { path: 'charts', component: ChartDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
