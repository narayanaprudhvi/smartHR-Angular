import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProfileDetailsComponent } from './project-profile-details.component';

describe('ProjectProfileDetailsComponent', () => {
  let component: ProjectProfileDetailsComponent;
  let fixture: ComponentFixture<ProjectProfileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectProfileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
