import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengThemeConfigComponent } from './primeng-theme-config.component';

describe('PrimengThemeConfigComponent', () => {
  let component: PrimengThemeConfigComponent;
  let fixture: ComponentFixture<PrimengThemeConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimengThemeConfigComponent]
    });
    fixture = TestBed.createComponent(PrimengThemeConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
