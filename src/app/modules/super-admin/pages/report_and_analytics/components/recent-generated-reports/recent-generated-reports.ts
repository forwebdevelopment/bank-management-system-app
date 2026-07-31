import { Component } from '@angular/core';
import { ReportRecordModel } from '../../../../models/report_analytics';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-recent-generated-reports',
  imports: [MatModule],
  templateUrl: './recent-generated-reports.html',
  styleUrl: './recent-generated-reports.scss',
})
export class RecentGeneratedReports {
    displayedColumns: string[] = ['name', 'type', 'generatedBy', 'date', 'format', 'status', 'actions'];
  
  // Entire local server mock array (Simulating 125 total logs)
  allReports: ReportRecordModel[] = [];
  
  // Data source bound directly to the <table mat-table [dataSource]="pagedDataSource">
  pagedDataSource: ReportRecordModel[] = [];

  // Paginator State Parameters
  totalItems: number = 125;
  pageSize: number = 10;
  currentPage: number = 1;
  totalPages: number = 13;

  constructor() { }

  ngOnInit(): void {
    this.generateMockDatabase();
    this.updateDisplayedRows();
  }

  // Generates 125 mock data reports programmatically
  private generateMockDatabase(): void {
    const baselineRecords: Partial<ReportRecordModel>[] = [
      { name: 'Banking_Audit_v1', type: 'Audit Logs', format: 'PDF' },
      { name: 'Mumbai_Deposits_May', type: 'Deposit Report', format: 'Excel' },
      { name: 'Corporate_Loan_Summary', type: 'Loan Report', format: 'PDF' },
      { name: 'System_Revenue_Final', type: 'Revenue Report', format: 'Excel' },
      { name: 'Customer_Acquisition_Trends', type: 'Customer Report', format: 'PDF' }
    ];

    for (let i = 1; i <= this.totalItems; i++) {
      const base = baselineRecords[(i - 1) % baselineRecords.length];
      this.allReports.push({
        id: i,
        name: `${base.name}_Row_${i}`,
        type: base.type!,
        generatedBy: 'Super Admin',
        date: `May ${26 - Math.floor(i/5)}, 2026 ${10 + (i%12)}:${20 + (i%39)}`,
        format: base.format as 'PDF' | 'Excel',
        status: 'Completed'
      });
    }
  }

  // Updates slice window bounds based on page size and active page
  updateDisplayedRows(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedDataSource = this.allReports.slice(startIndex, endIndex);
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
  }

  // Event handlers mapped to the structural custom layout markup
  onPageSizeChange(newSize: number): void {
    this.pageSize = newSize;
    this.currentPage = 1; // Reset window frame to the first index
    this.updateDisplayedRows();
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedRows();
    }
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get endIndex(): number {
    const calculatedEnd = this.currentPage * this.pageSize;
    return calculatedEnd > this.totalItems ? this.totalItems : calculatedEnd;
  }

  downloadFile(record: ReportRecordModel): void {
    console.log(`Downloading ${record.name}.${record.format.toLowerCase()}`);
  }

  viewDetails(record: ReportRecordModel): void {
    console.log(`Viewing metadata for entry ID: ${record.id}`);
  }
}
