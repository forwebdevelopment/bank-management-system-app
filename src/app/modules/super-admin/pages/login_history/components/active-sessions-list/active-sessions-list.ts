import { Component } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';
import { ActiveSessionItem } from '../../../../models/login';

@Component({
  selector: 'app-active-sessions-list',
  imports: [MatModule],
  templateUrl: './active-sessions-list.html',
  styleUrl: './active-sessions-list.scss',
})
export class ActiveSessionsList {
  
  // Table columns definition mapped matching your exact image layout order
  displayedColumns: string[] = ['user', 'branch', 'loginTime', 'device', 'duration', 'status', 'action'];
  
  // Simulated reactive records array list to iterate over with the loop
  sessionDataSource: ActiveSessionItem[] = [
    { avatarUrl: 'assets/user1.png', userName: 'Rahul Sharma', branch: 'Connaught Place', loginTime: '10:35 AM', deviceIcon: 'computer', duration: '02:45:18', status: 'Active' },
    { avatarUrl: 'assets/user2.png', userName: 'Vikram Patel', branch: 'Noida Sector 18', loginTime: '10:12 AM', deviceIcon: 'computer', duration: '01:32:09', status: 'Active' },
    { avatarUrl: 'assets/user3.png', userName: 'Priya Verma', branch: 'Janakpuri', loginTime: '10:22 AM', deviceIcon: 'smartphone', duration: '01:15:32', status: 'Active' },
    { avatarUrl: 'assets/user4.png', userName: 'Amit Kumar', branch: 'Head Office', loginTime: '10:18 AM', deviceIcon: 'computer', duration: '03:22:41', status: 'Active' },
    { avatarUrl: 'assets/user5.png', userName: 'Neha Singh', branch: 'Saket', loginTime: '10:15 AM', deviceIcon: 'smartphone', duration: '00:58:14', status: 'Active' }
  ];

  constructor() {}

  ngOnInit(): void {}

  onTerminateSession(user: string): void {
    console.log(`Terminating user session for: ${user}`);
  }
}
