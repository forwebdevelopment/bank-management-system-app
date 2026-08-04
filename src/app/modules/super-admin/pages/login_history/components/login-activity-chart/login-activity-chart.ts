import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-login-activity-chart',
  imports: [],
  templateUrl: './login-activity-chart.html',
  styleUrl: './login-activity-chart.scss',
})
export class LoginActivityChart {
 @ViewChild('activityChart') chartCanvas!: ElementRef<HTMLCanvasElement>;
  public chart: any;
ngAfterViewInit(): void {
    // 2. Wrap in a setTimeout to ensure the CSS height is fully calculated by the browser
    setTimeout(() => {
      this.createChart();
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  createChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    // Create a vertical linear gradient for the fill underneath the line
    const gradientFill = ctx.createLinearGradient(0, 0, 0, 300);
    gradientFill.addColorStop(0, 'rgba(37, 99, 235, 0.2)'); // Light blue at top
    gradientFill.addColorStop(1, 'rgba(37, 99, 235, 0.0)'); // Transparent at bottom

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        // Example dates spread out as seen in the image
        labels: ['25 May', '28 May', '31 May', '4 Jun', '7 Jun', '9 Jun', '11 Jun', '14 Jun', '16 Jun', '18 Jun', '21 Jun', '23 Jun', '26 Jun'],
        datasets: [{
          label: 'Logins',
          // Mock data points imitating the peaks and valleys from the image
          data: [1700, 2100, 1350, 2350, 2500, 1780, 2450, 1750, 1450, 2850, 1980, 2600, 2300],
          borderColor: '#2563eb', // Primary Blue
          backgroundColor: gradientFill,
          borderWidth: 2,
          pointBackgroundColor: '#2563eb',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 1.5,
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: true, // Fills the area below the line
          tension: 0.4 // Creates the smooth curved lines
        }]
      },
      options: {
        // CRITICAL: These two properties ensure the chart listens to the CSS wrapper
        responsive: true,
        maintainAspectRatio: false, 
        
        plugins: {
          legend: {
            display: false // Hides the default dataset label at the top
          },
          tooltip: {
            backgroundColor: '#111827',
            padding: 10,
            displayColors: false,
            callbacks: {
              label: (context) => `${context.parsed.y} Logins`
            }
          }
        },
        scales: {
          x: {
            border:{
              display:false
            },
            grid: {
              display: false, // Hides vertical grid lines
            
            },
            ticks: {
              color: '#6b7280',
              font: { size: 11, family: 'Roboto, sans-serif' },
              maxTicksLimit: 5 // Limits X-axis to roughly 5 date labels to prevent crowding on mobile
            }
          },
          y: {
            border:{
              display:false
            },
            beginAtZero: true,
            max: 4000,
            grid: {
              color: '#f3f4f6', // Light gray horizontal lines
              
            },
            ticks: {
              color: '#6b7280',
              font: { size: 11, family: 'Roboto, sans-serif' },
              stepSize: 1000,
              // Custom callback to format labels as 1K, 2K, 3K, 4K
              callback: (value: any) => {
                if (value === 0) return '0';
                return (value / 1000) + 'K';
              }
            }
          }
        }
      }
    });
  }
}
