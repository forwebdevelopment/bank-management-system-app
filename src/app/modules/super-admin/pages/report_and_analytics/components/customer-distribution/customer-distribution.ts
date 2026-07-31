import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MatModule } from '../../../../../../shared/material.module';

Chart.register(...registerables);

@Component({
  selector: 'app-customer-distribution',
  imports: [MatModule],
  templateUrl: './customer-distribution.html',
  styleUrl: './customer-distribution.scss',
})
export class CustomerDistribution {
   @ViewChild('customerCanvas') customerCanvas!: ElementRef<HTMLCanvasElement>;
  chart: any;

  // Exact dataset extracted from the primary summary layout mapping
  customerData = [
    { label: 'Individual', count: 72458, percentage: '57.8%', color: '#3b82f6' },
    { label: 'Business', count: 28745, percentage: '23.0%', color: '#10b981' },
    { label: 'Corporate', count: 16852, percentage: '13.4%', color: '#8b5cf6' },
    { label: 'Premium', count: 7375, percentage: '5.8%', color: '#f59e0b' }
  ];

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.chart = new Chart(this.customerCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.customerData.map(item => item.label),
        datasets: [{
          data: this.customerData.map(item => item.count),
          backgroundColor: this.customerData.map(item => item.color),
          borderWidth: 2,
          borderColor: '#ffffff',
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            padding: 10,
          
            callbacks: {
              label: (context) => {
                const label = context.label || '';
                const val = context.raw as number;
                return ` ${label}: ${val.toLocaleString()}`;
              }
            }
          }
        }
      }
    });
  }
}
