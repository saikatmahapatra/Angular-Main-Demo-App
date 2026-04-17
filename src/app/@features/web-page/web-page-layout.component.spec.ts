import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPageLayoutComponent } from './web-page-layout.component';

describe('WebPageLayoutComponent', () => {
  let component: WebPageLayoutComponent;
  let fixture: ComponentFixture<WebPageLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebPageLayoutComponent]
    });
    fixture = TestBed.createComponent(WebPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
