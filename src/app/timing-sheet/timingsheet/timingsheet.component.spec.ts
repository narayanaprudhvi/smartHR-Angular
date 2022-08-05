import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingsheetComponent } from './timingsheet.component';

describe('TimingsheetComponent', () => {
  let component: TimingsheetComponent;
  let fixture: ComponentFixture<TimingsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
