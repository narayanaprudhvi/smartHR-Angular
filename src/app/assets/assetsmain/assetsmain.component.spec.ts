import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsmainComponent } from './assetsmain.component';

describe('AssetsmainComponent', () => {
  let component: AssetsmainComponent;
  let fixture: ComponentFixture<AssetsmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
