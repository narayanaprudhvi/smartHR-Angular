import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatesComponent } from './estimates.component';

describe('EstimatesComponent', () => {
  let component: EstimatesComponent;
  let fixture: ComponentFixture<EstimatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
