import { Component, inject , ChangeDetectorRef } from '@angular/core';
import { MatModule } from '../../../../shared/material.module';
import { TopbarMessage, TopbarNotification } from '../../models/top.model';
import { Router } from '@angular/router';
import { SharedService } from '../../../../shared/shared.service';

@Component({
  selector: 'app-topbar',
  imports: [MatModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {

  sharedService = inject(SharedService)

    constructor(private router: Router , private cd:ChangeDetectorRef ) {}
    managerName = 'Rahul Sharma';
  managerRole = 'Branch Manager';
  branchName = 'Chandigarh Branch 9';

  profileImage =
    'https://randomuser.me/api/portraits/men/32.jpg';

  searchText = '';

     

  notifications: TopbarNotification[] = [
    {
      id: 1,
      title: 'Loan approval pending',
      message: 'A home loan application requires approval.',
      time: '5 min ago',
      icon: 'approval',
      read: false
    },
    {
      id: 2,
      title: 'ATM card request',
      message: 'Three ATM card requests are waiting.',
      time: '20 min ago',
      icon: 'credit_card',
      read: false
    },
    {
      id: 3,
      title: 'Cash position updated',
      message: 'The branch cash position has been updated.',
      time: '1 hour ago',
      icon: 'payments',
      read: true
    }
  ];

  messages: TopbarMessage[] = [
    {
      id: 1,
      sender: 'Amit Verma',
      message: 'Please review today’s transaction report.',
      time: '10 min ago',
      read: false
    },
    {
      id: 2,
      sender: 'Neha Singh',
      message: 'Customer verification has been completed.',
      time: '30 min ago',
      read: false
    },
    {
      id: 3,
      sender: 'Rohit Sharma',
      message: 'The account-opening documents are ready.',
      time: '1 hour ago',
      read: true
    }
  ];



  get unreadNotificationCount(): number {
    return this.notifications.filter(notification => !notification.read)
      .length;
  }

  get unreadMessageCount(): number {
    return this.messages.filter(message => !message.read).length;
  }

  search(): void {
    const value = this.searchText.trim();

    if (!value) {
      return;
    }

    this.router.navigate(['/branch-manager/search'], {
      queryParams: {
        q: value
      }
    });
  }

  clearSearch(): void {
    this.searchText = '';
  }

  markNotificationAsRead(notification: TopbarNotification): void {
    notification.read = true;
  }

  markMessageAsRead(message: TopbarMessage): void {
    message.read = true;
  }

  viewAllNotifications(): void {
    this.router.navigate(['/branch-manager/notifications']);
  }

  openProfile(): void {
    this.router.navigate(['/branch-manager/profile']);
  }

  openSettings(): void {
    this.router.navigate(['/branch-manager/settings']);
  }

  changePassword(): void {
    this.router.navigate(['/branch-manager/profile/change-password']);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.router.navigate(['/login']);
  }

  changetime(){
    setInterval(() => {
        this.sharedService.currentDate = new Date()
        this.cd.detectChanges()
    }, 1000);
  }
}
