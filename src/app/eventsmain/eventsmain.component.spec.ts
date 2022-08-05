import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsmainComponent } from './eventsmain.component';

describe('EventsmainComponent', () => {
  let component: EventsmainComponent;
  let fixture: ComponentFixture<EventsmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
