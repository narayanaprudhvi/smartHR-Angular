import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsemailsComponent } from './settingsemails.component';

describe('SettingsemailsComponent', () => {
  let component: SettingsemailsComponent;
  let fixture: ComponentFixture<SettingsemailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsemailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsemailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
