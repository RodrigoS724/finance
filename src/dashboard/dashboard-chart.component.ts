import { Component, Input, OnDestroy, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import type { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  selector: 'app-dashboard-chart',
  template: `
    <div class="chart-wrap">
      <canvas baseChart
              #chart
              [data]="chartData"
              [options]="chartOptions"
              [type]="chartType"
              aria-label="Ventas hoy"
              role="img"></canvas>
    </div>
  `,
  styles: [`
    .chart-wrap { width:100%; height:320px; }
    canvas { display:block; width:100% !important; height:100% !important; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardChartComponent implements OnDestroy {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private destroy$ = new Subject<void>();

  @Input() set data$(obs: any) {
    obs?.pipe?.(takeUntil(this.destroy$)).subscribe((payload: ChartData<'bar'>) => {
      this.chartData = { ...payload } as ChartData<'bar'>;
      setTimeout(() => this.chart?.update(), 0);
    });
  }

  chartData: ChartData<'bar'> = { labels: [], datasets: [] };
  chartType: ChartType = 'bar';
  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { display: false }, beginAtZero: true }
    }
  };

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    try { this.chart?.chart?.destroy(); } catch (e) { }
  }
}
