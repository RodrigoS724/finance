import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardChartComponent } from './dashboard-chart.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DashboardChartComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  today = new Date().toLocaleDateString();
  chartData$ = of({
    labels: ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'],
    datasets: [{ data: [0,0,0,0,0,0,0,0,1,5,10,11,0,0,9,7,6], label: 'Ventas' }]
  });
}
