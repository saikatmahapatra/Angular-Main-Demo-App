import { CommonModule } from '@angular/common';
import { Component, contentChild, Directive, input, model, ChangeDetectionStrategy } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

export type AppModalPosition = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright';

@Directive({
  selector: '[modal-header]',
  standalone: true
})
export class ModalHeaderDirective { }

@Directive({
  selector: '[modal-footer]',
  standalone: true
})
export class ModalFooterDirective { }

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, DialogModule],
  changeDetection: ChangeDetectionStrategy.Eager,
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
        <ng-content select="[modal-header]"></ng-content>
        } @else {
        <div class="h5">{{ header() }}</div>
        }
      </ng-template>

      <div class="app-modal-body">
        <ng-content></ng-content>
      </div>

      <ng-template pTemplate="footer">
        @if (footerContent()) {
        <ng-content select="[modal-footer]"></ng-content>
        }
      </ng-template>
    </p-dialog>
  `
})
export class ModalComponent {
  protected readonly headerContent = contentChild(ModalHeaderDirective);
  protected readonly footerContent = contentChild(ModalFooterDirective);

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
  position = input<AppModalPosition>('center');
  styleClass = input<string>('');
  style = input<Record<string, string>>({ width: '40rem' });
  contentStyle = input<Record<string, string>>({});
  breakpoints = input<Record<string, string>>({ '960px': '75vw', '640px': '90vw' });
  appendTo = input<any>('body');

  resolvedShowHeader(): boolean {
    return this.showHeader() && (!!this.header() || !!this.headerContent());
  }
}