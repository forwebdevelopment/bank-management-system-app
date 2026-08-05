import { Component } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';
import { KpiCardItem } from '../../../../models/branches.model';

@Component({
  selector: 'app-branche-card',
  imports: [MatModule],
  templateUrl: './branche-card.html',
  styleUrl: './branche-card.scss',
})
export class BrancheCard {


  // Data loop representing the exact numbers and labels from the dashboard mockup
  kpiItemsList: KpiCardItem[] = [
    { icon: 'store', iconClass: 'bg-total-blue', title: 'Total Branches', count: '152', trendText: '12.5% from last month', trendDirection: 'up', trendClass: 'trend-green' },
    { icon: 'check_circle', iconClass: 'bg-active-green', title: 'Active Branches', count: '128', trendText: '8.3% from last month', trendDirection: 'up', trendClass: 'trend-green' },
    { icon: 'cancel', iconClass: 'bg-inactive-red', title: 'Inactive Branches', count: '24', trendText: '-3.1% from last month', trendDirection: 'down', trendClass: 'trend-red' },
    { icon: 'person', iconClass: 'bg-manager-orange', title: 'Total Branch Managers', count: '152', trendText: '10.6% from last month', trendDirection: 'up', trendClass: 'trend-green' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
