import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesDetailsComponent } from './expenses-details.component';

describe('ExpensesDetailsComponent', () => {
  let component: ExpensesDetailsComponent;
  let fixture: ComponentFixture<ExpensesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
