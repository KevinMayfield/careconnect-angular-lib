import { TestBed, inject } from '@angular/core/testing';

import { CcFhirLibService } from './cc-fhir-lib.service';

describe('CcFhirLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CcFhirLibService]
    });
  });

  it('should be created', inject([CcFhirLibService], (service: CcFhirLibService) => {
    expect(service).toBeTruthy();
  }));
});
