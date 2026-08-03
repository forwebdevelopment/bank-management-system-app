import { Component } from '@angular/core';
import { AuditHeader } from '../components/audit-header/audit-header';
import { CardSummary } from '../components/card-summary/card-summary';
import { AuditList } from '../components/audit-list/audit-list';
import { SecurityAlert } from '../components/security-alert/security-alert';
import { LiveAuditMonitor } from '../components/live-audit-monitor/live-audit-monitor';
import { ActiveUsers } from '../components/active-users/active-users';
import { AuditDetials } from '../components/audit-detials/audit-detials';

@Component({
  selector: 'app-audit-log',
  imports: [AuditHeader , CardSummary , AuditList , SecurityAlert , LiveAuditMonitor , ActiveUsers , AuditDetials],
  templateUrl: './audit-log.html',
  styleUrl: './audit-log.scss',
})
export class AuditLog {}
