import { Component, inject } from '@angular/core';
import { PageHeader } from '../components/page-header/page-header';
import { SummaryCard } from '../components/summary-card/summary-card';
import { LoginHistoryTable } from '../components/login-history-table/login-history-table';
import { LoginActivityChart } from '../components/login-activity-chart/login-activity-chart';
import { LoginDistributionChart } from '../components/login-distribution-chart/login-distribution-chart';
import { ActiveSessionsList } from '../components/active-sessions-list/active-sessions-list';
import { SecurityAlertsPanel } from '../components/security-alerts-panel/security-alerts-panel';
import { MatModule } from '../../../../../shared/material.module';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login-history',
  imports: [MatModule, PageHeader, SummaryCard, LoginHistoryTable, LoginActivityChart, LoginDistributionChart, ActiveSessionsList, SecurityAlertsPanel],
  templateUrl: './login-history.html',
  styleUrl: './login-history.scss',
  providers: [LoginService]
})
export class LoginHistory {
  // Toggles the right sidebar containing user details and security alerts
  isSidebarOpen: boolean = false;
  loginService = inject(LoginService)

  // Example data source matching your table columns
  dataSource = [
    {
      loginId: 'LOGIN-00012458',
      loginDateTime: '26/06/2026 10:35:22 AM',
      userName: 'Rahul Sharma',
      employeeId: 'EMP10025',
      userRole: 'Branch Manager',
      branch: 'Connaught Place',
      ipAddress: '203.89.45.12',
      deviceType: 'Desktop',
      browser: 'Chrome',
      os: 'Windows',
      loginStatus: 'Success',
      sessionDuration: '02:45:18'
    },
    {
      loginId: 'LOGIN-00012457',
      loginDateTime: '26/06/2026 10:22:11 AM',
      userName: 'Priya Verma',
      employeeId: 'EMP10048',
      userRole: 'Bank Staff',
      branch: 'Janakpuri',
      ipAddress: '192.168.1.45',
      deviceType: 'Mobile',
      browser: 'Safari',
      os: 'iOS',
      loginStatus: 'Success',
      sessionDuration: '01:15:32'
    }
    // ... more rows corresponding to the current page / filtered list
  ];

  dataSourcePDf = [
    {
      loginId: 'LOGIN-00012458',
      loginDateTime: '26/06/2026 10:35:22 AM',
      userName: 'Rahul Sharma',
      employeeId: 'EMP10025',
      userRole: 'Branch Manager',
      branch: 'Connaught Place',
      ipAddress: '203.89.45.12',
      loginStatus: 'Success',
      sessionDuration: '02:45:18'
    },
    {
      loginId: 'LOGIN-00012457',
      loginDateTime: '26/06/2026 10:22:11 AM',
      userName: 'Priya Verma',
      employeeId: 'EMP10048',
      userRole: 'Bank Staff',
      branch: 'Janakpuri',
      ipAddress: '192.168.1.45',
      loginStatus: 'Success',
      sessionDuration: '01:15:32'
    }
    // Add rest of your current page items here...
  ];

  ExportHistoryInCSV(data: any) {

    let datalist = data ? [data] : this.dataSource
    this.loginService.exportCurrentPageData(datalist)
  }

  ExportHistoryInPdf() {
    this.loginService.downloadPDF(this.dataSourcePDf)
  }
}
