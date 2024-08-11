import { TestBed } from '@angular/core/testing';

import { ListeAdmisService } from './liste-admis.service';

describe('ListeAdmisService', () => {
  let service: ListeAdmisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeAdmisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
