import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsexpenseComponent } from './reportsexpense.component';

describe('ReportsexpenseComponent', () => {
  let component: ReportsexpenseComponent;
  let fixture: ComponentFixture<ReportsexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
