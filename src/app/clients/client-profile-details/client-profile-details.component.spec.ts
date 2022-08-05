import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileDetailsComponent } from './client-profile-details.component';

describe('ClientProfileDetailsComponent', () => {
  let component: ClientProfileDetailsComponent;
  let fixture: ComponentFixture<ClientProfileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientProfileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
