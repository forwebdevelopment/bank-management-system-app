import { Component } from '@angular/core';
import { RecentTransaction, TransactionType } from '../../../../../models/recent.model';
import { MatModule } from '../../../../../../../shared/material.module';

@Component({
  selector: 'app-recent-transactions',
  imports: [MatModule],
  templateUrl: './recent-transactions.html',
  styleUrl: './recent-transactions.scss',
})
export class RecentTransactions {
 transactions: RecentTransaction[] = [
    {
      transactionId: 'TXN125487',
      customerName: 'Amit Kumar',
      accountNumber: '50100211234567',
      type: 'Deposit',
      amount: 50000,
      dateTime: new Date('2026-07-20T10:23:00'),
      status: 'Success'
    },
    {
      transactionId: 'TXN125486',
      customerName: 'Neha Verma',
      accountNumber: '50100211234568',
      type: 'Withdrawal',
      amount: 25000,
      dateTime: new Date('2026-07-20T10:15:00'),
      status: 'Success'
    },
    {
      transactionId: 'TXN125485',
      customerName: 'Rajesh Singh',
      accountNumber: '50100211234569',
      type: 'Fund Transfer',
      amount: 75000,
      dateTime: new Date('2026-07-20T10:05:00'),
      status: 'Success'
    },
    {
      transactionId: 'TXN125484',
      customerName: 'Priya Sharma',
      accountNumber: '50100211234570',
      type: 'Deposit',
      amount: 100000,
      dateTime: new Date('2026-07-20T09:58:00'),
      status: 'Success'
    },
    {
      transactionId: 'TXN125483',
      customerName: 'Vikram Joshi',
      accountNumber: '50100211234571',
      type: 'Withdrawal',
      amount: 10000,
      dateTime: new Date('2026-07-20T09:45:00'),
      status: 'Pending'
    },
    {
      transactionId: 'TXN125482',
      customerName: 'Sunita Devi',
      accountNumber: '50100211234572',
      type: 'Fund Transfer',
      amount: 35000,
      dateTime: new Date('2026-07-20T09:30:00'),
      status: 'Failed'
    }
  ];

  maskAccountNumber(accountNumber: string): string {
    if (accountNumber.length <= 4) {
      return accountNumber;
    }

    return `••••${accountNumber.slice(-4)}`;
  }

  getTransactionIcon(type: TransactionType): string {
    switch (type) {
      case 'Deposit':
        return 'south_west';
      case 'Withdrawal':
        return 'north_east';
      case 'Fund Transfer':
        return 'swap_horiz';
      default:
        return 'payments';
    }
  }


}
