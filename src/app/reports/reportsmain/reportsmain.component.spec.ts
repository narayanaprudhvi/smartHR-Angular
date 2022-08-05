import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsmainComponent } from './reportsmain.component';

describe('ReportsmainComponent', () => {
  let component: ReportsmainComponent;
  let fixture: ComponentFixture<ReportsmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
