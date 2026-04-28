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
    @if(lib() === 'primeng') {
      <p-card [style]="style()" [class]="styleClass()" [subheader]="subheader()">
        <ng-template pTemplate="header">
          @if (headerContent()) {
            <ng-container *ngTemplateOutlet="headerSlot"></ng-container>
          } @else if (header() !== '') {
            <div class="p-card-title m-0 px-3 pt-3">{{ header() }}</div>
          }
        </ng-template>

        @if (title() !== '') {
          <ng-template pTemplate="title">{{ title() }}</ng-template>
        }

        <ng-container *ngTemplateOutlet="bodySlot"></ng-container>
        
        <ng-template pTemplate="footer">
          @if (footerContent()) {
            <ng-container *ngTemplateOutlet="footerSlot"></ng-container>
          }
        </ng-template>
      </p-card>
    } @else {
      <div class="card" [ngClass]="styleClass()" [ngStyle]="style()">        
        @if (headerContent()) {
          <div class="card-header">
            <ng-container *ngTemplateOutlet="headerSlot"></ng-container>
          </div>
        } @else if (header() !== '') {
          <div class="card-header">
            <div class="h5">{{ header() }}</div>
          </div>
        }

        <div class="card-body">
          <ng-container *ngTemplateOutlet="bodySlot"></ng-container>
        </div>
        
        @if (footerContent()) {
          <div class="card-footer">
            <ng-container *ngTemplateOutlet="footerSlot"></ng-container>
          </div>
        }
      </div>
    }

    <!-- Projection slot templates -->
    <ng-template #headerSlot>
      <ng-content select="[card-header]"></ng-content>
    </ng-template>

    <ng-template #bodySlot>
      <ng-content select="[card-body]"></ng-content>
    </ng-template>

    <ng-template #footerSlot>
      <ng-content select="[card-footer]"></ng-content>
    </ng-template>
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