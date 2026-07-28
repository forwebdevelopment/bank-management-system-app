import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { AccountRecord, FilterCriteria } from '../../../../models/account_directory';
import { MatModule } from '../../../../../../shared/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-account-dire-account-list',
  imports: [MatModule],
  templateUrl: './account-dire-account-list.html',
  styleUrl: './account-dire-account-list.scss',
})
export class AccountDireAccountList {

  @Input() activeFilters?: FilterCriteria;
  @Output() viewAccount = new EventEmitter<AccountRecord|null>();
  private visibleRowIds = new Set<string>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Output() filtersChanged = new EventEmitter<FilterCriteria>();


  


  // Dropdown visibility states to handle dynamic menu open/close safely
  activeDropdown: string | null = null;

  // Selected Label values to show on trigger fields
  selectedBranchLabel = 'All Branches';
  selectedTypeLabel = 'All Account Types';
  selectedStatusLabel = 'All Statuses';
  selectedCurrencyLabel = 'All Currencies';

  displayedColumns: string[] = [
    'accountNumber', 'customerName', 'customerId', 'branch',
    'accountType', 'availableBalance', 'currency', 'status',
    'openedDate', 'lastTransaction', 'actions'
  ];


  // Core filter criteria data binding model object
  filters: FilterCriteria = {
    accountNumber: '',
    customerName: '',
    customerId: '',
    branch: '',
    accountType: '',
    status: '',
    currency: ''
  };

  toggleDropdown(dropdownName: string, event: Event): void {
    event.stopPropagation();
    this.activeDropdown = this.activeDropdown === dropdownName ? null : dropdownName;

    // Global window handler logic to close custom floating lists if user clicks away
    if (this.activeDropdown) {
      const closeFn = () => {
        this.activeDropdown = null;
        window.removeEventListener('click', closeFn);
      };
      window.addEventListener('click', closeFn);
    }
  }

  selectOption(field: keyof FilterCriteria, value: string, label: string): void {
    this.filters[field] = value;

    // Assign localized field template text strings
    if (field === 'branch') this.selectedBranchLabel = label;
    if (field === 'accountType') this.selectedTypeLabel = label;
    if (field === 'status') this.selectedStatusLabel = label;
    if (field === 'currency') this.selectedCurrencyLabel = label;

    this.activeDropdown = null; // Autoclose list
  }

  onSearch(): void {
    // Emit active filter criteria state to parent orchestrators
    this.filtersChanged.emit({ ...this.filters });
  }

  onReset(): void {
    this.filters = {
      accountNumber: '',
      customerName: '',
      customerId: '',
      branch: '',
      accountType: '',
      status: '',
      currency: ''
    };
    this.selectedBranchLabel = 'All Branches';
    this.selectedTypeLabel = 'All Account Types';
    this.selectedStatusLabel = 'All Statuses';
    this.selectedCurrencyLabel = 'All Currencies';

    this.filtersChanged.emit({ ...this.filters });
  }




