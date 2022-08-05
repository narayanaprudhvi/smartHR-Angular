import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingsheetEditComponent } from './timingsheet-edit.component';

describe('TimingsheetEditComponent', () => {
  let component: TimingsheetEditComponent;
  let fixture: ComponentFixture<TimingsheetEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingsheetEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingsheetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
