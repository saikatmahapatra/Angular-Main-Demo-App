import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDemoLayoutComponent } from './app-demo-layout.component';

describe('AppDemoLayoutComponent', () => {
  let component: AppDemoLayoutComponent;
  let fixture: ComponentFixture<AppDemoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppDemoLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDemoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
