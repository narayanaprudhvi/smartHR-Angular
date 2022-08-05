import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsleaveComponent } from './settingsleave.component';

describe('SettingsleaveComponent', () => {
  let component: SettingsleaveComponent;
  let fixture: ComponentFixture<SettingsleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
