import { Component } from '@angular/core';
import { TransactionPeriod, TransactionSeries } from '../../../../../components/models/branch-transactin.model';
import { MatModule } from '../../../../../../../shared/material.module';

@Component({
  selector: 'app-branch-transactions',
  imports: [MatModule],
  templateUrl: './branch-transactions.html',
  styleUrl: './branch-transactions.scss',
})
export class BranchTransactions {



    selectedPeriod: TransactionPeriod = 'today';

  periods: { label: string; value: TransactionPeriod }[] = [
    { label: 'Today', value: 'today' },
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
    { label: 'Year', value: 'year' }
  ];

  transactionData: Record<TransactionPeriod, TransactionSeries> = {
    today: {
      labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
      deposits: [18, 34, 27, 22, 43, 34, 39],
      withdrawals: [10, 23, 17, 14, 24, 20, 29],
      fundTransfers: [5, 14, 9, 7, 11, 8, 15]
    },
    week: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      deposits: [30, 35, 29, 38, 44, 34, 41],
      withdrawals: [20, 25, 19, 27, 30, 22, 28],
      fundTransfers: [12, 15, 10, 17, 20, 13, 18]
    },
    month: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      deposits: [120, 145, 138, 165],
      withdrawals: [82, 94, 90, 110],
      fundTransfers: [48, 60, 56, 72]
    },
    year: {
      labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov', 'Dec'],
      deposits: [210, 245, 280, 315, 300, 345, 370],
      withdrawals: [150, 170, 188, 215, 205, 230, 248],
      fundTransfers: [90, 108, 116, 130, 124, 148, 160]
    }
  };

  get currentData(): TransactionSeries {
    return this.transactionData[this.selectedPeriod];
  }

  selectPeriod(period: TransactionPeriod): void {
    this.selectedPeriod = period;
  }

  createPoints(values: number[]): string {
    const width = 600;
    const height = 200;
    const padding = 12;

    const allValues = [
      ...this.currentData.deposits,
      ...this.currentData.withdrawals,
      ...this.currentData.fundTransfers
    ];

    const maxValue = Math.max(...allValues, 1);

    return values
      .map((value, index) => {
        const x =
          values.length === 1
            ? width / 2
            : (index / (values.length - 1)) * width;

        const y =
          height -
          padding -
          (value / maxValue) * (height - padding * 2);

        return `${x},${y}`;
      })
      .join(' ');
  }

  createAreaPath(values: number[]): string {
    const points = this.createPoints(values)
      .split(' ')
      .map(point => point.replace(',', ' '))
      .join(' L ');

    return `M 0 200 L ${points} L 600 200 Z`;
  }
}
