import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicecallComponent } from './voicecall.component';

describe('VoicecallComponent', () => {
  let component: VoicecallComponent;
  let fixture: ComponentFixture<VoicecallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoicecallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
