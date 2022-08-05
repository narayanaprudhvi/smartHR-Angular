import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsthemeComponent } from './settingstheme.component';

describe('SettingsthemeComponent', () => {
  let component: SettingsthemeComponent;
  let fixture: ComponentFixture<SettingsthemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsthemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
