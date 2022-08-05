import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSalaryEditComponent } from './employee-salary-edit.component';

describe('EmployeeSalaryEditComponent', () => {
  let component: EmployeeSalaryEditComponent;
  let fixture: ComponentFixture<EmployeeSalaryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSalaryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSalaryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
