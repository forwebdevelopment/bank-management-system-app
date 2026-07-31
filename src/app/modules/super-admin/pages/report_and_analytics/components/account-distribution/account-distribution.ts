import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-account-distribution',
  imports: [MatModule],
  templateUrl: './account-distribution.html',
  styleUrl: './account-distribution.scss',
})
export class AccountDistribution {
    @ViewChild('donutCanvas') donutCanvas!: ElementRef<HTMLCanvasElement>;
  chart: any;

  // Exact metrics provided in the system summary
  accountData = [
    { label: 'Savings Account', count: 142589, percentage: '43.4%', color: '#3b82f6' },
    { label: 'Current Account', count: 66745, percentage: '20.4%', color: '#10b981' },
    { label: 'Fixed Deposit', count: 68932, percentage: '21.0%', color: '#f59e0b' },
    { label: 'Recurring Deposit', count: 30276, percentage: '9.2%', color: '#8b5cf6' }
  ];

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.chart = new Chart(this.donutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.accountData.map(item => item.label),
        datasets: [{
          data: this.accountData.map(item => item.count),
          backgroundColor: this.accountData.map(item => item.color),
          borderWidth: 2,
          borderColor: '#ffffff',
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%', // Inner hollow width ratio for clean donut aesthetic
        plugins: {
          legend: {
            display: false // Using a custom HTML layout instead for optimal mobile scaling
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
