import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitComponent } from './ui-kit.component';

describe('UiKitComponent', () => {
  let component: UiKitComponent;
  let fixture: ComponentFixture<UiKitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiKitComponent]
    });
    fixture = TestBed.createComponent(UiKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
