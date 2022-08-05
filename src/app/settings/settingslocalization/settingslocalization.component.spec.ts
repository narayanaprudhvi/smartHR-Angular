import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingslocalizationComponent } from './settingslocalization.component';

describe('SettingslocalizationComponent', () => {
  let component: SettingslocalizationComponent;
  let fixture: ComponentFixture<SettingslocalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingslocalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingslocalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
