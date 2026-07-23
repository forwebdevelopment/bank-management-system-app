import { Component } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
@Component({
  selector: 'app-role-detials',
  imports: [MatModule ],
  templateUrl: './role-detials.html',
  styleUrl: './role-detials.scss',
})
export class RoleDetials {


   
  // Chart.js Core Dataset Settings
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Granted', 'Restricted', 'Not Applicable'],
    datasets: [
      {
        data:[109, 3, 2], // Exact data from mockup
        backgroundColor: [
          '#0061ff', // Banking Blue (Granted)
          '#ef4444', // Red (Restricted)
          '#cbd5e1'  // Slate Grey (N/A)
        ],
        borderWidth: 0, // Borderless crisp look
        hoverBackgroundColor: ['#0052d4', '#dc2626', '#b91c1c'],
        weight: 1
      }
    ]
  };

  // Chart.js Proportional Structural Layout Controls
  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '82%', // Slim hollow core ring thickness matching mockup
    plugins: {
      legend: {
        display: false // Suppress Chart.js default legend block to preserve custom layout
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#0f172a',
        titleFont: { size: 12, weight: 'bold' },
        bodyFont: { size: 12 },
        padding: 8,
        cornerRadius: 4
      }
    }
  };

}
