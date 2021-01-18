import { TestBed } from '@angular/core/testing';

import { OilExportService } from './oil-export.service';

describe('OilExportService', () => {
  let service: OilExportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OilExportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
