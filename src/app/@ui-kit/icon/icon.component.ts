import { Component, OnInit, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. Import CommonModule
import { TooltipModule } from 'primeng/tooltip';

export const appIconLib: any = {
  'home': { mat: 'home', prime: 'pi pi-home', bs: 'bi bi-house' },
  'dashboard': { mat: 'speed', prime: 'pi pi-home', bs: 'bi bi-speedometer' },
  'user': { mat: 'account_circle', prime: 'pi pi-user', bs: 'bi bi-person-circle' },
  'users': { mat: 'people', prime: 'pi pi-users', bs: 'bi bi-people' },
  'add': { mat: 'add', prime: 'pi pi-plus', bs: 'bi bi-plus-lg' },
  'edit': { mat: 'edit', prime: 'pi pi-pencil', bs: 'bi bi-pencil' },
  'userEdit': { mat: 'edit', prime: 'pi pi-user-edit', bs: 'bi bi-person-gear' },
  'delete': { mat: 'delete', prime: 'pi pi-trash', bs: 'bi bi-trash' },
  'info': { mat: 'info', prime: 'pi pi-info-circle', bs: 'bi bi-info-circle' },
  'success': { mat: 'check_circle', prime: 'pi pi-check-circle', bs: 'bi bi-check-circle' },
  'error': { mat: 'error_outline', prime: 'pi pi-exclamation-circle', bs: 'bi bi-exclamation-circle' },
  'warning': { mat: 'warning_amber', prime: 'pi pi-exclamation-triangle', bs: 'bi bi-exclamation-triangle' },
  'admin': { mat: 'admin_panel_settings', prime: 'pi pi-lock', bs: 'bi bi-person-lock' },
  'selfService': { mat: 'fingerprint', prime: 'pi pi-folder', bs: 'bi bi-fingerprint' },
  'chevronLeft': { mat: 'chevron_left', prime: 'pi pi-angle-left', bs: 'bi bi-chevron-left' },
  'angleUp': { mat: 'expand_less', prime: 'pi pi-angle-up', bs: 'bi bi-chevron-up' },
  'angleDown': { mat: 'expand_more', prime: 'pi pi-angle-up', bs: 'bi bi-chevron-up' },
  'chevronRight': { mat: 'chevron_right', prime: 'pi pi-angle-right', bs: 'bi bi-chevron-right' },
  'arrowRight': { mat: 'arrow_right_alt', prime: 'pi pi-arrow-right', bs: 'bi bi-arrow-right-short' },
  'currency': { mat: 'paid', prime: 'pi pi-dollar', bs: 'bi bi-currency-dollar' },
  'clock': { mat: 'watch_later', prime: 'pi pi-clock', bs: 'bi bi-clock' },
  'globe': { mat: 'language', prime: 'pi pi-globe', bs: 'bi bi-globe' },
  'map': { mat: 'place', prime: 'pi pi-map-marker', bs: 'bi bi-geo-alt' },
  'phone': { mat: 'phone', prime: 'pi pi-phone', bs: 'bi bi-telephone' },
  'email': { mat: 'email', prime: 'pi pi-envelope', bs: 'bi bi-envelope' },
  'sun': { mat: 'light_mode', prime: 'pi pi-sun', bs: 'bi bi-brightness-high' },
  'moon': { mat: 'dark_mode', prime: 'pi pi-moon', bs: 'bi bi-moon-stars' },
  'circle': { mat: 'trip_origin', prime: 'pi pi-circle-fill', bs: 'bi bi-circle-fill' },
  'signout': { mat: 'logout', prime: 'pi pi-sign-out', bs: 'bi bi-box-arrow-right' },
  'notification': { mat: 'notifications', prime: 'pi pi-bell', bs: 'bi bi-app-indicator' },
  'linechart': { mat: 'analytics', prime: 'pi pi-chart-line', bs: 'bi bi-bar-chart-line' },
  'qualification': { mat: 'school', prime: 'pi pi-book', bs: 'bi bi-mortarboard' },
  'job': { mat: 'work_history', prime: 'pi pi-briefcase', bs: 'bi bi-briefcase' },
  'heart': { mat: 'medical_services', prime: 'pi pi-heart', bs: 'bi bi-heart' },
  'actionRequired': { mat: 'help_outline', prime: 'pi pi-question-circle', bs: 'bi bi-question-circle' },
  'check': { mat: 'check_circle', prime: 'pi pi-check-circle', bs: 'bi bi-check-circle' },
  'cross': { mat: 'cancel', prime: 'pi pi-times-circle', bs: 'bi bi-x-circle' },
  'close': { mat: 'close', prime: 'pi pi-times', bs: 'bi bi-x' },
  'question': { mat: 'help_outline', prime: 'pi pi-question-circle', bs: 'bi bi-question-circle' },
  'send': { mat: 'send', prime: 'pi pi-send', bs: 'bi bi-send-check' },
  'calendar': { mat: 'calendar_month', prime: 'pi pi-calendar', bs: 'bi bi-calendar-check' },
  'tasks': { mat: 'task', prime: 'pi pi-th-large', bs: 'bi bi-columns-gap' },
  'search': { mat: 'search', prime: 'pi pi-search', bs: 'bi bi-search' },
  'settings': { mat: 'settings', prime: 'pi pi-cog', bs: 'bi bi-gear' },
  'upload': { mat: 'file_upload', prime: 'pi pi-upload', bs: 'bi bi-upload' },
  'download': { mat: 'file_download', prime: 'pi pi-download', bs: 'bi bi-download' },
  'exportxls': { mat: 'file_download', prime: 'pi pi-file-excel', bs: 'bi bi-file-earmark-excel' },
  'exportpdf': { mat: 'picture_as_pdf', prime: 'pi pi-file-pdf', bs: 'bi bi-filetype-pdf' },
  'menu': { mat: 'menu', prime: 'pi pi-bars', bs: 'bi bi-list' },
  'comment': { mat: 'comment', prime: 'pi pi-comment', bs: 'bi bi-comment' },
  'verified': { mat: 'verified', prime: 'pi pi-verified', bs: 'bi bi-verified' },
  'projects': { mat: 'list_alt', prime: 'pi pi-info', bs: 'bi bi-info' },
  'calendarclock': { mat: 'calendar_clock', prime: 'pi pi-info', bs: 'bi bi-info' },
  'pendingaction': { mat: 'pending_actions', prime: 'pi pi-info', bs: 'bi bi-info' },
  'username': { mat: 'person', prime: 'pi pi-info', bs: 'bi bi-info' },
  'password': { mat: 'password', prime: 'pi pi-info', bs: 'bi bi-info' },
  'language': { mat: 'language', prime: 'pi pi-globe', bs: 'bi bi-globe' },
  'note': { mat: 'note_stack', prime: 'pi pi-note', bs: 'bi bi-note' },
  'report': { mat: 'report', prime: 'pi pi-report', bs: 'bi bi-report' },
  'leave': { mat: 'beach_access', prime: 'pi pi-travel', bs: 'bi bi-travel' },
  'timesheet': { mat: 'more_time', prime: 'pi pi-travel', bs: 'bi bi-travel' },
  'datacheck': { mat: 'data_check', prime: 'pi pi-travel', bs: 'bi bi-travel' },
  'history': { mat: 'history', prime: 'pi pi-travel', bs: 'bi bi-travel' },
  'history2': { mat: 'history_2', prime: 'pi pi-travel', bs: 'bi bi-travel' },
  'diversity': { mat: 'diversity_1', prime: 'pi pi-travel', bs: 'bi bi-travel' },
};

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    @if (lib() !== 'material') {
      <i [class]="getIconClass()" class="app-inline-icon" [ngClass]="styleClass()" aria-hidden="true" [pTooltip]="tooltip()" [tooltipPosition]="tooltipPosition()"></i>
    }
    @if (lib() === 'material') {
      <i [ngClass]="styleClass()" class="app-inline-icon material-symbols-outlined" aria-hidden="true"
      [innerHTML]="getIconClass()" [pTooltip]="tooltip()" [tooltipPosition]="tooltipPosition()"></i>
    }
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
      line-height: 1;
    }

    .app-inline-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      line-height: 1;
      font-size: 1.5em; /* follow surrounding text size */
    }
  `]
})
export class IconComponent implements OnInit {
  lib = input<string>('mat');
  name = input<string>('');
  width = input<number>(16);
  height = input<number>(16);
  fill = input<string>('currentColor');
  styleClass = input<any>('');
  svg = input<boolean>(false);
  tooltip = input<string>('');
  tooltipPosition = input<'top' | 'bottom' | 'left' | 'right'>('right');

  constructor() {
  }

  ngOnInit(): void {
  }

  getIconClass() {
    if (this.lib() == 'mat') {
      return appIconLib[this.name()]?.mat ? appIconLib[this.name()]?.mat : 'info';
    }
    if (this.lib() == 'prime') {
      return appIconLib[this.name()]?.prime ? appIconLib[this.name()]?.prime : 'pi pi-question-circle';
    }
    if (this.lib() == 'bs') {
      return appIconLib[this.name()]?.bs ? appIconLib[this.name()]?.bs : 'bi bi-question-circle';
    }
  }

}
