import { Component, OnInit } from '@angular/core';
import {OilExport} from '../../model/oilExport';
import {OilExportService} from '../../service/oil-export.service';

@Component({
  selector: 'app-chart-display',
  templateUrl: './chart-display.component.html',
  styleUrls: ['./chart-display.component.css']
})
export class ChartDisplayComponent implements OnInit {
  public oilExports: OilExport[] = [];
  histogram_data = [];
  lineChart_data = [];
  constructor(private oilExportService: OilExportService) { }

  ngOnInit(): void {
    this.oilExportService.findAll().subscribe(oilExports => {
      this.oilExports = oilExports.map(oilExport =>  {
        return {
          ...oilExport
        };
      });
      /////////////// Histogram data/////////////////
      var holder = {};
      var cnt_holder = {};
      this.oilExports.forEach(function(d) {
        if (holder.hasOwnProperty(d[1])) {
          holder[d[1]] = holder[d[1]] + parseFloat(d[3]);
          cnt_holder[d[1]] += 1;
        } else {
          holder[d[1]] = parseFloat(d[3]);
          cnt_holder[d[1]] = 1;
        }
      });

      for (var prop in holder) {
        if(holder[prop] == 0) continue;
        this.histogram_data.push({ country: prop, avgExport: Math.round(holder[prop]/cnt_holder[prop]) });
      }
      /////////////////// Line Chart data //////////////////
      holder = {}
      this.oilExports.forEach(function(d) {
        if (holder.hasOwnProperty(d[2])) {
          holder[d[2]] = holder[d[2]] + parseFloat(d[3]);
        } else {
          holder[d[2]] = parseFloat(d[3]);
        }
      });
      for (var prop in holder) {
        let year = prop.slice(3, 7);
        let month = prop.slice(0,3);
        let val = new Date(month + ' 01 ' + year);
        this.lineChart_data.push({ month: val, totalExp: Math.round(holder[prop]) });
      }
    });
  }
}
