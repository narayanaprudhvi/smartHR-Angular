import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsinvoiceComponent } from './settingsinvoice.component';

describe('SettingsinvoiceComponent', () => {
  let component: SettingsinvoiceComponent;
  let fixture: ComponentFixture<SettingsinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
