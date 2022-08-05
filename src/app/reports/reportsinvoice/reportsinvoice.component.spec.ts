import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsinvoiceComponent } from './reportsinvoice.component';

describe('ReportsinvoiceComponent', () => {
  let component: ReportsinvoiceComponent;
  let fixture: ComponentFixture<ReportsinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
