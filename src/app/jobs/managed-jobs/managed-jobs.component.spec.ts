import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedJobsComponent } from './managed-jobs.component';

describe('ManagedJobsComponent', () => {
  let component: ManagedJobsComponent;
  let fixture: ComponentFixture<ManagedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
