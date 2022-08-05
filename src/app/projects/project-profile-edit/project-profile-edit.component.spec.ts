import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProfileEditComponent } from './project-profile-edit.component';

describe('ProjectProfileEditComponent', () => {
  let component: ProjectProfileEditComponent;
  let fixture: ComponentFixture<ProjectProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectProfileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