  public dataSource: AccountRecord[] = [
    { accountNumber: '1010 2345 6789', customerName: 'Rohan Sharma', customerId: 'CUST000123', branch: 'Connaught Place', accountType: 'Savings Account', availableBalance: 245678.50, currency: 'INR', status: 'Active', openedDate: '15/01/2024', lastTransaction: '26/06/2026 10:24 AM' },
    { accountNumber: '1010 2345 6790', customerName: 'Priya Mehta', customerId: 'CUST000456', branch: 'Koramangala', accountType: 'Current Account', availableBalance: 1280450.00, currency: 'INR', status: 'Active', openedDate: '22/02/2024', lastTransaction: '26/06/2026 09:15 AM' },
    { accountNumber: '1010 2345 6791', customerName: 'Amit Verma', customerId: 'CUST000789', branch: 'Bandra West', accountType: 'Fixed Deposit', availableBalance: 500000.00, currency: 'INR', status: 'Active', openedDate: '10/03/2024', lastTransaction: '25/06/2026 04:30 PM' },
    { accountNumber: '1010 2345 6792', customerName: 'Neha Kapoor', customerId: 'CUST001234', branch: 'Connaught Place', accountType: 'Recurring Deposit', availableBalance: 125000.00, currency: 'INR', status: 'Frozen', openedDate: '05/04/2024', lastTransaction: '20/06/2024 11:45 AM' },
    { accountNumber: '1010 2345 6793', customerName: 'Vikram Singh', customerId: 'CUST001567', branch: 'Indiranagar', accountType: 'Savings Account', availableBalance: 56780.90, currency: 'INR', status: 'Dormant', openedDate: '18/06/2023', lastTransaction: '10/03/2026 02:20 PM' },
    { accountNumber: '1010 2345 6794', customerName: 'Anjali Desai', customerId: 'CUST001890', branch: 'Salt Lake', accountType: 'Current Account', availableBalance: 0.00, currency: 'INR', status: 'Closed', openedDate: '30/11/2022', lastTransaction: '15/12/2024 03:10 PM' }
  ];
  // Hardcoded mock values extracted verbatim from your visual dataset image panel
  // private rawData: AccountRecord[] = [
  //   { accountNumber: '1010 2345 6789', customerName: 'Rohan Sharma', customerId: 'CUST000123', branch: 'Connaught Place', branchKey: 'connaught-place', accountType: 'Savings Account', accountTypeKey: 'savings', availableBalance: '₹ 2,45,678.50', currency: 'INR', status: 'active', openedDate: '15/01/2024', lastTransaction: '26/06/2026 10:24 AM' },
  //   { accountNumber: '1010 2345 6790', customerName: 'Priya Mehta', customerId: 'CUST000456', branch: 'Koramangala', branchKey: 'koramangala', accountType: 'Current Account', accountTypeKey: 'current', availableBalance: '₹ 12,80,450.00', currency: 'INR', status: 'active', openedDate: '22/02/2024', lastTransaction: '26/06/2026 09:15 AM' },
  //   { accountNumber: '1010 2345 6791', customerName: 'Amit Verma', customerId: 'CUST000789', branch: 'Bandra West', branchKey: 'bandra-west', accountType: 'Fixed Deposit', accountTypeKey: 'fixed', availableBalance: '₹ 5,00,000.00', currency: 'INR', status: 'active', openedDate: '10/03/2024', lastTransaction: '25/06/2026 04:30 PM' },
  //   { accountNumber: '1010 2345 6792', customerName: 'Neha Kapoor', customerId: 'CUST001234', branch: 'Connaught Place', branchKey: 'connaught-place', accountType: 'Recurring Deposit', accountTypeKey: 'recurring', availableBalance: '₹ 1,25,000.00', currency: 'INR', status: 'frozen', openedDate: '05/04/2024', lastTransaction: '20/06/2024 11:45 AM' },
  //   { accountNumber: '1010 2345 6793', customerName: 'Vikram Singh', customerId: 'CUST001567', branch: 'Indiranagar', branchKey: 'indiranagar', accountType: 'Savings Account', accountTypeKey: 'savings', availableBalance: '₹ 56,780.90', currency: 'INR', status: 'dormant', openedDate: '18/06/2023', lastTransaction: '10/03/2026 02:20 PM' },
  //   { accountNumber: '1010 2345 6794', customerName: 'Anjali Desai', customerId: 'CUST001890', branch: 'Salt Lake', branchKey: 'salt-lake', accountType: 'Current Account', accountTypeKey: 'current', availableBalance: '₹ 0.00', currency: 'INR', status: 'closed', openedDate: '30/11/2022', lastTransaction: '15/12/2024 03:10 PM' }
  // ];

  //  this.dataSource = new MatTableDataSource<AccountRecord>(this.dataSource);

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.setupCustomFilterEngine();
  // }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['activeFilters'] && this.activeFilters) {
      // Stringify conditions payload cleanly to pass into Angular Material filter predicates
      //  this.dataSource.filter = JSON.stringify(this.activeFilters);
    }
  }

  private setupCustomFilterEngine(): void {
    // this.dataSource.filterPredicate = (data: AccountRecord, filterJson: string): boolean => {
    //   const criteria: FilterCriteria = JSON.parse(filterJson);

    //   const matchAcc = !criteria.accountNumber || data.accountNumber.replace(/\s/g, '').includes(criteria.accountNumber.replace(/\s/g, ''));
    //   const matchName = !criteria.customerName || data.customerName.toLowerCase().includes(criteria.customerName.toLowerCase());
    //   const matchId = !criteria.customerId || data.customerId.toLowerCase().includes(criteria.customerId.toLowerCase());
    //   const matchBranch = !criteria.branch || data.branchKey === criteria.branch;
    //   const matchType = !criteria.accountType || data.accountTypeKey === criteria.accountType;
    //   const matchStatus = !criteria.status || data.status === criteria.status;
    //   const matchCurrency = !criteria.currency || data.currency.toLowerCase() === criteria.currency.toLowerCase();

    //   return matchAcc && matchName && matchId && matchBranch && matchType && matchStatus && matchCurrency;
    // };
  }

  // Row view click events
  onViewRecord(record: AccountRecord): void { console.log('Viewing customer profile:', record.customerName); }
  onEditRecord(record: AccountRecord): void { console.log('Editing details profile:', record.accountNumber); }
  onManageServices(record: AccountRecord): void { console.log('Configuring active profile tools:', record.customerId); }

  accounNumber!:string
   toggleRowVisibility(record: AccountRecord) {
    const id = record.accountNumber;

    if(this.accounNumber!=id){
       this.visibleRowIds.delete(this.accounNumber); 
    }
    this.accounNumber = id;
    if (this.visibleRowIds.has(id)) {
      this.visibleRowIds.delete(id); // Flip to hidden state
      this.viewAccount.emit(null)
    } else {
      this.visibleRowIds.add(id);    // Flip to visible state
      this.viewAccount.emit(record); // Open up profile drawer panels
    }
  }
   isRowVisible(accountNumber: string): boolean {
    return this.visibleRowIds.has(accountNumber);
  }
}
