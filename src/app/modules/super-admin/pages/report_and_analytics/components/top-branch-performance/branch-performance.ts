import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MatModule } from '../../../../../../shared/material.module';

Chart.register(...registerables);
@Component({
  selector: 'app-branch-performance',
  imports: [MatModule],
  templateUrl: './branch-performance.html',
  styleUrl: './branch-performance.scss',
})
export class BranchPerformance {
   @ViewChild('barCanvas') barCanvas!: ElementRef<HTMLCanvasElement>;
  chart: any;

  // Deposit figures from the system data
  branchData = [
    { name: 'Mumbai Main', value: 250 },
    { name: 'Connaught Place', value: 226 },
    { name: 'Delhi MG Road', value: 189 },
    { name: 'Bangalore Banjara Hills', value: 165 },
    { name: 'Hyderabad Anna Nagar', value: 142 },
    { name: 'Chennai Park Street', value: 128 },
    { name: 'Kolkata FC Road', value: 115 },
    { name: 'Pune CG Road', value: 98 },
    { name: 'Ahmedabad MI Road', value: 87 },
    { name: 'Jaipur Sector 17', value: 76 }
  ];

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.chart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.branchData.map(item => item.name),
        datasets: [{
          label: 'Deposits',
          data: this.branchData.map(item => item.value),
          backgroundColor: '#3b82f6', // Matching modern corporate light blue
          hoverBackgroundColor: '#2563eb',
          borderRadius: 4, // Clean rounded edges for modern aesthetics
          borderSkipped: false,
          barThickness: 14
        }]
      },
      options: {
        indexAxis: 'y', // Renders the bar chart horizontally
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            padding: 10,
            
            callbacks: {
              label: (context) => ` Deposits: ₹ ${context.raw} Cr`
            }
          }
        },
        scales: {
          x: {
            grid: {
              color: '#f1f5f9'
            },
            ticks: {
              color: '#94a3b8',
              font: { family: 'sans-serif', size: 11 },
              callback: (value) => value + ' Cr'
            }
          },
          y: {
            grid: {
              display: false
            },
            ticks: {
              color: '#475569',
              font: { family: 'sans-serif', size: 12, weight: 500 }
            }
          }
        }
      }
    });
  }
}
