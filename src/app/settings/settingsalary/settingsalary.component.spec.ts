import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsalaryComponent } from './settingsalary.component';

describe('SettingsalaryComponent', () => {
  let component: SettingsalaryComponent;
  let fixture: ComponentFixture<SettingsalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
