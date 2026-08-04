import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-login-distribution-chart',
  imports: [MatModule],
  templateUrl: './login-distribution-chart.html',
  styleUrl: './login-distribution-chart.scss',
})
export class LoginDistributionChart {
  // Use static: true to ensure the canvas is available before the first tick
  @ViewChild('doughnutChart', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  
  public chart: any;

  // Custom data array to generate the HTML legend dynamically
  public legendData = [
    { label: 'Super Admin', percent: '8.2%', count: '202', color: '#3b82f6' },   // Blue
    { label: 'Branch Manager', percent: '24.6%', count: '605', color: '#f59e0b' }, // Yellow/Orange
    { label: 'Bank Staff', percent: '41.5%', count: '1,020', color: '#22c55e' },   // Green
    { label: 'Customer', percent: '25.7%', count: '631', color: '#ef4444' },     // Red
    { label: 'Other', percent: '0.0%', count: '0', color: '#a855f7' }            // Purple (visual match to image chart)
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Timeout ensures CSS layout is fully rendered before Chart.js calculates dimensions
    setTimeout(() => {
      this.createChart();
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  createChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Super Admin', 'Branch Manager', 'Bank Staff', 'Customer', 'Other'],
        datasets: [{
          data: [202, 605, 1020, 631, 100], // Mock distribution matching the image
          backgroundColor: [
            '#3b82f6', // Blue
            '#facc15', // Yellow
            '#22c55e', // Green
            '#ef4444', // Red
            '#a855f7'  // Purple
          ],
          borderWidth: 0, // Removes the white border between segments for a cleaner look
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%', // Controls the thickness of the doughnut ring
        plugins: {
          legend: {
            display: false // Hide default Chart.js legend, we are using a custom HTML one
          },
          tooltip: {
            backgroundColor: '#111827',
            padding: 10,
            callbacks: {
              label: (context:any) => ` ${context.label}: ${context.parsed}`
            }
          }
        }
      }
    });
  }
}
