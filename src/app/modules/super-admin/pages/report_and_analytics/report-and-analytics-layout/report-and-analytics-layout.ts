import { Component } from '@angular/core';
import { MatModule } from '../../../../../shared/material.module';
import { ReportSummaryCard } from '../components/report-summary-card/report-summary-card';
import { MonthlyBankingPerformance } from '../components/monthly-banking-performance/monthly-banking-performance';
import { AccountDistribution } from '../components/account-distribution/account-distribution';
import { QuickInsights } from '../components/quick-insights/quick-insights';
import { BranchPerformance } from '../components/top-branch-performance/branch-performance';
import { CustomerDistribution } from '../components/customer-distribution/customer-distribution';
import { AvailableReports } from '../components/available-reports/available-reports';
import { RecentGeneratedReports } from '../components/recent-generated-reports/recent-generated-reports';

@Component({
  selector: 'app-report-and-analytics-layout',
  imports: [MatModule , ReportSummaryCard , MonthlyBankingPerformance ,AccountDistribution , QuickInsights , BranchPerformance , CustomerDistribution , AvailableReports , RecentGeneratedReports],
  templateUrl: './report-and-analytics-layout.html',
  styleUrl: './report-and-analytics-layout.scss',
})
export class ReportAndAnalyticsLayout {}
