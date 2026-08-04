import { Component } from '@angular/core';
import { UserDetailsPanel } from '../components/user-details-panel/user-details-panel';
import { PageHeader } from '../components/page-header/page-header';
import { SummaryCard } from '../components/summary-card/summary-card';
import { LoginHistoryTable } from '../components/login-history-table/login-history-table';
import { LoginActivityChart } from '../components/login-activity-chart/login-activity-chart';
import { LoginDistributionChart } from '../components/login-distribution-chart/login-distribution-chart';
import { ActiveSessionsList } from '../components/active-sessions-list/active-sessions-list';
import { SecurityAlertsPanel } from '../components/security-alerts-panel/security-alerts-panel';
import { MatModule } from '../../../../../shared/material.module';

@Component({
  selector: 'app-login-history',
  imports: [MatModule, UserDetailsPanel , PageHeader,SummaryCard, LoginHistoryTable ,LoginActivityChart , LoginDistributionChart ,ActiveSessionsList, SecurityAlertsPanel],
  templateUrl: './login-history.html',
  styleUrl: './login-history.scss',
})
export class LoginHistory {
  // Toggles the right sidebar containing user details and security alerts
  isSidebarOpen: boolean = false; 

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
