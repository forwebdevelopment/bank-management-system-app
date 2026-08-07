import { Component } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';


@Component({
  selector: 'app-quick-actions',
  imports: [MatModule],
  templateUrl: './quick-actions.html',
  styleUrl: './quick-actions.scss',
})
export class QuickActions {

   quickActions: QuickActionModel[] = [
    {
      label: 'Add Customer',
      description: 'Register customer',
      icon: 'person_add',
      route: '/branch-manager/customers/add',
      colorClass: 'blue-action'
    },
    {
      label: 'Open Account',
      description: 'Create bank account',
      icon: 'account_balance',
      route: '/branch-manager/accounts/open',
      colorClass: 'purple-action'
    },
    {
      label: 'Deposit Cash',
      description: 'Process deposit',
      icon: 'savings',
      route: '/branch-manager/deposits',
      colorClass: 'green-action'
    },
    {
      label: 'Withdraw Cash',
      description: 'Process withdrawal',
      icon: 'payments',
      route: '/branch-manager/withdrawals',
      colorClass: 'orange-action'
    },
    {
      label: 'Fund Transfer',
      description: 'Transfer funds',
      icon: 'swap_horiz',
      route: '/branch-manager/fund-transfer',
      colorClass: 'cyan-action'
    },
    {
      label: 'Approve Loan',
      description: 'Review applications',
      icon: 'request_quote',
      route: '/branch-manager/approvals/loans',
      colorClass: 'red-action'
    },
    {
      label: 'ATM Requests',
      description: 'Review card requests',
      icon: 'credit_card',
      route: '/branch-manager/approvals/atm-card',
      colorClass: 'indigo-action'
    },
    {
      label: 'Daily Report',
      description: 'View daily report',
      icon: 'description',
      route: '/branch-manager/reports/daily',
      colorClass: 'gray-action'
    }
  ];
}
