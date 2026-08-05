import { Component } from '@angular/core';
import { SecurityAlertItem } from '../../../../models/login';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-security-alerts-panel',
  imports: [MatModule],
  templateUrl: './security-alerts-panel.html',
  styleUrl: './security-alerts-panel.scss',
})
export class SecurityAlertsPanel {
    
  // Real-time incident logs array matching your provided image details exactly
  alertsDataList: SecurityAlertItem[] = [
    { icon: 'gpp_bad', iconClass: 'icon-high', title: 'Multiple Failed Login Attempts', user: 'Priya Verma', timestamp: '26/06/2026 10:15 AM', severity: 'High', severityClass: 'badge-high' },
    { icon: 'devices', iconClass: 'icon-medium', title: 'Login from New Device', user: 'Rahul Sharma', timestamp: '26/06/2026 10:05 AM', severity: 'Medium', severityClass: 'badge-medium' },
    { icon: 'location_on', iconClass: 'icon-medium', title: 'Login from New Location', user: 'Amit Kumar', timestamp: '26/06/2026 09:58 AM', severity: 'Medium', severityClass: 'badge-medium' },
    { icon: 'lock', iconClass: 'icon-high', title: 'Account Locked', user: 'Sneha Gupta', timestamp: '26/06/2026 09:45 AM', severity: 'High', severityClass: 'badge-high' },
    { icon: 'key', iconClass: 'icon-low', title: 'Password Changed', user: 'Vikram Patel', timestamp: '26/06/2026 09:30 AM', severity: 'Low', severityClass: 'badge-low' },
    { icon: 'verified_user', iconClass: 'icon-low', title: 'Two-Factor Authentication Enabled', user: 'Rohit Malhotra', timestamp: '26/06/2026 09:10 AM', severity: 'Low', severityClass: 'badge-low' }
  ];

  constructor() {}

  ngOnInit(): void {}




  
}
