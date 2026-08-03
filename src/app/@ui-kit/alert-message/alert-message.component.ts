import { CommonModule } from '@angular/common';
import { Component, effect, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';

export type AppAlertSeverity = 'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast';
export type AppAlertMode = 'inline' | 'toast';
export type AppAlertVariant = 'simple' | 'outlined' | 'text';
export type AppAlertSize = 'small' | 'large';
export type AppToastPosition = 'top-left' | 'top-center' | 'top-right' | 'center' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface AppAlertMessage {
  severity?: AppAlertSeverity;
  summary?: string;
  detail?: string;
  life?: number;
  closable?: boolean;
  key?: string;
}

@Component({
  selector: 'app-alert-message',
  standalone: true,
  imports: [CommonModule, MessageModule, ToastModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    @if (mode() === 'inline' && resolvedText()) {
    <p-message
      [severity]="severity()"
      [text]="resolvedText()"
      [closable]="closable()"
      [variant]="variant()"
      [size]="size()"
      [icon]="icon()"
      [escape]="escape()"
      [styleClass]="styleClass()">
    </p-message>
    }

    @if (mode() === 'toast' || renderToastHost() && resolvedText()) {
    <p-toast [key]="toastKey()" [position]="toastPosition()"></p-toast>
    }
  `
})
export class AlertMessageComponent {
  private readonly messageService = inject(MessageService);

  mode = input<AppAlertMode>('inline');
  severity = input<AppAlertSeverity>('info');
  summary = input<string>('');
  detail = input<string>('');
  closable = input<boolean>(false);
  variant = input<AppAlertVariant | undefined>(undefined);
  size = input<AppAlertSize | undefined>(undefined);
  icon = input<string>('');
  escape = input<boolean>(true);
  styleClass = input<string>('');
  autoShow = input<boolean>(false);
  renderToastHost = input<boolean>(false);
  toastKey = input<string>('appGlobalLayoutAlert');
  toastPosition = input<AppToastPosition>('top-right');

  constructor() {
    effect(() => {
      if (!this.autoShow() || this.mode() !== 'toast') {
        return;
      }

      const detail = this.detail();
      const summary = this.summary();
      if (!summary && !detail) {
        return;
      }
    });
  }

  resolvedText(): string {
    return this.summary() && this.detail() ? `${this.summary()} - ${this.detail()}` : this.summary() || this.detail();
  }

  clear(key?: string): void {
    this.messageService.clear(key ?? this.toastKey());
  }
}