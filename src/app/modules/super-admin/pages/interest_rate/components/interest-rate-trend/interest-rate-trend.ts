import { Component, HostListener, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { MatModule } from '../../../../../../shared/material.module';
@Component({
  selector: 'app-interest-rate-trend',
  imports: [BaseChartDirective , MatModule ],
  templateUrl: './interest-rate-trend.html',
  styleUrl: './interest-rate-trend.scss',
})
export class InterestRateTrend {

   @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public lineChartType: ChartType = 'line';

  public lineChartData: ChartConfiguration['data'] = {
    labels: ['Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025', 'Nov 2025', 'Dec 2025', 'Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026', 'May 2026', 'Jun 2026'],
    datasets: [
      {
        data: [3.80, 3.90, 4.00, 4.00, 4.10, 4.25, 4.25, 4.30, 4.40, 4.40, 4.50, 4.50],
        label: 'Savings Account',
        borderColor: '#3fa752',
        backgroundColor: 'rgba(63, 167, 82, 0.03)',
        pointBackgroundColor: '#3fa752',
        pointBorderColor: '#fff',
        tension: 0.35,
        fill: true
      },
      {
        data: [2.50, 2.50, 2.60, 2.60, 2.65, 2.70, 2.70, 2.75, 2.75, 2.75, 2.75, 2.75],
        label: 'Current Account',
        borderColor: '#2e62e6',
        backgroundColor: 'transparent',
        pointBackgroundColor: '#2e62e6',
        pointBorderColor: '#fff',
        tension: 0.35
      },
      {
        data: [6.50, 6.75, 6.75, 6.90, 7.00, 7.00, 7.10, 7.15, 7.20, 7.25, 7.25, 7.25],
        label: 'Fixed Deposit',
        borderColor: '#8e44ad',
        backgroundColor: 'transparent',
        pointBackgroundColor: '#8e44ad',
        pointBorderColor: '#fff',
        tension: 0.35
      }
    ]
  };

  // CORE FIX: Configured for modern layout grid flexibility rules
  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Prevents locked ratios from clipping outer walls
    resizeDelay: 50, // Debounces math recalculations for better UI performance
    plugins: {
      legend: {
        position: 'top',
        labels: { boxWidth: 10, usePointStyle: true, pointStyle: 'circle' }
      }
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#627d98', font: { size: 10 } } },
      y: { min: 0, max: 12, ticks: { stepSize: 2, color: '#627d98', font: { size: 10 } }, grid: { color: '#f0f4f8' } }
    }
  };

  // Listen to outer container dimension updates to update canvas scale
  @HostListener('window:resize')
  onResize() {
    if (this.chart && this.chart.chart) {
      this.chart.chart.resize();
      this.chart.update();
    }
  }

  ngOnInit(): void {}
}
