import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcFhirLibComponent } from './cc-fhir-lib.component';

describe('CcFhirLibComponent', () => {
  let component: CcFhirLibComponent;
  let fixture: ComponentFixture<CcFhirLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcFhirLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcFhirLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
