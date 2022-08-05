import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxesDetailsComponent } from './taxes-details.component';

describe('TaxesDetailsComponent', () => {
  let component: TaxesDetailsComponent;
  let fixture: ComponentFixture<TaxesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
