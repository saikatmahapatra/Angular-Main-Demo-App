import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CommonModule, ChartModule],
  template: `
    <div class="flex flex-column gap-2">
      @if (title() !== '') {
      <h5 class="m-0">{{ title() }}</h5>
      }
      <p-chart [type]="type()" [data]="data()" [options]="options()" [height]="height()"></p-chart>
    </div>
  `,
})
export class ChartsComponent {
  title = input<string>('');
  type = input<'bar' | 'line' | 'pie' | 'doughnut' | 'radar' | 'polarArea'>('bar');
  data = input<any>({ labels: [], datasets: [] });
  options = input<any>({ responsive: true, maintainAspectRatio: false });
  height = input<string>('280px');

}
