import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Chart } from 'chart.js';
import { MetricCard } from '../../../../models/account_directory';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-account-dire-summary-card',
  imports: [MatModule],
  templateUrl: './account-dire-summary-card.html',
  styleUrl: './account-dire-summary-card.scss',
})
export class AccountDireSummaryCard {
   @ViewChildren('miniChart') chartCanvases!: QueryList<ElementRef<HTMLCanvasElement>>;

  metrics: MetricCard[] = [
    { title: 'Total Accounts', count: '48,625', percentage: '12.41%', isPositive: true, color: '#3b82f6', chartData: [40, 42, 41, 44, 45, 48] },
    { title: 'Savings Accounts', count: '32,154', percentage: '8.32%', isPositive: true, color: '#10b981', chartData: [28, 29, 30, 29, 31, 32] },
    { title: 'Current Accounts', count: '9,842', percentage: '15.67%', isPositive: true, color: '#8b5cf6', chartData: [7, 8, 7.5, 9, 8.8, 9.8] },
    { title: 'Fixed Deposits', count: '4,256', percentage: '10.21%', isPositive: true, color: '#f59e0b', chartData: [3.5, 3.8, 3.9, 4.0, 4.1, 4.2] },
    { title: 'Recurring Deposits', count: '2,185', percentage: '7.91%', isPositive: true, color: '#06b6d4', chartData: [1.8, 1.9, 1.95, 2.0, 2.1, 2.18] },
    { title: 'Total Bank Balance', count: '₹ 8,945 Cr', percentage: '14.37%', isPositive: true, color: '#ec4899', chartData: [7200, 7500, 7900, 8100, 8500, 8945] }
  ];

  ngAfterViewInit(): void {
    this.chartCanvases.forEach((canvasRef:any, index:any) => {
      this.createSparkline(canvasRef.nativeElement, this.metrics[index]);
    });
  }

  private createSparkline(canvas: HTMLCanvasElement, metric: MetricCard): void {
    new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
          data: metric.chartData,
          borderColor: metric.color,
          borderWidth: 1.5,
          pointRadius: 0,
          pointHoverRadius: 0,
          fill: false,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        },
        scales: {
          x: { display: false },
          y: { display: false }
        }
      }
    });
  }
}
