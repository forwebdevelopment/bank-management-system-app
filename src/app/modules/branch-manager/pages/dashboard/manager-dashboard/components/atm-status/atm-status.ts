import { Component } from '@angular/core';
import { AtmMachine } from '../../../../../models/atm.status.model';
import { MatModule } from '../../../../../../../shared/material.module';

@Component({
  selector: 'app-atm-status',
  imports: [MatModule],
  templateUrl: './atm-status.html',
  styleUrl: './atm-status.scss',
})
export class AtmStatus {

    atmSummary = {
    total: 12,
    operational: 8,
    lowCash: 2,
    offline: 2
  };

  atms: AtmMachine[] = [
    {
      atmId: 'ATM-CHD-001',
      location: 'Branch Entrance',
      cashAvailable: '₹18.5 Lakh',
      lastTransaction: '2 min ago',
      status: 'Operational'
    },
    {
      atmId: 'ATM-CHD-002',
      location: 'Sector 17 Market',
      cashAvailable: '₹4.2 Lakh',
      lastTransaction: '8 min ago',
      status: 'Low Cash'
    },
    {
      atmId: 'ATM-CHD-003',
      location: 'Railway Station',
      cashAvailable: '₹0',
      lastTransaction: '2 hrs ago',
      status: 'Offline'
    },
    {
      atmId: 'ATM-CHD-004',
      location: 'University Road',
      cashAvailable: '₹15.8 Lakh',
      lastTransaction: '5 min ago',
      status: 'Operational'
    }
  ];

  get operationalPercentage(): number {
    if (this.atmSummary.total === 0) {
      return 0;
    }

    return Math.round(
      (this.atmSummary.operational / this.atmSummary.total) * 100
    );
  }
}
