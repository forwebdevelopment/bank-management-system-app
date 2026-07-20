import { Component } from '@angular/core';
import { DashboardStatistic } from '../components/statistics.model';
import { StatisticsCard } from '../components/statistics-card/statistics-card';
import { MatModule } from '../../../../../shared/material.module';
import { CommonModule } from '@angular/common';
import { DepositWithdrawalChart } from '../components/deposit-withdrawal-chart/deposit-withdrawal-chart';
import { AccountDistribution } from '../components/account-distribution/account-distribution';
import { RecentActivities } from '../components/recent-activities/recent-activities';
import { SystemHealth } from '../components/system-health/system-health';
import { QuickActions } from '../components/quick-actions/quick-actions';
import { BranchPerformance } from '../components/branch-performance/branch-performance';

@Component({
  selector: 'app-dashboard',
  imports: [MatModule ,StatisticsCard,QuickActions,BranchPerformance , DepositWithdrawalChart,AccountDistribution ,RecentActivities],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

   readonly dashboardStatistics: DashboardStatistic[] = [
    {
      title: 'Total Branches',
      value: '156',
      icon: 'account_balance',
      growth: 12.5,
      comparisonText: 'vs last month',
      theme: 'blue',
      trendValues: [
        32, 35, 34, 39, 31, 30, 35, 37, 42, 38,
        40, 36, 35, 37, 42, 47, 44,
      ],
    },
    {
      title: 'Total Customers',
      value: '24,568',
      icon: 'group',
      growth: 18.3,
      comparisonText: 'vs last month',
      theme: 'green',
      trendValues: [
        31, 35, 30, 34, 40, 46, 42, 34, 30, 36,
        33, 40, 44, 39, 45, 48, 53,
      ],
    },
    {
      title: 'Total Accounts',
      value: '45,678',
      icon: 'credit_card',
      growth: 14.7,
      comparisonText: 'vs last month',
      theme: 'purple',
      trendValues: [
        42, 45, 43, 39, 44, 47, 52, 49, 51, 48,
        42, 38, 41, 47, 55, 59, 57,
      ],
    },
    {
      title: 'Total Employees',
      value: '1,245',
      icon: 'person_outline',
      growth: 8.9,
      comparisonText: 'vs last month',
      theme: 'orange',
      trendValues: [
        30, 31, 35, 33, 38, 34, 30, 35, 39, 42,
        40, 43, 41, 39, 44, 49, 45,
      ],
    },
    {
      title: 'Total Deposits',
      value: '₹ 2,45,67,89,000',
      icon: 'currency_rupee',
      growth: 22.4,
      comparisonText: 'vs last month',
      theme: 'teal',
      trendValues: [
        28, 34, 36, 32, 39, 42, 36, 29, 33, 39,
        31, 36, 40, 38, 43, 47, 52,
      ],
    },
    {
      title: "Today's Transactions",
      value: '12,456',
      icon: 'swap_horiz',
      growth: 16.8,
      comparisonText: 'vs last month',
      theme: 'pink',
      trendValues: [
        37, 40, 34, 33, 36, 41, 39, 33, 31, 35,
        40, 47, 42, 44, 41, 46, 51,
      ],
    },
  ];

  trackStatistic(
    index: number,
    statistic: DashboardStatistic
  ): string {
    return statistic.title;
  }
}
