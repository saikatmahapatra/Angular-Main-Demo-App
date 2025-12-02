import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLandingPageComponent } from './dashboard-landing-page.component';

describe('DashboardLandingPageComponent', () => {
  let component: DashboardLandingPageComponent;
  let fixture: ComponentFixture<DashboardLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardLandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLandingPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
