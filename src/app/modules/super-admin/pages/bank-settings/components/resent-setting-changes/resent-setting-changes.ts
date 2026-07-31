import { Component } from '@angular/core';
import { AuditLogItem } from '../../../../models/banck-settings';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-resent-setting-changes',
  imports: [MatModule],
  templateUrl: './resent-setting-changes.html',
  styleUrl: './resent-setting-changes.scss',
})
export class ResentSettingChanges {

  
   // Activity items array mapping the exact values displayed on your dashboard image
  changesLog: AuditLogItem[] = [
    { id: 1, activity: 'Updated Email Configuration', timestamp: 'Jun 26, 2026 10:30 AM', adminUser: 'Super Admin' },
    { id: 2, activity: 'Enabled Two-Factor Authentication', timestamp: 'Jun 26, 2026 09:15 AM', adminUser: 'Super Admin' },
    { id: 3, activity: 'Updated Business Hours', timestamp: 'Jun 25, 2026 04:45 PM', adminUser: 'Super Admin' }
  ];

  constructor() { }

  ngOnInit(): void { }

  onViewAllClick(): void {
    console.log('Navigating to full systems operational security audit logs module...');
  }
}
