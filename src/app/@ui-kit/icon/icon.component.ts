import { Component, OnInit, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. Import CommonModule
import { TooltipModule } from 'primeng/tooltip';
import { APP_ICONS } from '../../@utils/const/common.constant';
@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    @if (lib() !== 'mat') {
      <i [class]="getIconClass()" class="app-inline-icon" [ngClass]="styleClass()" aria-hidden="true" [pTooltip]="tooltip()" [tooltipPosition]="tooltipPosition()"></i>
    }
    @if (lib() === 'mat') {
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
      return APP_ICONS[this.name()]?.mat ? APP_ICONS[this.name()]?.mat : 'info';
    }
    if (this.lib() == 'prime') {
      return APP_ICONS[this.name()]?.prime ? APP_ICONS[this.name()]?.prime : 'pi pi-question-circle';
    }
    if (this.lib() == 'bs') {
      return APP_ICONS[this.name()]?.bs ? APP_ICONS[this.name()]?.bs : 'bi bi-question-circle';
    }
  }

}
