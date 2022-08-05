import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsrolesComponent } from './settingsroles.component';

describe('SettingsrolesComponent', () => {
  let component: SettingsrolesComponent;
  let fixture: ComponentFixture<SettingsrolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsrolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
