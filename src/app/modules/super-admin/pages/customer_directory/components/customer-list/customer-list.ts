import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';
import { CustomerElement } from '../../../../models/customerlist.model';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from '../../../../services/customer';

@Component({
  selector: 'app-customer-list',
  imports: [MatModule],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.scss',
})
export class CustomerList {
  @Output() customerSelected = new EventEmitter<CustomerElement>();
  _custService = inject(CustomerService)
   CUSTOMER_DATA: CustomerElement[] = [
  { customerId: 'CUST100001', profilePic: 'https://pravatar.cc', fullName: 'Rohit Sharma', mobileNumber: '+91 98765 43210', email: 'rohit.sharma@example.com', branch: 'Mumbai Main Branch', totalAccounts: 3, totalBalance: 845230.50, kycStatus: 'Verified', customerStatus: 'Active', registrationDate: '25 May 2026' },
  { customerId: 'CUST100002', profilePic: 'https://pravatar.cc', fullName: 'Priya Patel', mobileNumber: '+91 98234 56789', email: 'priya.patel@example.com', branch: 'Delhi Connaught Place', totalAccounts: 2, totalBalance: 325150.00, kycStatus: 'Verified', customerStatus: 'Active', registrationDate: '24 May 2026' },
  { customerId: 'CUST100003', profilePic: 'https://pravatar.cc', fullName: 'Amit Kumar', mobileNumber: '+91 91234 56789', email: 'amit.kumar@example.com', branch: 'Bangalore MG Road', totalAccounts: 4, totalBalance: 1275890.75, kycStatus: 'Pending', customerStatus: 'Active', registrationDate: '23 May 2026' },
  { customerId: 'CUST100004', profilePic: 'https://pravatar.cc', fullName: 'Neha Singh', mobileNumber: '+91 99887 66554', email: 'neha.singh@example.com', branch: 'Hyderabad Banjara Hills', totalAccounts: 2, totalBalance: 215300.25, kycStatus: 'Verified', customerStatus: 'Inactive', registrationDate: '22 May 2026' },
  { customerId: 'CUST100005', profilePic: 'https://pravatar.cc', fullName: 'Suresh Reddy', mobileNumber: '+91 90000 12345', email: 'suresh.reddy@example.com', branch: 'Chennai T Nagar', totalAccounts: 1, totalBalance: 95500.00, kycStatus: 'Rejected', customerStatus: 'Suspended', registrationDate: '21 May 2026' },
  { customerId: 'CUST100007', profilePic: 'https://pravatar.cc', fullName: 'Rohit Sharma', mobileNumber: '+91 98765 43210', email: 'rohit.sharma@example.com', branch: 'Mumbai Main Branch', totalAccounts: 3, totalBalance: 845230.50, kycStatus: 'Verified', customerStatus: 'Active', registrationDate: '25 May 2026' },
  { customerId: 'CUST100008', profilePic: 'https://pravatar.cc', fullName: 'Priya Patel', mobileNumber: '+91 98234 56789', email: 'priya.patel@example.com', branch: 'Delhi Connaught Place', totalAccounts: 2, totalBalance: 325150.00, kycStatus: 'Verified', customerStatus: 'Active', registrationDate: '24 May 2026' },
  { customerId: 'CUST100009', profilePic: 'https://pravatar.cc', fullName: 'Amit Kumar', mobileNumber: '+91 91234 56789', email: 'amit.kumar@example.com', branch: 'Bangalore MG Road', totalAccounts: 4, totalBalance: 1275890.75, kycStatus: 'Pending', customerStatus: 'Active', registrationDate: '23 May 2026' },
  { customerId: 'CUST100010', profilePic: 'https://pravatar.cc', fullName: 'Neha Singh', mobileNumber: '+91 99887 66554', email: 'neha.singh@example.com', branch: 'Hyderabad Banjara Hills', totalAccounts: 2, totalBalance: 215300.25, kycStatus: 'Verified', customerStatus: 'Inactive', registrationDate: '22 May 2026' },
 ];


displayedColumns: string[] = [
    'customerId', 'profile', 'fullName', 'mobileNumber', 
    'email', 'branch', 'totalAccounts', 'totalBalance', 
    'kycStatus', 'customerStatus', 'registrationDate', 'actions'
  ];
filterModel = {
  customerId: '',
  fullName: '',
  mobileNumber: '',
  email: '',
  branch: '',
  accountType: '',
  customerStatus: '',
  kycStatus: ''
};

// Update your dynamic dataSource variable to reference a Material Data Source array pipeline
dataSource = new MatTableDataSource<CustomerElement>(this.CUSTOMER_DATA);
   onViewCustomer(customer: CustomerElement) {
    this.customerSelected.emit(customer);
  }

