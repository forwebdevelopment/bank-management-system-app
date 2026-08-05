import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';
import { MatModule } from '../../../../../../shared/material.module';
import { DistributionLegendItem } from '../../../../models/login';

@Component({
  selector: 'app-login-distribution-chart',
  imports: [MatModule],
  templateUrl: './login-distribution-chart.html',
  styleUrl: './login-distribution-chart.scss',
})
export class LoginDistributionChart {
 @ViewChild('donutCanvas') private donutCanvas!: ElementRef<HTMLCanvasElement>;
  
  private chartInstance: Chart | null = null;
  isDropdownOpen = false;
  selectedTimeframe = 'Today';
  timeframeOptions = ['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days'];

  // High-density data model to run through the template tracking loops
  distributionData: DistributionLegendItem[] = [
    { role: 'Super Admin', percentage: '8.2%', count: '202', colorClass: 'color-super-admin' },
    { role: 'Branch Manager', percentage: '24.6%', count: '605', colorClass: 'color-manager' },
    { role: 'Bank Staff', percentage: '41.5%', count: '1,020', colorClass: 'color-staff' },
    { role: 'Customer', percentage: '25.7%', count: '631', colorClass: 'color-customer' }
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.renderDonutChart();
  }

  ngOnDestroy(): void {
    // Avoid memory leaks by cleaning up chart instances during teardown
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  }

  private renderDonutChart(): void {
   const config: ChartConfiguration<'doughnut'> = {
    type: 'doughnut',
    data: {
      labels: this.distributionData.map(item => item.role),
      datasets: [{
        // FIX: Add the raw data numbers here to populate the chart segments
        data:[10,50,100,70], 
        backgroundColor: [
          '#2563eb', // Super Admin Blue
          '#eab308', // Branch Manager Yellow
          '#22c55e', // Bank Staff Green
          '#f43f5e'  // Customer Red
        ],
        borderWidth: 0,
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '78%', 
      plugins: {
        legend: {
          display: false 
        },
        tooltip: {
          enabled: true
        }
      }
    }
  };

  this.chartInstance = new Chart(this.donutCanvas.nativeElement, config);
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectTimeframe(option: string): void {
    this.selectedTimeframe = option;
    this.isDropdownOpen = false;
    
    // In production, trigger an API update or call this.chartInstance.update() with new metrics data here
    console.log(`Timeframe changed to: ${option}`);
  }
}
