import { Component, HostListener, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { MatModule } from '../../../../../../shared/material.module';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
@Component({
  selector: 'app-current-interest-rate',
  imports: [ BaseChartDirective , MatModule],
  templateUrl: './current-interest-rate.html',
  styleUrl: './current-interest-rate.scss',
})
export class CurrentInterestRate {
@ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public barChartType: ChartType = 'bar';

  public barChartData: ChartConfiguration['data'] = {
    labels: ['Savings', 'Current', 'Fixed', 'Recur.', 'Personal', 'Home', 'Vehicle', 'Edu.'],
    datasets: [
      {
        data: [4.50, 2.75, 7.25, 6.00, 11.50, 8.75, 9.25, 8.50],
        label: 'Interest Rate (%)',
        backgroundColor: ['#3fa752', '#2e62e6', '#8e44ad', '#e67e22', '#627d98', '#1976d2', '#1abc9c', '#f39c12'],
        borderRadius: 4,
        borderSkipped: 'bottom'
      }
    ]
  };

  // CORE FIX: Configured for fluid grid structures
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    resizeDelay: 50,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#627d98', font: { size: 10 } } },
      y: { min: 0, max: 14, ticks: { stepSize: 2, color: '#627d98', font: { size: 10 } }, grid: { color: '#f0f4f8' } }
    }
  };

  @HostListener('window:resize')
  onResize() {
    if (this.chart && this.chart.chart) {
      this.chart.chart.resize();
      this.chart.update();
    }
  }

  ngOnInit(): void {}
}
