import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import {
  ChartData,
  ChartOptions,
} from 'chart.js';



 import { AccountDistributionModel } from '../../../../models/account-distribution';
import { MatModule } from '../../../../../../shared/material.module';
@Component({
  selector: 'app-account-distribution',
  imports: [MatModule],
  templateUrl: './account-distribution.html',
  styleUrl: './account-distribution.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDistribution {
  readonly totalAccounts = 45678;

  readonly accountTypes: AccountDistributionModel[] = [
    {
      label: 'Savings Account',
      count: 27642,
      percentage: 60.5,
      color: '#176df4',
    },
    {
      label: 'Current Account',
      count: 9186,
      percentage: 20.1,
      color: '#19bf76',
    },
    {
      label: 'Fixed Deposit',
      count: 5619,
      percentage: 12.3,
      color: '#7a4ff0',
    },
    {
      label: 'Recurring Deposit',
      count: 3231,
      percentage: 7.1,
      color: '#ff8a25',
    },
  ];

  readonly doughnutChartData: ChartData<'doughnut'> = {
    labels: this.accountTypes.map((account) => account.label),
    datasets: [
      {
        data: this.accountTypes.map((account) => account.count),
        backgroundColor: this.accountTypes.map(
          (account) => account.color
        ),
        borderWidth: 0,
        hoverOffset: 5,
      },
    ],
  };

  readonly doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '67%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#17233c',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        padding: 12,
        callbacks: {
          label: (context) => {
            const value = Number(context.raw);

            return `${context.label}: ${value.toLocaleString(
              'en-IN'
            )}`;
          },
        },
      },
    },
  };

  trackAccountType(
    index: number,
    account: AccountDistributionModel
  ): string {
    return account.label;
  }
}
