import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, contentChild, Directive, input, TemplateRef } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';

@Directive({
  selector: '[card-body]',
  standalone: true
})
export class ToolbarBodyDirective { }
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, ToolbarModule],
  template: `
    <div class="card" [ngClass]="styleClass()" [ngStyle]="style()" style="padding: 0.5rem">
      <div class="card-body" [ngClass]="inBody() ? 'px-0 py-0' : ''">
        <div class="d-flex align-items-center w-100 gap-3">
          <div class="toolbar-start d-flex align-items-center">
            @if (startTpl()) {
              <ng-container *ngTemplateOutlet="startTpl()!"></ng-container>
            }
          </div>

          <div class="toolbar-middle flex-grow-1 d-flex justify-content-center align-items-center">
            @if (middleTpl()) {
              <ng-container *ngTemplateOutlet="middleTpl()!"></ng-container>
            }
          </div>

          <div class="toolbar-end d-flex justify-content-end align-items-center ms-auto">
            @if (endTpl()) {
              <ng-container *ngTemplateOutlet="endTpl()!"></ng-container>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class ToolbarComponent {
  protected readonly startTpl = contentChild<TemplateRef<unknown>>('start');
  protected readonly middleTpl = contentChild<TemplateRef<unknown>>('middle');
  protected readonly endTpl = contentChild<TemplateRef<unknown>>('end');

  lib = input<'bootstrap' | 'primeng' | 'material'>('bootstrap');
  styleClass = input<string>('');
  inBody = input<boolean>(true);
  style = input<Record<string, string>>({});
}
