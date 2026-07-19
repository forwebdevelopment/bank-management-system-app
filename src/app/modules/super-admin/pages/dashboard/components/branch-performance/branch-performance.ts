import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
} from '@angular/core';
import {
  MatPaginator,
  PageEvent,
} from '@angular/material/paginator';
import {
  BranchPerformanceModel,
  BranchStatus,
} from '../../../../models/branch-performance';

import { MatSort } from '@angular/material/sort';

import { MatTableDataSource } from '@angular/material/table';
import { MatModule } from '../../../../../../shared/material.module';
@Component({
  selector: 'app-branch-performance',
  imports: [MatModule],
  templateUrl: './branch-performance.html',
  styleUrl: './branch-performance.css',
})
export class BranchPerformance  {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  readonly displayedColumns: string[] = [
    'branch',
    'manager',
    'customers',
    'accounts',
    'deposits',
    'revenue',
    'growth',
    'status',
    'actions',
  ];

  readonly branchList: BranchPerformanceModel[] = [
    {
      id: 1,
      branchCode: 'BR001',
      branchName: 'Central City Branch',
      location: 'New Delhi',
      managerName: 'Amit Sharma',
      customers: 4210,
      accounts: 5880,
      deposits: 48000000,
      revenue: 1200000,
      growth: 18.4,
      status: 'Active',
    },
    {
      id: 2,
      branchCode: 'BR002',
      branchName: 'Green Park Branch',
      location: 'New Delhi',
      managerName: 'Neha Verma',
      customers: 3850,
      accounts: 4935,
      deposits: 39200000,
      revenue: 980000,
      growth: 14.2,
      status: 'Active',
    },
    {
      id: 3,
      branchCode: 'BR003',
      branchName: 'Civil Lines Branch',
      location: 'Prayagraj',
      managerName: 'Rahul Mishra',
      customers: 3240,
      accounts: 4150,
      deposits: 31800000,
      revenue: 840000,
      growth: 11.8,
      status: 'Active',
    },
    {
      id: 4,
      branchCode: 'BR004',
      branchName: 'Hazratganj Branch',
      location: 'Lucknow',
      managerName: 'Priya Singh',
      customers: 2980,
      accounts: 3740,
      deposits: 28700000,
      revenue: 720000,
      growth: 9.6,
      status: 'Active',
    },
    {
      id: 5,
      branchCode: 'BR005',
      branchName: 'Andheri East Branch',
      location: 'Mumbai',
      managerName: 'Rohit Mehta',
      customers: 4680,
      accounts: 6210,
      deposits: 57500000,
      revenue: 1480000,
      growth: 22.1,
      status: 'Active',
    },
    {
      id: 6,
      branchCode: 'BR006',
      branchName: 'Park Street Branch',
      location: 'Kolkata',
      managerName: 'Anjali Das',
      customers: 2470,
      accounts: 3015,
      deposits: 24100000,
      revenue: 610000,
      growth: -2.5,
      status: 'Inactive',
    },
    {
      id: 7,
      branchCode: 'BR007',
      branchName: 'MG Road Branch',
      location: 'Bengaluru',
      managerName: 'Suresh Kumar',
      customers: 3980,
      accounts: 5270,
      deposits: 44500000,
      revenue: 1150000,
      growth: 16.7,
      status: 'Active',
    },
  ];

  readonly dataSource =
    new MatTableDataSource<BranchPerformanceModel>(
      this.branchList
    );

  selectedStatus: BranchStatus | 'All' = 'All';

  searchText = '';

  constructor() {
    this.dataSource.filterPredicate = (
      branch: BranchPerformanceModel,
      filter: string
    ): boolean => {
      const filterValue = JSON.parse(filter) as {
        search: string;
        status: BranchStatus | 'All';
      };

      const searchableText = [
        branch.branchCode,
        branch.branchName,
        branch.location,
        branch.managerName,
      ]
        .join(' ')
        .toLowerCase();

      const matchesSearch = searchableText.includes(
        filterValue.search
      );

      const matchesStatus =
        filterValue.status === 'All' ||
        branch.status === filterValue.status;

      return matchesSearch && matchesStatus;
    };
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (
      branch: BranchPerformanceModel,
      columnName: string
    ): string | number => {
      switch (columnName) {
        case 'branch':
          return branch.branchName.toLowerCase();

        case 'manager':
          return branch.managerName.toLowerCase();

        default:
          return branch[
            columnName as keyof BranchPerformanceModel
          ] as string | number;
      }
    };
  }

  applySearch(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.searchText = input.value
      .trim()
      .toLowerCase();

    this.applyCombinedFilter();
  }

  applyStatusFilter(
    status: BranchStatus | 'All'
  ): void {
    this.selectedStatus = status;
    this.applyCombinedFilter();
  }

  clearFilters(): void {
    this.searchText = '';
    this.selectedStatus = 'All';

    this.applyCombinedFilter();
  }

  private applyCombinedFilter(): void {
    this.dataSource.filter = JSON.stringify({
      search: this.searchText,
      status: this.selectedStatus,
    });

    this.dataSource.paginator?.firstPage();
  }

  formatCompactCurrency(value: number): string {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    }

    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)} L`;
    }

    return `₹${value.toLocaleString('en-IN')}`;
  }

  viewBranch(branch: BranchPerformance): void {
    console.log('View branch:', branch);

    // Later:
    // this.router.navigate([
    //   '/super-admin/branches/details',
    //   branch.id
    // ]);
  }

  editBranch(branch: BranchPerformance): void {
    console.log('Edit branch:', branch);

    // Later:
    // this.router.navigate([
    //   '/super-admin/branches/edit',
    //   branch.id
    // ]);
  }

  viewAllBranches(): void {
    console.log('View all branches');

    // Later:
    // this.router.navigate(['/super-admin/branches']);
  }

  trackPageChange(event: PageEvent): void {
    console.log('Page changed:', event);
  }
}
