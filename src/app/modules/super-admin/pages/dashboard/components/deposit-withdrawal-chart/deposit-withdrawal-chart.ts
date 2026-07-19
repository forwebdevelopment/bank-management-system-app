import { Component ,  ChangeDetectionStrategy,} from '@angular/core';
import {
  ChartConfiguration,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-deposit-withdrawal-chart',
  imports: [MatModule],
  templateUrl: './deposit-withdrawal-chart.html',
  styleUrl: './deposit-withdrawal-chart.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepositWithdrawalChart {

    selectedPeriod = 'year';

  readonly lineChartData: ChartData<'line'> = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Deposits',
        data: [
          110,
          210,
          225,
          145,
          170,
          200,
          180,
          205,
          245,
          290,
          250,
          235,
        ],
        borderColor: '#176df4',
        backgroundColor: 'rgba(23, 109, 244, 0.08)',
        pointBackgroundColor: '#ffffff',
        pointBorderColor: '#176df4',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.32,
        fill: false,
      },
      {
        label: 'Withdrawals',
        data: [
          75,
          130,
          150,
          100,
          135,
          155,
          130,
          160,
          200,
          215,
          175,
          195,
        ],
        borderColor: '#f7436b',
        backgroundColor: 'rgba(247, 67, 107, 0.08)',
        pointBackgroundColor: '#ffffff',
        pointBorderColor: '#f7436b',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.32,
        fill: false,
      },
    ],
  };

  readonly lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#17233c',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        padding: 12,
        displayColors: true,
        callbacks: {
          label: (context) =>
            `${context.dataset.label}: ₹${context.parsed.y}M`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: '#718096',
          font: {
            size: 11,
          },
        },
      },
      y: {
        beginAtZero: true,
        suggestedMax: 300,
        grid: {
          color: '#edf1f6',
        },
        border: {
          display: false,
        },
        ticks: {
          stepSize: 50,
          color: '#718096',
          font: {
            size: 11,
          },
          callback: (value) => `${value}M`,
        },
      },
    },
  };

  onPeriodChange(period: string): void {
    this.selectedPeriod = period;

    // Later call the API:
    // this.dashboardService.getDepositWithdrawalData(period);
  }
}
