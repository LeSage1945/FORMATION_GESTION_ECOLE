import { TestBed } from '@angular/core/testing';

import { TableListeService } from './table-liste.service';

describe('TableListeService', () => {
  let service: TableListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
