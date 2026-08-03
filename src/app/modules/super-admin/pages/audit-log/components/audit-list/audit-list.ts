import { Component, EventEmitter, Output } from '@angular/core';
import { AuditFilterState, FullAuditLog } from '../../../../models/audit_logs';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-audit-list',
  imports: [MatModule],
  templateUrl: './audit-list.html',
  styleUrl: './audit-list.scss',
})
export class AuditList {




  // Outer event emitter to signal Section 3's main table to process live queries
  @Output() onFilterChange = new EventEmitter<AuditFilterState>();

  // Central Object caching localized operational inputs properties
  filterState!: AuditFilterState;




  displayedColumns: string[] = [
    'logId', 'dateTime', 'userName', 'employeeId', 'role', 
    'branch', 'module', 'actionPerformed', 'status', 'severity', 'actions'
  ];

  ngOnInit(): void {
    this.resetFilterState(false); // Silent initial load setup
  }

  // Mutates isolated properties matching field definitions dynamically
  updateFilterField(field: keyof AuditFilterState, event: Event): void {
    const element = event.target as HTMLInputElement | HTMLSelectElement;
    if (this.filterState) {
      this.filterState[field] = element.value;
    }
  }

  // Erases active memory parameters reverting fields flatly back to baseline 'All' configurations
  resetFilterState(emitUpdate: boolean = true): void {
    this.filterState = {
      userName: '',
      employeeId: '',
      userRole: 'All',
      branch: 'All',
      module: 'All',
      actionType: 'All',
      severity: 'All',
      dateRange: '',
      timeRange: '',
      ipAddress: '',
      status: 'All'
    };

    if (emitUpdate) {
      this.onFilterChange.emit(this.filterState);
    }
  }


  // Exact data mirroring the rows shown on screen
  paginatedData: FullAuditLog[] = [
    { id: '1', logId: 'LOG-125764', date: '26 Jun 2026', time: '05:31:24 PM', userName: 'Rahul Sharma', avatarUrl: 'https://unsplash.com', employeeId: 'EMP00125', userRole: 'Branch Manager', branch: 'Mumbai Main', module: 'Customer Management', actionType: 'Update Customer', status: 'Success', severity: 'Medium' },
    { id: '2', logId: 'LOG-125763', date: '26 Jun 2026', time: '05:28:11 PM', userName: 'Priya Patel', avatarUrl: 'https://unsplash.com', employeeId: 'EMP00234', userRole: 'Teller', branch: 'Delhi Connaught', module: 'Account Management', actionType: 'Create Account', status: 'Success', severity: 'Low' },
    { id: '3', logId: 'LOG-125762', date: '26 Jun 2026', time: '05:25:09 PM', userName: 'Amit Kumar', avatarUrl: 'https://unsplash.com', employeeId: 'EMP00098', userRole: 'Loan Officer', branch: 'Bangalore MG Road', module: 'Loan Management', actionType: 'Approve Loan', status: 'Success', severity: 'High' },
    { id: '4', logId: 'LOG-125761', date: '26 Jun 2026', time: '05:20:45 PM', userName: 'Sneha Iyer', avatarUrl: 'https://unsplash.com', employeeId: 'EMP00156', userRole: 'Operations', branch: 'Chennai Central', module: 'Reports', actionType: 'Export Report', status: 'Success', severity: 'Low' },
    { id: '5', logId: 'LOG-125760', date: '26 Jun 2026', time: '05:18:37 PM', userName: 'Vikram Singh', avatarUrl: 'https://unsplash.com', employeeId: 'EMP00077', userRole: 'Admin', branch: 'Head Office', module: 'User Management', actionType: 'Create User', status: 'Success', severity: 'Medium' },
    { id: '6', logId: 'LOG-125759', date: '26 Jun 2026', time: '05:15:22 PM', userName: 'Neha Gupta', avatarUrl: 'https://unsplash.com', employeeId: 'EMP00189', userRole: 'Compliance Officer', branch: 'Pune Kalyani', module: 'System Settings', actionType: 'Update Settings', status: 'Warning', severity: 'High' }
  ];

  selectedLogId: string = '1';

  selectLogRecord(id: string) { this.selectedLogId = id; }
  // Transmits the current search criteria payload to the parent ledger
  emitSearchQuery(): void {
    this.onFilterChange.emit({ ...this.filterState });
  }

  

}
