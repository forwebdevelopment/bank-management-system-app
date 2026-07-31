import { Component } from '@angular/core';
import { SummaryMetric } from '../../../../models/banck-settings';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-configuration-summary',
  imports: [MatModule],
  templateUrl: './configuration-summary.html',
  styleUrl: './configuration-summary.scss',
})
export class ConfigurationSummary {
  overallCompletion: number = 84;
  
  // Custom structural circle SVG vector sizing variables
  radius: number = 54;
  circumference: number = 2 * Math.PI * this.radius; // Roughly 339.29

  // Dataset mapping matching Section 7 layout metrics details
  summaryBreakdown: SummaryMetric[] = [
    { label: 'Completed', percentage: 84, count: 21, color: '#0f62fe' }, // Brand primary blueprint action blue accent
    { label: 'Pending', percentage: 12, count: 3, color: '#f59e0b' },    // Status tracking warning gold amber accent
    { label: 'Not Configured', percentage: 4, count: 1, color: '#cbd5e1' } // Disabled default slate background frame tint
  ];

  constructor() { }

  ngOnInit(): void { }

  // Computes active radial dashoffset boundaries for the SVG vector track engine
  calculateStrokeOffset(percentage: number): number {
    return this.circumference - (percentage / 100) * this.circumference;
  }
}
