import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingscompanyComponent } from './settingscompany.component';

describe('SettingscompanyComponent', () => {
  let component: SettingscompanyComponent;
  let fixture: ComponentFixture<SettingscompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingscompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingscompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
