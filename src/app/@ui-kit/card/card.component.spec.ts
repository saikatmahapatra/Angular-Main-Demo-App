import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent, CardFooterDirective, CardHeaderDirective } from './card.component';

@Component({
  standalone: true,
  imports: [CardComponent, CardHeaderDirective, CardFooterDirective],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <app-card>
      <div card-header>Projected Header</div>
      <div>Projected Body</div>
      <div card-footer>Projected Footer</div>
    </app-card>
  `
})
class TestHostComponent { }

describe('CardComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render projected header, body, and footer content', () => {
    const text = fixture.nativeElement.textContent;

    expect(text).toContain('Projected Header');
    expect(text).toContain('Projected Body');
    expect(text).toContain('Projected Footer');
  });
});