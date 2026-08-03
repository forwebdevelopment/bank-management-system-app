import { Component, EventEmitter, Output } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';
import { BankingProductRate } from '../../../../models/interest_rate';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { EditInterest } from './edit-interest/edit-interest';
export const MASTER_PRODUCT_DATA: BankingProductRate[] = [
  { id: 'p1', productType: 'Savings Account', category: 'Regular Savings', rate: 4.50, minBalance: 1000, formattedMinBalance: '1,000', maxBalance: 10000000, formattedMaxBalance: '10,000,000', effectiveFrom: '01 Jun 2026', effectiveTo: '31 Dec 2026', status: 'Active', productClass: 'savings', iconCode: 'trending_up', updatedBy: 'Super Admin', updatedAt: '26 Jun 2026' },
  { id: 'p2', productType: 'Current Account', category: 'Regular Current', rate: 2.75, minBalance: 5000, formattedMinBalance: '5,00,0', maxBalance: 'No Limit', formattedMaxBalance: '', effectiveFrom: '01 Jun 2026', effectiveTo: '31 Dec 2026', status: 'Active', productClass: 'current', iconCode: 'account_balance', updatedBy: 'Super Admin', updatedAt: '26 Jun 2026' },
  { id: 'p3', productType: 'Fixed Deposit', category: '1 Year to 2 Years', rate: 7.25, minBalance: 10000, formattedMinBalance: '10,000', maxBalance: 50000000, formattedMaxBalance: '50,00,000', effectiveFrom: '01 Jun 2026', effectiveTo: '31 Dec 2026', status: 'Active', productClass: 'fixed', iconCode: 'lock_clock', updatedBy: 'Super Admin', updatedAt: '26 Jun 2026' },
  { id: 'p4', productType: 'Recurring Deposit', category: '12 Months', rate: 6.00, minBalance: 500, formattedMinBalance: '500', maxBalance: 500000, formattedMaxBalance: '5,00,000', effectiveFrom: '01 Jun 2026', effectiveTo: '31 Dec 2026', status: 'Active', productClass: 'recurring', iconCode: 'calendar_month', updatedBy: 'Super Admin', updatedAt: '26 Jun 2026' },
  { id: 'p5', productType: 'Personal Loan', category: 'Unsecured Loan', rate: 11.50, minBalance: 50000, formattedMinBalance: '50,000', maxBalance: 2500000, formattedMaxBalance: '25,00,000', effectiveFrom: '01 Jun 2026', effectiveTo: '31 Dec 2026', status: 'Active', productClass: 'personal-loan', iconCode: 'person', updatedBy: 'Super Admin', updatedAt: '26 Jun 2026' },
 ];
@Component({
  selector: 'app-interest-list',
  imports: [MatModule ,  MatIconModule, MatTableModule, MatDialogModule],
  templateUrl: './interest-list.html',
  styleUrl: './interest-list.scss',
})
export class InterestList {
   displayedColumns: string[] = ['productType', 'category', 'rate', 'minBalance', 'maxBalance', 'effectiveFrom', 'effectiveTo', 'status', 'updatedBy', 'actions'];
  
   @Output() open = new EventEmitter<any>()
  // Assign dummy data directly from the external file reference
  masterProductData: BankingProductRate[] = MASTER_PRODUCT_DATA;
  
  filteredRecords: BankingProductRate[] = [];
  paginatedData: BankingProductRate[] = [];
  searchTerm: string = '';
  selectedProductId: string = 'p1';
  currentPage: number = 1;
  pageSize: number = 8;
  totalRecords: number = 8;
 constructor(private dialog: MatDialog) {} // Inject Dialog service
  ngOnInit(): void { this.applyFilters(); }

  applyFilters(): void {
    this.filteredRecords = this.masterProductData.filter(p => 
      p.productType.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.totalRecords = this.filteredRecords.length;
    this.paginatedData = this.filteredRecords.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
  }

  onSearch(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.currentPage = 1;
    this.applyFilters();
  }

  

  toggleFilterMenu(): void {}
  selectProduct(id: string): void { this.selectedProductId = id; }
  goToPage(p: number): void { this.currentPage = p; this.applyFilters(); }
  getTotalPages(): number { return Math.ceil(this.totalRecords / this.pageSize) || 1 }
  getPageNumbers(): number[] { return Array.from({ length: this.getTotalPages() }, (_, i) => i + 1) }
  getStartEntryIndex(): number { return (this.currentPage - 1) * this.pageSize + 1 }
  getEndEntryIndex(): number { return Math.min(this.currentPage * this.pageSize, this.totalRecords) }
  getRateColorClass(rate: number): string { if (rate > 10) return 'text-red'; if (rate >= 6 && rate <= 10) return 'text-green'; return 'text-blue'; }




    // Launch Dialog Window Configuration System
  openEditPopup(product: BankingProductRate): void {
    const dialogRef = this.dialog.open(EditInterest, {
      width: '520px',
      maxWidth: '95vw',
      disableClose: false,
      data: { ...product }, // Pass structured row clone to protect master values from raw mutations
      panelClass: 'banking-custom-dialog-panel'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle saving data mutations back into master state caches here
        const targetIndex = this.masterProductData.findIndex(p => p.id === result.id);
        if (targetIndex !== -1) {
          this.masterProductData[targetIndex] = result;
          this.applyFilters();
        }
      }
    });
  }


  openPopupDetails(data:any){
    this.open.emit(data)
  }

  // Fallback structural mock methods placeholders


}
