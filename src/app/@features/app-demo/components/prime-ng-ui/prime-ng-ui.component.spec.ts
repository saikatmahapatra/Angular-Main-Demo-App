import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNgUiComponent } from './prime-ng-ui.component';

describe('PrimeNgUiComponent', () => {
  let component: PrimeNgUiComponent;
  let fixture: ComponentFixture<PrimeNgUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeNgUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeNgUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
