import { CommonModule } from '@angular/common';
import { Component, contentChild, Directive, input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Directive({
  selector: '[card-header]',
  standalone: true
})
export class CardHeaderDirective { }

@Directive({
  selector: '[card-body]',
  standalone: true
})
export class CardBodyDirective { }

@Directive({
  selector: '[card-footer]',
  standalone: true
})
export class CardFooterDirective { }

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CardModule],
  template: `
    <p-card [style]="style()" [styleClass]="styleClass()" [subheader]="subheader()">
      <ng-template pTemplate="header">
        @if (headerContent()) {
        <ng-content select="[card-header]"></ng-content>
        } @else if (header() !== '') {
        <div class="p-card-title m-0 px-3 pt-3">{{ header() }}</div>
        }
      </ng-template>

      @if (title() !== '') {
      <ng-template pTemplate="title">{{ title() }}</ng-template>
      }

      <ng-content select="[card-body]"></ng-content>
      
      <ng-template pTemplate="footer">
        @if (footerContent()) {
        <ng-content select="[card-footer]"></ng-content>
        }
      </ng-template>
    </p-card>
  `
})
export class CardComponent {
  protected readonly headerContent = contentChild(CardHeaderDirective);
  protected readonly bodyContent = contentChild(CardBodyDirective);
  protected readonly footerContent = contentChild(CardFooterDirective);

  lib = input<'bootstrap' | 'primeng' | 'material'>('primeng');
  header = input<string>('');
  title = input<string>('');
  subheader = input<string>('');
  styleClass = input<string>('');
  style = input<Record<string, string>>({});
}