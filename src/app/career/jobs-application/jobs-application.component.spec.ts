import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsApplicationComponent } from './jobs-application.component';

describe('JobsApplicationComponent', () => {
  let component: JobsApplicationComponent;
  let fixture: ComponentFixture<JobsApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
