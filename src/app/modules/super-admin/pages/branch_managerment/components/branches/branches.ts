import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';
import { BranchData, BranchRecordSchema } from '../../../../models/branches.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-branches',
  imports: [MatModule],
  templateUrl: './branches.html',
  styleUrl: './branches.scss',
})
export class Branches {
 @Output() selectionChanged = new EventEmitter<BranchRecordSchema>();

  // Matches the exact 11 columns array alignment sequence from the mock design
  columnsToDisplay: string[] = [
    'branchCode', 
    'branchName', 
    'branchManager', 
    'city', 
    'state', 
    'phoneNumber', 
    'totalCustomers', 
    'totalAccounts', 
    'status', 
    'createdDate', 
    'actions'
  ];

  dataSource: BranchRecordSchema[] = [];

  ngOnInit(): void {
    this.dataSource = [
      { branchCode: 'BR001', branchName: 'Main Branch', branchManager: 'Rajesh Kumar', city: 'Mumbai', state: 'Maharashtra', phoneNumber: '+91 22 1234 5678', totalCustomers: 12584, totalAccounts: 18753, status: 'Active', createdDate: '15 Jan 2024' },
      { branchCode: 'BR002', branchName: 'Andheri Branch', branchManager: 'Priya Sharma', city: 'Mumbai', state: 'Maharashtra', phoneNumber: '+91 22 2345 6789', totalCustomers: 8753, totalAccounts: 12456, status: 'Active', createdDate: '20 Jan 2024' },
      { branchCode: 'BR003', branchName: 'Pune Branch', branchManager: 'Amit Patel', city: 'Pune', state: 'Maharashtra', phoneNumber: '+91 20 3456 7890', totalCustomers: 6523, totalAccounts: 9876, status: 'Active', createdDate: '25 Jan 2024' },
      { branchCode: 'BR004', branchName: 'Bangalore Branch', branchManager: 'Sneha Iyer', city: 'Bangalore', state: 'Karnataka', phoneNumber: '+91 80 4567 8901', totalCustomers: 9652, totalAccounts: 14256, status: 'Active', createdDate: '30 Jan 2024' },
      { branchCode: 'BR005', branchName: 'Hyderabad Branch', branchManager: 'Vikram Singh', city: 'Hyderabad', state: 'Telangana', phoneNumber: '+91 40 5678 9012', totalCustomers: 7856, totalAccounts: 11365, status: 'Active', createdDate: '05 Feb 2024' },
      { branchCode: 'BR006', branchName: 'Chennai Branch', branchManager: 'Kavitha Reddy', city: 'Chennai', state: 'Tamil Nadu', phoneNumber: '+91 44 6789 0123', totalCustomers: 5632, totalAccounts: 8965, status: 'Inactive', createdDate: '10 Feb 2024' },
      { branchCode: 'BR007', branchName: 'Kolkata Branch', branchManager: 'Arindam Das', city: 'Kolkata', state: 'West Bengal', phoneNumber: '+91 33 7890 1234', totalCustomers: 6321, totalAccounts: 9753, status: 'Active', createdDate: '15 Feb 2024' },
      { branchCode: 'BR008', branchName: 'Ahmedabad Branch', branchManager: 'Mehul Shah', city: 'Ahmedabad', state: 'Gujarat', phoneNumber: '+91 79 8901 2345', totalCustomers: 4856, totalAccounts: 7521, status: 'Inactive', createdDate: '20 Feb 2024' }
    ];
  }

  onBranchRowSelected(row: BranchRecordSchema): void {
    this.selectionChanged.emit(row);
  }
}
