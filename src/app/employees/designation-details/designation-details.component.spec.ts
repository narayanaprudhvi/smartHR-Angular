import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationDetailsComponent } from './designation-details.component';

describe('DesignationDetailsComponent', () => {
  let component: DesignationDetailsComponent;
  let fixture: ComponentFixture<DesignationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
