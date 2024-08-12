import { TestBed } from '@angular/core/testing';

import { GetListeExamenService } from './get-liste-examen.service';

describe('GetListeExamenService', () => {
  let service: GetListeExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListeExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
