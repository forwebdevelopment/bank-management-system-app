import { Component } from '@angular/core';
import { MatModule } from '../../../../../../../shared/material.module';

@Component({
  selector: 'app-dashboard-banner',
  imports: [MatModule],
  templateUrl: './dashboard-banner.html',
  styleUrl: './dashboard-banner.scss',
})
export class DashboardBanner {
    managerName = 'Rahul Sharma';
  branchName = 'Chandigarh Branch 9';
  branchCode = 'BR-CHD-009';

  currentDate = new Date();

  refreshDashboard(): void {
    console.log('Dashboard data refreshed');

    // Later, call dashboard API here.
    // Example:
    // this.dashboardService.loadDashboardData();
  }
}
