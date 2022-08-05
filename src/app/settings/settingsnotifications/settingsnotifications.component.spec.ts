import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsnotificationsComponent } from './settingsnotifications.component';

describe('SettingsnotificationsComponent', () => {
  let component: SettingsnotificationsComponent;
  let fixture: ComponentFixture<SettingsnotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsnotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsnotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
