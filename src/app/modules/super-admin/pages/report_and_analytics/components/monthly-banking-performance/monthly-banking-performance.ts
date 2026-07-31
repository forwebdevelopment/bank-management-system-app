import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MatModule } from '../../../../../../shared/material.module';

// Register Chart.js components
Chart.register(...registerables);

@Component({
  selector: 'app-monthly-banking-performance',
  imports: [MatModule],
  templateUrl: './monthly-banking-performance.html',
  styleUrl: './monthly-banking-performance.scss',
})
export class MonthlyBankingPerformance {

    @ViewChild('performanceCanvas') performanceCanvas!: ElementRef<HTMLCanvasElement>;
  chart: any;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.chart = new Chart(this.performanceCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Deposits',
            data:[4 ,8, 10,15 , 11,15,17,20,30],
            borderColor: '#3b82f6', // Light Blue Accent
            backgroundColor: 'rgba(59, 130, 246, 0.04)',
            borderWidth: 2.5,
            tension: 0.35,
            pointRadius: 2,
            pointHoverRadius: 5
          },
          {
            label: 'Withdrawals',
            data:[3 ,5, 8,13 , 15,10,13,17,20],
            borderColor: '#ef4444', // Coral Red Accent
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderDash:[], // Dashed line to match visual reference
            tension: 0.35,
            pointRadius: 0,
            pointHoverRadius: 4
          },
          {
            label: 'Loan Disbursements',
            data:[2,4,6,4,5,12,14,16,18],
            borderColor: '#10b981', // Emerald Green Accent
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.35,
            pointRadius: 0,
            pointHoverRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            align: 'end',
            labels: {
              boxWidth: 8,
              boxHeight: 8,
              usePointStyle: true,
              pointStyle: 'circle',
              font: {
                family: 'sans-serif',
                size: 12,
                weight: 500
              },
              color: '#64748b'
            }
          },
          tooltip: {
            padding: 12,
            backgroundColor: '#1e293b',
            titleColor: '#ffffff',
            bodyColor: '#e2e8f0',
           
            cornerRadius: 6
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#94a3b8',
              font: { family: 'sans-serif', size: 11 }
            }
          },
          y: {
            border: {
              dash: [5, 5]
            },
            grid: {
              color: '#f1f5f9'
            },
            ticks: {
              color: '#94a3b8',
              font: { family: 'sans-serif', size: 11 },
              callback: (value) => '₹' + value + 'Cr'
            }
          }
        }
      }
    });
  }
}
