import { Component } from '@angular/core';
import { DashboardBanner } from './components/dashboard-banner/dashboard-banner';
import { BranchStatusOverview } from './components/branch-status-overview/branch-status-overview';
import { DashboardSummary } from './components/dashboard-summary/dashboard-summary';
import { LoanOverview } from './components/loan-overview/loan-overview';
import { CustomerGrowth } from './components/customer-growth/customer-growth';
import { BranchTransactions } from './components/branch-transactions/branch-transactions';
import { RecentTransactions } from './components/recent-transactions/recent-transactions';
import { PendingApprovals } from './components/pending-approvals/pending-approvals';
import { AtmStatus } from './components/atm-status/atm-status';
import { ReportSummary } from './components/report-summary/report-summary';
import { DashboardNotifications } from './components/dashboard-notifications/dashboard-notifications';
import { StaffPerformance } from './components/staff-performance/staff-performance';
import { QuickActions } from './components/quick-actions/quick-actions';

@Component({
  selector: 'app-manager-dashboard',
  imports: [DashboardBanner,BranchStatusOverview ,StaffPerformance,QuickActions,
    DashboardSummary ,LoanOverview , CustomerGrowth , DashboardNotifications,
    BranchTransactions , RecentTransactions, PendingApprovals , AtmStatus ,ReportSummary],
  templateUrl: './manager-dashboard.html',
  styleUrl: './manager-dashboard.scss',
})
export class ManagerDashboard {}
