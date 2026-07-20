import { Component } from '@angular/core';
import { MatModule } from '../../../../../../../shared/material.module';

@Component({
  selector: 'app-dashboard-notifications',
  imports: [MatModule],
  templateUrl: './dashboard-notifications.html',
  styleUrl: './dashboard-notifications.scss',
})
export class DashboardNotifications {

    notifications: DashboardNotificationModel[] = [
    {
      id: 1,
      title: 'High-value transaction completed',
      description: 'A fund transfer of ₹25 Lakh was completed successfully.',
      time: '5 min ago',
      icon: 'currency_rupee',
      type: 'transaction',
      isRead: false,
      route: '/branch-manager/transactions'
    },
    {
      id: 2,
      title: 'Loan approval pending',
      description: 'A home-loan request requires manager approval.',
      time: '12 min ago',
      icon: 'request_quote',
      type: 'approval',
      isRead: false,
      route: '/branch-manager/approvals/loans'
    },
    {
      id: 3,
      title: 'ATM cash is running low',
      description: 'ATM-CHD-002 needs cash replenishment.',
      time: '30 min ago',
      icon: 'local_atm',
      type: 'warning',
      isRead: false,
      route: '/branch-manager/atm'
    },
    {
      id: 4,
      title: 'New customer registered',
      description: 'A new savings account was opened for Pooja Verma.',
      time: '45 min ago',
      icon: 'person_add',
      type: 'customer',
      isRead: true,
      route: '/branch-manager/customers'
    },
    {
      id: 5,
      title: 'System backup completed',
      description: 'The daily branch data backup completed successfully.',
      time: '1 hr ago',
      icon: 'cloud_done',
      type: 'system',
      isRead: true
    }
  ];

  get unreadCount(): number {
    return this.notifications.filter(item => !item.isRead).length;
  }

  markAsRead(notification: DashboardNotificationModel): void {
    notification.isRead = true;
  }

  markAllAsRead(): void {
    this.notifications.forEach(item => {
      item.isRead = true;
    });
  }
}
