import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageviewComponent } from './messageview.component';

describe('MessageviewComponent', () => {
  let component: MessageviewComponent;
  let fixture: ComponentFixture<MessageviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