  applyDirectoryFilters(event?: Event) {
  if (event) {
    event.preventDefault(); // Blocks standard HTML form page redirects
  }

  // Filter matrix parsing fields line-by-line across baseline datasets
  const filteredResult = this.CUSTOMER_DATA.filter(customer => {
    
    // 1. Matcher: Customer ID
    if (this.filterModel.customerId && !customer.customerId.toLowerCase().includes(this.filterModel.customerId.toLowerCase().trim())) {
      return false;
    }

    // 2. Matcher: Full Name
    if (this.filterModel.fullName && !customer.fullName.toLowerCase().includes(this.filterModel.fullName.toLowerCase().trim())) {
      return false;
    }

    // 3. Matcher: Mobile Number (Strips line whitespaces to ensure comparison accuracy)
    if (this.filterModel.mobileNumber && !customer.mobileNumber.replace(/\s+/g, '').includes(this.filterModel.mobileNumber.trim())) {
      return false;
    }

    // 4. Matcher: Email Address
    if (this.filterModel.email && !customer.email.toLowerCase().includes(this.filterModel.email.toLowerCase().trim())) {
      return false;
    }

    // 5. Dropdown Selection Matcher: Branch
    if (this.filterModel.branch && customer.branch !== this.filterModel.branch) {
      return false;
    }

    // 6. Dropdown Selection Matcher: Customer Status
    if (this.filterModel.customerStatus && customer.customerStatus !== this.filterModel.customerStatus) {
      return false;
    }

    // 7. Dropdown Selection Matcher: KYC Status
    if (this.filterModel.kycStatus && customer.kycStatus !== this.filterModel.kycStatus) {
      return false;
    }

    return true; // Keep row if all lookups match or filter keys are empty strings
  });

  // Overrides the active target array layout data grid
  this.dataSource.data = filteredResult;

  // Rewinds paginator index blocks back to index page 1
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}


resetDirectoryFilters() {
  this.filterModel = {
    customerId: '',
    fullName: '',
    mobileNumber: '',
    email: '',
    branch: '',
    accountType: '',
    customerStatus: '',
    kycStatus: ''
  };


  this.dataSource.data = this.CUSTOMER_DATA;

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }

  
}

setDropdownValue(field: string, value: string, toggleElementId: string) {

  (this.filterModel as any)[field] = value;
  

  const checkboxToggle = document.getElementById(toggleElementId) as HTMLInputElement;
  if (checkboxToggle) {
    checkboxToggle.checked = false;
  }
}

/**
 * Converts the active, filtered dataset into a CSV file and downloads it.
 */
exportFilteredData(): void {
  // 1. Grab the current filtered records from your active data source
  // If using standard MatTableDataSource use: this.dataSource.filteredData or this.dataSource.data
  const recordsToExport = this.dataSource.data;

  if (!recordsToExport || recordsToExport.length === 0) {
    alert('No data available to export.');
    return;
  }

  // 2. Define headers exactly matching your dashboard layout
  const headers = [
    'Customer ID', 
    'Full Name', 
    'Mobile Number', 
    'Email Address', 
    'Branch', 
    'Total Accounts', 
    'Total Balance', 
    'KYC Status', 
    'Customer Status', 
    'Registration Date'
  ];

  // 3. Map rows and escape data string fields safely to prevent broken spreadsheet fields
  const csvRows = recordsToExport.map(customer => {
    return [
      this.escapeCsvValue(customer.customerId),
      this.escapeCsvValue(customer.fullName),
      this.escapeCsvValue(customer.mobileNumber),
      this.escapeCsvValue(customer.email),
      this.escapeCsvValue(customer.branch),
      customer.totalAccounts,
      customer.totalBalance, // Numerical value
      this.escapeCsvValue(customer.kycStatus),
      this.escapeCsvValue(customer.customerStatus),
      this.escapeCsvValue(customer.registrationDate)
    ].join(','); // Delimit entries using commas
  });

  // 4. Assemble full structure joining header configurations with row blocks
  const csvContent = [headers.join(','), ...csvRows].join('\n');

  // 5. Generate hidden operational anchor DOM elements to pipe download triggers out to browser frames
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    
    // Generates a smart timestamped file layout identification name string
    const timestamp = new Date().toISOString().slice(0,10);
    link.setAttribute('download', `customer_directory_export_${timestamp}.csv`);
    
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

/**
 * Structural helper to escape strings containing commas, quotes, or newlines.
 */
private escapeCsvValue(val: any): string {
  if (val === null || val === undefined) return '';
  let stringValue = val.toString();
  
  // If the text contains commas, double quotes, or returns, escape them inside double-quotes
  if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
    stringValue = stringValue.replace(/"/g, '""');
    return `"${stringValue}"`;
  }
  return stringValue;
}


downloadPdf(cutomer:any){
 this._custService.downloadProfileAsPdf(cutomer)
}

}
