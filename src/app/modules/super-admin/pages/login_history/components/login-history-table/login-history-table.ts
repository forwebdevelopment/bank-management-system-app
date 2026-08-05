import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-login-history-table',
  imports: [MatModule],
  templateUrl: './login-history-table.html',
  styleUrl: './login-history-table.scss',
})
export class LoginHistoryTable {

@Output() export = new EventEmitter<any>()
  // Tracks which row's dropdown is currently open
  activeDropdownIndex: number | null = null;

  // Toggles the dropdown menu for the Actions column
  toggleDropdown(index: number, event: Event) {
    event.stopPropagation(); // Prevents click from bubbling to the window
    if (this.activeDropdownIndex === index) {
      this.activeDropdownIndex = null;
    } else {
      this.activeDropdownIndex = index;
    }
  }

  // Closes the dropdown if the user clicks anywhere else on the screen
  @HostListener('document:click')
  onDocumentClick() {
    this.activeDropdownIndex = null;
  }

  // Mock data based on your image
  tableData = [
    {
      id: 'LOGIN-00012458',
      dateTime: '26/06/2026 10:35:22 AM',
      userName: 'Rahul Sharma',
      avatarInitials: 'RS',
      empId: 'EMP10025',
      role: 'Branch Manager',
      branch: 'Connaught Place',
      ip: '203.89.45.12',
      device: 'desktop',
      browser: 'chrome',
      os: 'windows',
      status: 'Success',
      duration: '02:45:18'
    },
    {
      id: 'LOGIN-00012457',
      dateTime: '26/06/2026 10:22:11 AM',
      userName: 'Priya Verma',
      avatarInitials: 'PV',
      empId: 'EMP10048',
      role: 'Bank Staff',
      branch: 'Janakpuri',
      ip: '192.168.1.45',
      device: 'mobile',
      browser: 'edge',
      os: 'windows',
      status: 'Success',
      duration: '01:15:32'
    },
    {
      id: 'LOGIN-00012456',
      dateTime: '26/06/2026 10:18:05 AM',
      userName: 'Amit Kumar',
      avatarInitials: 'AK',
      empId: 'EMP10012',
      role: 'Super Admin',
      branch: 'Head Office',
      ip: '155.45.67.89',
      device: 'desktop',
      browser: 'chrome',
      os: 'windows',
      status: 'Success',
      duration: '03:22:41'
    },
    {
      id: 'LOGIN-00012455',
      dateTime: '26/06/2026 10:15:44 AM',
      userName: 'Neha Singh',
      avatarInitials: 'NS',
      empId: 'EMP10037',
      role: 'Bank Staff',
      branch: 'Saket',
      ip: '103.21.45.67',
      device: 'mobile',
      browser: 'firefox',
      os: 'android',
      status: 'Failed',
      duration: '00:00:00'
    },
    {
      id: 'LOGIN-00012454',
      dateTime: '26/06/2026 10:12:33 AM',
      userName: 'Vikram Patel',
      avatarInitials: 'VP',
      empId: 'EMP10031',
      role: 'Branch Manager',
      branch: 'Noida Sector 18',
      ip: '203.89.45.88',
      device: 'desktop',
      browser: 'edge',
      os: 'windows',
      status: 'Success',
      duration: '01:32:09'
    },
    {
      id: 'LOGIN-00012453',
      dateTime: '26/06/2026 10:08:19 AM',
      userName: 'Sneha Gupta',
      avatarInitials: 'SG',
      empId: 'EMP10052',
      role: 'Bank Staff',
      branch: 'Dwarka',
      ip: '192.168.1.58',
      device: 'mobile',
      browser: 'chrome',
      os: 'android',
      status: 'Locked',
      duration: '00:00:00'
    },
    {
      id: 'LOGIN-00012452',
      dateTime: '26/06/2026 10:05:10 AM',
      userName: 'Rohit Malhotra',
      avatarInitials: 'RM',
      empId: 'EMP10017',
      role: 'Branch Manager',
      branch: 'Gurgaon Main',
      ip: '103.21.45.11',
      device: 'desktop',
      browser: 'chrome',
      os: 'windows',
      status: 'Active Session',
      duration: '01:05:47'
    }
  ];
}
