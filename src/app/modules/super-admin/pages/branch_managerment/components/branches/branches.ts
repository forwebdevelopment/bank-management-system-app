import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';
import { BranchData, BranchRecord, BranchRecordSchema } from '../../../../models/branches.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-branches',
  imports: [MatModule],
  templateUrl: './branches.html',
  styleUrl: './branches.scss',
})
export class Branches {
 // Model data variables
  searchQuery: string = '';
  selectedCity: string = 'All Cities';
  selectedState: string = 'All States';
  selectedStatus: string = 'All Status';
  selectedManager: string = 'All Managers';

  // Toggle flags for custom ul/li overlay panel dropdown nodes
  activeDropdown: 'city' | 'state' | 'status' | 'manager' | null = null;

  // Mockup mock dataset list arrays
  citiesList: string[] = ['All Cities', 'Mumbai', 'Andheri', 'Pune', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad'];
  statesList: string[] = ['All States', 'Maharashtra', 'Karnataka', 'Telangana', 'Tamil Nadu', 'West Bengal', 'Gujarat'];
  statusList: string[] = ['All Status', 'Active', 'Inactive'];
  managersList: string[] = ['All Managers', 'Rajesh Kumar', 'Priya Sharma', 'Amit Patel', 'Sneha Iyer', 'Vikram Singh', 'Kavitha Reddy'];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  // Global listener tracking clicks to close any open dropdowns when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeAllDropdowns();
    }
  }

  toggleDropdown(dropdownName: 'city' | 'state' | 'status' | 'manager', event: MouseEvent): void {
    event.stopPropagation(); // Stops immediate bubbling events
    if (this.activeDropdown === dropdownName) {
      this.activeDropdown = null;
    } else {
      this.activeDropdown = dropdownName;
    }
  }

  selectOption(type: 'city' | 'state' | 'status' | 'manager', value: string): void {
    if (type === 'city') this.selectedCity = value;
    if (type === 'state') this.selectedState = value;
    if (type === 'status') this.selectedStatus = value;
    if (type === 'manager') this.selectedManager = value;
    this.closeAllDropdowns();
  }

  closeAllDropdowns(): void {
    this.activeDropdown = null;
  }

  onSearchSubmit(): void {
    console.log('Filters execution submitted payload:', {
      query: this.searchQuery,
      city: this.selectedCity,
      state: this.selectedState,
      status: this.selectedStatus,
      manager: this.selectedManager
    });
  }

  onResetFilters(): void {
    this.searchQuery = '';
    this.selectedCity = 'All Cities';
    this.selectedState = 'All States';
    this.selectedStatus = 'All Status';
    this.selectedManager = 'All Managers';
    this.closeAllDropdowns();
  }


  // Column definitions mapping matching the exact image grid structure
  displayedColumns: string[] = [
    'code', 
    'name', 
    'manager', 
    'city', 
    'state', 
    'phone', 
    'customers', 
    'accounts', 
    'status', 
    'createdDate', 
    'actions'
  ];

  // High-density mockup records tracking dataset array matching the image matrix
  branchDataSource: BranchRecord[] = [
    { code: 'BR001', name: 'Main Branch', managerName: 'Rajesh Kumar', managerAvatar: 'assets/mgr1.png', city: 'Mumbai', state: 'Maharashtra', phone: '+91 22 1234 5678', totalCustomers: '12,584', totalAccounts: '18,753', status: 'Active', createdDate: '15 Jan 2024' },
    { code: 'BR002', name: 'Andheri Branch', managerName: 'Priya Sharma', managerAvatar: 'assets/mgr2.png', city: 'Mumbai', state: 'Maharashtra', phone: '+91 22 2345 6789', totalCustomers: '8,753', totalAccounts: '12,456', status: 'Active', createdDate: '20 Jan 2024' },
    { code: 'BR003', name: 'Pune Branch', managerName: 'Amit Patel', managerAvatar: 'assets/mgr3.png', city: 'Pune', state: 'Maharashtra', phone: '+91 20 3456 7890', totalCustomers: '6,523', totalAccounts: '9,876', status: 'Active', createdDate: '25 Jan 2024' },
    { code: 'BR004', name: 'Bangalore Branch', managerName: 'Sneha Iyer', managerAvatar: 'assets/mgr4.png', city: 'Bangalore', state: 'Karnataka', phone: '+91 80 4567 8901', totalCustomers: '9,652', totalAccounts: '14,256', status: 'Active', createdDate: '30 Jan 2024' },
    { code: 'BR005', name: 'Hyderabad Branch', managerName: 'Vikram Singh', managerAvatar: 'assets/mgr5.png', city: 'Hyderabad', state: 'Telangana', phone: '+91 40 5678 9012', totalCustomers: '7,656', totalAccounts: '11,365', status: 'Active', createdDate: '05 Feb 2024' },
    { code: 'BR006', name: 'Chennai Branch', managerName: 'Kavitha Reddy', managerAvatar: 'assets/mgr6.png', city: 'Chennai', state: 'Tamil Nadu', phone: '+91 44 6789 0123', totalCustomers: '5,632', totalAccounts: '8,965', status: 'Inactive', createdDate: '10 Feb 2024' },
    { code: 'BR007', name: 'Kolkata Branch', managerName: 'Arindam Das', managerAvatar: 'assets/mgr7.png', city: 'Kolkata', state: 'West Bengal', phone: '+91 33 7890 1234', totalCustomers: '6,321', totalAccounts: '9,753', status: 'Active', createdDate: '15 Feb 2024' },
    { code: 'BR008', name: 'Ahmedabad Branch', managerName: 'Mehul Shah', managerAvatar: 'assets/mgr8.png', city: 'Ahmedabad', state: 'Gujarat', phone: '+91 79 8901 2345', totalCustomers: '4,856', totalAccounts: '7,521', status: 'Inactive', createdDate: '20 Feb 2024' }
  ];





  onViewDetails(branch: BranchRecord): void {
    console.log('Inspecting target branch metadata records:', branch);
  }

  onEditBranch(code: string): void {
    console.log(`Modify records operation active for: ${code}`);
  }
}
