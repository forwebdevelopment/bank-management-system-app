import { Component } from '@angular/core';

import { MatModule } from '../../../../../../shared/material.module';
import { CashPositionItem, PendingTask, PerformanceFactor } from '../../../../models/branch-status-overview.model';

@Component({
  selector: 'app-branch-status-overview',
  imports: [MatModule],
  templateUrl: './branch-status-overview.html',
  styleUrl: './branch-status-overview.scss',
})
export class BranchStatusOverview {
  businessTarget = {
    target: 35,
    achieved: 28.45,
    remaining: 6.55,
    percentage: 81,
    status: 'On Track'
  };

  cashPosition = {
    totalCash: '₹4.75 Cr',
    lastUpdated: '10 minutes ago'
  };

  cashItems: CashPositionItem[] = [
    {
      label: 'Cash in Vault',
      amount: '₹3.20 Cr',
      icon: 'account_balance'
    },
    {
      label: 'Cash at Counters',
      amount: '₹1.10 Cr',
      icon: 'point_of_sale'
    },
    {
      label: 'ATM Cash',
      amount: '₹45 Lakh',
      icon: 'local_atm'
    }
  ];

  pendingTasks: PendingTask[] = [
    {
      title: 'Loan Approvals',
      count: 7,
      icon: 'request_quote',
      priority: 'high',
      route: '/branch-manager/approvals/loans'
    },
    {
      title: 'Account Requests',
      count: 5,
      icon: 'account_balance_wallet',
      priority: 'medium',
      route: '/branch-manager/approvals/accounts'
    },
    {
      title: 'ATM Card Requests',
      count: 8,
      icon: 'credit_card',
      priority: 'medium',
      route: '/branch-manager/approvals/atm-card'
    },
    {
      title: 'Cheque Requests',
      count: 3,
      icon: 'receipt_long',
      priority: 'low',
      route: '/branch-manager/approvals/cheque-book'
    }
  ];

  branchPerformance = {
    score: 85,
    status: 'Excellent',
    rank: 4,
    totalBranches: 42
  };

  performanceFactors: PerformanceFactor[] = [
    {
      label: 'Business Target',
      percentage: 81
    },
    {
      label: 'Customer Satisfaction',
      percentage: 92
    },
    {
      label: 'Loan Recovery',
      percentage: 84
    },
    {
      label: 'Staff Productivity',
      percentage: 88
    }
  ];



}
