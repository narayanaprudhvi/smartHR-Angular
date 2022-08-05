import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingspasswordComponent } from './settingspassword.component';

describe('SettingspasswordComponent', () => {
  let component: SettingspasswordComponent;
  let fixture: ComponentFixture<SettingspasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingspasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingspasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
