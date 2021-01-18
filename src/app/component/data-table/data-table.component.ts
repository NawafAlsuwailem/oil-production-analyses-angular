import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {OilExport} from '../../model/oilExport';
import {ActivatedRoute} from '@angular/router';
import {OilExportService} from '../../service/oil-export.service';

declare var $;

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  public oilExports: OilExport[] = [];
  items = [];
  pageOfItems: Array<any>;
  constructor(private route: ActivatedRoute, private oilExportService: OilExportService) {}

  ngOnInit(): void {
    this.oilExportService.findAll().subscribe(oilExports => {
      this.oilExports = oilExports.map(oilExport =>  {
        return {
           ...oilExport
        };
      });
    });
  }
}
