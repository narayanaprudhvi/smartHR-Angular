import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsmainComponent } from './settingsmain.component';

describe('SettingsmainComponent', () => {
  let component: SettingsmainComponent;
  let fixture: ComponentFixture<SettingsmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
