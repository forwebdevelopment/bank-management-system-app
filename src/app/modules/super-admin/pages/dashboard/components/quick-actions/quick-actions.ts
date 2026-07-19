
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { Router } from '@angular/router';

import { QuickActionModel } from '../../../../models/quick-action';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-quick-actions',
  imports: [MatModule],
  templateUrl: './quick-actions.html',
  styleUrl: './quick-actions.css',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickActions {


   readonly quickActions: QuickActionModel[] = [
    {
      id: 1,
      title: 'Add Branch',
      description: 'Create a new bank branch',
      icon: 'add_business',
      route: '/super-admin/branches/add',
      theme: 'blue',
    },
    {
      id: 2,
      title: 'Add User',
      description: 'Register a new system user',
      icon: 'person_add',
      route: '/super-admin/users/add',
      theme: 'green',
    },
    {
      id: 3,
      title: 'Manage Roles',
      description: 'Configure roles and permissions',
      icon: 'manage_accounts',
      route: '/super-admin/roles',
      theme: 'purple',
    },
    {
      id: 4,
      title: 'View Reports',
      description: 'Open banking reports',
      icon: 'assessment',
      route: '/super-admin/reports',
      theme: 'orange',
    },
    {
      id: 5,
      title: 'Bank Settings',
      description: 'Manage banking configuration',
      icon: 'account_balance',
      route: '/super-admin/bank-settings',
      theme: 'teal',
    },
    {
      id: 6,
      title: 'Audit Logs',
      description: 'Review administrative activities',
      icon: 'history',
      route: '/super-admin/audit-logs',
      theme: 'red',
    },
  ];

  constructor(private readonly router: Router) {}

  navigateToAction(action: QuickActionModel): void {
    this.router.navigateByUrl(action.route);
  }

  trackQuickAction(
    index: number,
    action: QuickActionModel
  ): number {
    return action.id;
  }
}
