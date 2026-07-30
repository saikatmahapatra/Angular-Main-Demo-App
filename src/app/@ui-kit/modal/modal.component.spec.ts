import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should keep dialog hidden by default', () => {
    expect(component.visible()).toBeFalse();
  });

  it('should show header when header text is provided', () => {
    fixture.componentRef.setInput('header', 'Edit User');
    fixture.detectChanges();

    expect(component.resolvedShowHeader()).toBeTrue();
  });

  it('should use responsive popup width defaults', () => {
    expect(component.style()).toEqual({ width: '40rem' });
    expect(component.breakpoints()).toEqual({ '960px': '75vw', '640px': '90vw' });
  });
});