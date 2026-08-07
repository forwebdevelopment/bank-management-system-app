import { Component, Inject } from '@angular/core';

import { BankingProductRate } from '../../../../../models/interest_rate';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatModule } from '../../../../../../../shared/material.module';

@Component({
  selector: 'app-edit-interest',
  imports: [MatModule , MatDialogModule ],
  templateUrl: './edit-interest.html',
  styleUrl: './edit-interest.scss',
})
export class EditInterest {
  // Create editable copies of fields
  editableRate: number;
  editableMinBalance: string;
  editableMaxBalance: string;
  editableEffectiveFrom: string;
  editableEffectiveTo: string;

  constructor(
    public dialogRef: MatDialogRef<EditInterest>,
    @Inject(MAT_DIALOG_DATA) public data: BankingProductRate
  ) {
    // Populate form models safely from injected row contexts
    this.editableRate = data.rate;
    this.editableMinBalance = data.formattedMinBalance;
    this.editableMaxBalance = data.maxBalance === 'No Limit' ? 'No Limit' : data.formattedMaxBalance;
    this.editableEffectiveFrom = this.formatDateForInput(data.effectiveFrom);
    this.editableEffectiveTo = this.formatDateForInput(data.effectiveTo);
  }

  // Close the popup window without mutation actions
  onCancel(): void {
    this.dialogRef.close(null);
  }

  // Package mutations and pass validation payload objects back outwards
  onSave(): void {
    const updatedPayload: BankingProductRate = {
      ...this.data,
      rate: Number(this.editableRate),
      formattedMinBalance: this.editableMinBalance,
      maxBalance: this.editableMaxBalance === 'No Limit' ? 'No Limit' : Number(this.editableMaxBalance.replace(/,/g, '')),
      formattedMaxBalance: this.editableMaxBalance,
      effectiveFrom: this.formatDateToDisplay(this.editableEffectiveFrom),
      effectiveTo: this.formatDateToDisplay(this.editableEffectiveTo),
      updatedBy: 'Super Admin',
      updatedAt: 'Today' // Simulating real-time change audit tracking rows fields securely
    };
    
    this.dialogRef.close(updatedPayload);
  }

  // Utility conversions: Parses '01 Jun 2026' into native calendar standard HTML '2026-06-01' input format
  private formatDateForInput(dateStr: string): string {
    if(!dateStr) return '';
    const date = new Date(dateStr);
    if(isNaN(date.getTime())) return '';
    return date.toISOString().split('T')[0];
  }

  // Utility conversions: Restores native input values back into explicit label display formats
  private formatDateToDisplay(dateStr: string): string {
    if(!dateStr) return '';
    const date = new Date(dateStr);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${String(date.getDate()).padStart(2,'0')} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }
}
