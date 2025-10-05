import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {
  companyName = 'Company Name';
  appName = '[Nombre de app]';
  today = this.formatDate(new Date());

  // Datos precargados (ejemplo: ventas por hora desde 0 hasta 16)
  hoursLabels = Array.from({length: 17}, (_, i) => `${i}`);

  // Ejemplo de datos (puedes cambiarlos)
  ventasHoy = [0,0,0,0,0,0,0,0,1,5,8,9,0,7,6,5,4];

  // Chart.js config
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        ticks: { color: '#cfcfcf' },
        grid: { color: 'rgba(255,255,255,0.03)' }
      },
      y: {
        ticks: { color: '#cfcfcf' },
        grid: { color: 'rgba(255,255,255,0.03)' },
        beginAtZero: true
      }
    }
  };

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: this.hoursLabels,
    datasets: [
      {
        data: this.ventasHoy,
        barThickness: 22,
        borderRadius: 4
      }
    ]
  };

  public barChartType: ChartType = 'bar';

  private formatDate(d: Date) {
    const mm = String(d.getDate()).padStart(2,'0');
    const month = String(d.getMonth() + 1).padStart(2,'0');
    const yyyy = d.getFullYear();
    return `${mm}/${month}/${yyyy}`;
  }
}
