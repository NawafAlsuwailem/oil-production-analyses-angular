import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponent } from './component/data-table/data-table.component';
import { OilExportService } from './service/oil-export.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { LineChartComponent } from './component/line_chart/line-chart.component';
import { BarChartComponent } from './component/bar_chart/bar-chart.component';
import {NavbarModule} from './component/navbar/navbar.module';
import { ChartDisplayComponent } from './component/chart-display/chart-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    LineChartComponent,
    BarChartComponent,
    ChartDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NavbarModule,
    BrowserAnimationsModule,
    MatButtonModule,

  ],
  providers: [OilExportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
