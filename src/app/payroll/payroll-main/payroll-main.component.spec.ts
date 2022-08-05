import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollMainComponent } from './payroll-main.component';

describe('PayrollMainComponent', () => {
  let component: PayrollMainComponent;
  let fixture: ComponentFixture<PayrollMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
