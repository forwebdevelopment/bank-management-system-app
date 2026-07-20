import { Component } from '@angular/core';
import { DashboardMetric } from '../../../../../components/models/dashboard-summary.model';
import { MatModule } from '../../../../../../../shared/material.module';

@Component({
  selector: 'app-dashboard-summary',
  imports: [MatModule],
  templateUrl: './dashboard-summary.html',
  styleUrl: './dashboard-summary.scss',
})
export class DashboardSummary {

metrics: DashboardMetric[] = [
    {
      title: 'Total Customers',
      value: '18,542',
      icon: 'groups',
      changeText: '+8%',
      description: 'Compared with last month',
      status: 'success',
      route: '/branch-manager/customers',
      chartPoints: [8, 12, 10, 18, 16, 23, 25, 31]
    },
    {
      title: 'Active Accounts',
      value: '26,781',
      icon: 'account_balance_wallet',
      changeText: '+11%',
      description: 'Compared with last month',
      status: 'success',
      route: '/branch-manager/accounts',
      chartPoints: [10, 9, 15, 14, 19, 22, 20, 28]
    },
    {
      title: 'Today’s Transactions',
      value: '₹18.7 Cr',
      icon: 'swap_horiz',
      changeText: '+14%',
      description: '2,856 transactions completed',
      status: 'success',
      route: '/branch-manager/transactions',
      chartPoints: [5, 10, 8, 13, 11, 20, 18, 26]
    },
    {
      title: 'Pending Loan Approvals',
      value: '32',
      icon: 'request_quote',
      changeText: 'Needs action',
      description: '7 high-priority applications',
      status: 'danger',
      route: '/branch-manager/approvals/loans',
      chartPoints: [25, 20, 22, 19, 17, 15, 13, 11]
    },
    {
      title: 'ATM Card Requests',
      value: '87',
      icon: 'credit_card',
      changeText: 'Pending',
      description: '18 requests received today',
      status: 'warning',
      route: '/branch-manager/approvals/atm-card',
      chartPoints: [10, 13, 12, 17, 16, 18, 22, 20]
    },
    {
      title: 'Today’s Deposits',
      value: '₹6.25 Cr',
      icon: 'savings',
      changeText: 'Healthy',
      description: '84% of today’s target',
      status: 'info',
      route: '/branch-manager/deposits',
      chartPoints: [7, 11, 9, 14, 13, 19, 21, 25]
    }
  ];

  createPolyline(points: number[]): string {
    const width = 120;
    const height = 38;
    const maximumValue = Math.max(...points);
    const minimumValue = Math.min(...points);
    const range = maximumValue - minimumValue || 1;

    return points
      .map((point, index) => {
        const x = (index / (points.length - 1)) * width;
        const y =
          height -
          ((point - minimumValue) / range) * (height - 6) -
          3;

        return `${x},${y}`;
      })
      .join(' ');
  }


}
