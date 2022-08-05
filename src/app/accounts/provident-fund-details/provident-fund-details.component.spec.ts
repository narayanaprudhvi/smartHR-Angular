import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidentFundDetailsComponent } from './provident-fund-details.component';

describe('ProvidentFundDetailsComponent', () => {
  let component: ProvidentFundDetailsComponent;
  let fixture: ComponentFixture<ProvidentFundDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidentFundDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidentFundDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
