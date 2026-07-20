import { Component } from '@angular/core';
import { PendingApproval } from '../../../../../components/models/pending-approval.model';
import { MatModule } from '../../../../../../../shared/material.module';

@Component({
  selector: 'app-pending-approvals',
  imports: [MatModule],
  templateUrl: './pending-approvals.html',
  styleUrl: './pending-approvals.scss',
})
export class PendingApprovals {


    approvals: PendingApproval[] = [
    {
      id: 1,
      title: 'Loan Approval',
      customerName: 'Rohit Agarwal',
      category: 'Home Loan',
      requestDate: new Date('2026-07-19'),
      priority: 'High',
      icon: 'request_quote'
    },
    {
      id: 2,
      title: 'ATM Card Request',
      customerName: 'Sneha Kapoor',
      category: 'Debit Card',
      requestDate: new Date('2026-07-20'),
      priority: 'Medium',
      icon: 'credit_card'
    },
    {
      id: 3,
      title: 'Cheque Book Request',
      customerName: 'Manish Gupta',
      category: 'Cheque Book',
      requestDate: new Date('2026-07-20'),
      priority: 'Medium',
      icon: 'receipt_long'
    },
    {
      id: 4,
      title: 'Account Opening',
      customerName: 'Anjali Mehta',
      category: 'Savings Account',
      requestDate: new Date('2026-07-20'),
      priority: 'Low',
      icon: 'person_add'
    },
    {
      id: 5,
      title: 'Account Closure',
      customerName: 'Suresh Yadav',
      category: 'Current Account',
      requestDate: new Date('2026-07-19'),
      priority: 'High',
      icon: 'account_balance'
    }
  ];

  approveRequest(approval: PendingApproval): void {
    console.log('Approved:', approval);

    this.approvals = this.approvals.filter(
      item => item.id !== approval.id
    );
  }

  rejectRequest(approval: PendingApproval): void {
    console.log('Rejected:', approval);

    this.approvals = this.approvals.filter(
      item => item.id !== approval.id
    );
  }

  viewDetails(approval: PendingApproval): void {
    console.log('View details:', approval);
  }
}
