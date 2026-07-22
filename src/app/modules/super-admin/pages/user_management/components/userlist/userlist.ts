import { Component } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';
import { UserDirectoryEntryModel } from '../../../../models/user-directory-entry.model';

@Component({
  selector: 'app-userlist',
  imports: [MatModule],
  templateUrl: './userlist.html',
  styleUrl: './userlist.scss',
})
export class Userlist {


  displayedColumns: string[] = [
    'employeeId', 'profile', 'fullName', 'email', 
    'mobile', 'role', 'branch', 'status', 
    'lastLogin', 'createdDate', 'actions'
  ];

  // Component local static array hydration matching your dashboard view mock
  dataSource: UserDirectoryEntryModel[] = [
    { employeeId: 'EMP1001', profileUrl: 'assets/user1.jpg', fullName: 'Rajesh Kumar', email: 'rajesh.kumar@bank.com', mobile: '+91 98765 43210', role: 'Branch Manager', branch: 'Main Branch, Mumbai', status: 'Active', lastLogin: 'Today, 09:15 AM', createdDate: '15 Jan 2024' },
    { employeeId: 'EMP1002', profileUrl: 'assets/user2.jpg', fullName: 'Priya Sharma', email: 'priya.sharma@bank.com', mobile: '+91 87654 32109', role: 'Assistant Manager', branch: 'Andheri Branch, Mumbai', status: 'Active', lastLogin: 'Today, 08:42 AM', createdDate: '20 Jan 2024' },
    { employeeId: 'EMP1003', profileUrl: 'assets/user3.jpg', fullName: 'Amit Patel', email: 'amit.patel@bank.com', mobile: '+91 76543 21098', role: 'Relationship Manager', branch: 'Pune Branch', status: 'Active', lastLogin: 'Yesterday, 06:30 PM', createdDate: '25 Jan 2024' },
    { employeeId: 'EMP1004', profileUrl: 'assets/user4.jpg', fullName: 'Sneha Iyer', email: 'sneha.iyer@bank.com', mobile: '+91 65432 10987', role: 'Teller', branch: 'Bangalore Branch', status: 'Active', lastLogin: 'Yesterday, 04:18 PM', createdDate: '30 Jan 2024' },
    { employeeId: 'EMP1005', profileUrl: 'assets/user5.jpg', fullName: 'Vikram Singh', email: 'vikram.singh@bank.com', mobile: '+91 54321 09876', role: 'Operations Officer', branch: 'Hyderabad Branch', status: 'Inactive', lastLogin: '3 Days Ago', createdDate: '05 Feb 2024' },
    { employeeId: 'EMP1006', profileUrl: 'assets/user6.jpg', fullName: 'Kavitha Reddy', email: 'kavitha.reddy@bank.com', mobile: '+91 43210 98765', role: 'Customer Service Rep.', branch: 'Chennai Branch', status: 'Locked', lastLogin: '7 Days Ago', createdDate: '10 Feb 2024' },
    { employeeId: 'EMP1007', profileUrl: 'assets/user7.jpg', fullName: 'Arindam Das', email: 'arindam.das@bank.com', mobile: '+91 32109 87654', role: 'Loan Officer', branch: 'Kolkata Branch', status: 'Active', lastLogin: 'Today, 11:02 AM', createdDate: '15 Jan 2024' },
    { employeeId: 'EMP1008', profileUrl: 'assets/user8.jpg', fullName: 'Mehul Shah', email: 'mehul.shah@bank.com', mobile: '+91 21098 76543', role: 'IT Administrator', branch: 'Ahmedabad Branch', status: 'Active', lastLogin: 'Today, 10:05 AM', createdDate: '20 Feb 2024' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
