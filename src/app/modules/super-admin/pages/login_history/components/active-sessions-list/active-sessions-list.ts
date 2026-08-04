import { Component } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-active-sessions-list',
  imports: [MatModule],
  templateUrl: './active-sessions-list.html',
  styleUrl: './active-sessions-list.scss',
})
export class ActiveSessionsList {
  // Mock data representing the active sessions from the image
  activeSessions = [
    {
      name: 'Rahul Sharma',
      avatarInitials: 'RS',
      branch: 'Connaught Place',
      loginTime: '10:35 AM',
      device: 'desktop',
      duration: '02:45:18',
      status: 'Active'
    },
    {
      name: 'Vikram Patel',
      avatarInitials: 'VP',
      branch: 'Noida Sector 18',
      loginTime: '10:12 AM',
      device: 'desktop',
      duration: '01:32:09',
      status: 'Active'
    },
    {
      name: 'Priya Verma',
      avatarInitials: 'PV',
      branch: 'Janakpuri',
      loginTime: '10:22 AM',
      device: 'mobile',
      duration: '01:15:32',
      status: 'Active'
    },
    {
      name: 'Amit Kumar',
      avatarInitials: 'AK',
      branch: 'Head Office',
      loginTime: '10:18 AM',
      device: 'desktop',
      duration: '03:22:41',
      status: 'Active'
    },
    {
      name: 'Neha Singh',
      avatarInitials: 'NS',
      branch: 'Saket',
      loginTime: '10:15 AM',
      device: 'mobile',
      duration: '00:58:14',
      status: 'Active'
    }
  ];

  // Example function for the terminate action
  terminateSession(user: string) {
    console.log(`Terminating session for ${user}`);
  }
}
