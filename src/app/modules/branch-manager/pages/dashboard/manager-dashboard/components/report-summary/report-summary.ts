import { Component } from '@angular/core';
import { MatModule } from '../../../../../../../shared/material.module';

@Component({
  selector: 'app-report-summary',
  imports: [MatModule],
  templateUrl: './report-summary.html',
  styleUrl: './report-summary.scss',
})
export class ReportSummary {


    reports: ReportSummaryModel[] = [
    {
      id: 1,
      title: 'Daily Business',
      value: '₹28.45 Cr',
      change: '+12.4%',
      trend: 'up',
      icon: 'today',
      route: '/branch-manager/reports/daily'
    },
    {
      id: 2,
      title: 'Monthly Business',
      value: '₹684.20 Cr',
      change: '+9.7%',
      trend: 'up',
      icon: 'calendar_month',
      route: '/branch-manager/reports/monthly'
    },
    {
      id: 3,
      title: 'Deposit Summary',
      value: '₹185.60 Cr',
      change: '+8.2%',
      trend: 'up',
      icon: 'savings',
      route: '/branch-manager/reports/deposits'
    },
    {
      id: 4,
      title: 'Withdrawal Summary',
      value: '₹92.35 Cr',
      change: '+4.1%',
      trend: 'up',
      icon: 'payments',
      route: '/branch-manager/reports/withdrawals'
    },
    {
      id: 5,
      title: 'Branch Revenue',
      value: '₹12.80 Cr',
      change: '+11.3%',
      trend: 'up',
      icon: 'monitoring',
      route: '/branch-manager/reports/revenue'
    },
    {
      id: 6,
      title: 'Loan Recovery',
      value: '₹8.45 Cr',
      change: '-2.1%',
      trend: 'down',
      icon: 'currency_rupee',
      route: '/branch-manager/reports/loan-recovery'
    }
  ];
}
