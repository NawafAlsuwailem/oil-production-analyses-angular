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
  currentTutorial = null;
  searchQuery = '';
  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 25, 50, 100];
  constructor(private route: ActivatedRoute, private oilExportService: OilExportService) {}

  ngOnInit(): void {
    this.oilExportService.findAll().subscribe(oilExports => {
      this.oilExports = oilExports.map(oilExport =>  {
        return {
          ...oilExport
        };
      });
      this.retrieveItems();
    });
  }

  retrieveItems(): void {
    this.items = this.oilExports.filter((item, index)=>{
      if (this.searchQuery) {
        if(item[1].toLowerCase().includes(this.searchQuery.toLowerCase())) return true;
        else return false;
      }
      return true;
    });
    this.count = this.items.length;
  }
  handlePageChange(event): void {
    this.page = event;
    this.retrieveItems();
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveItems();
  }
}
