import { CommonModule } from '@angular/common';
import { Component, contentChild, Directive, input, model } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

export type AppPopupPosition = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright';

@Directive({
  selector: '[popup-header]',
  standalone: true
})
export class PopupHeaderDirective { }

@Directive({
  selector: '[popup-footer]',
  standalone: true
})
export class PopupFooterDirective { }

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule, DialogModule],
  template: `
    <p-dialog
      [modal]="modal()"
      [draggable]="draggable()"
      [resizable]="resizable()"
      [closable]="closable()"
      [closeOnEscape]="closeOnEscape()"
      [dismissableMask]="dismissableMask()"
      [showHeader]="resolvedShowHeader()"
      [styleClass]="styleClass()"
      [contentStyle]="contentStyle()"
      [style]="style()"
      [position]="position()"
      [breakpoints]="breakpoints()"
      [appendTo]="appendTo()"
      [blockScroll]="blockScroll()"
      [visible]="visible()"
      (visibleChange)="visible.set($event)">
      <ng-template pTemplate="header">
        @if (headerContent()) {
        <ng-content select="[popup-header]"></ng-content>
        } @else {
        <div>{{ header() }}</div>
        }
      </ng-template>

      <div class="app-popup-body">
        <ng-content></ng-content>
      </div>

      <ng-template pTemplate="footer">
        @if (footerContent()) {
        <ng-content select="[popup-footer]"></ng-content>
        }
      </ng-template>
    </p-dialog>
  `
})
export class PopupComponent {
  protected readonly headerContent = contentChild(PopupHeaderDirective);
  protected readonly footerContent = contentChild(PopupFooterDirective);

  visible = model<boolean>(false);
  header = input<string>('');
  modal = input<boolean>(true);
  draggable = input<boolean>(false);
  resizable = input<boolean>(false);
  closable = input<boolean>(true);
  closeOnEscape = input<boolean>(true);
  dismissableMask = input<boolean>(true);
  showHeader = input<boolean>(true);
  blockScroll = input<boolean>(true);
  position = input<AppPopupPosition>('center');
  styleClass = input<string>('');
  style = input<Record<string, string>>({ width: '40rem' });
  contentStyle = input<Record<string, string>>({});
  breakpoints = input<Record<string, string>>({ '960px': '75vw', '640px': '90vw' });
  appendTo = input<any>('body');

  resolvedShowHeader(): boolean {
    return this.showHeader() && (!!this.header() || !!this.headerContent());
  }
}