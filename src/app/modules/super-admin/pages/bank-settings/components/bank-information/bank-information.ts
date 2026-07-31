import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-bank-information',
  imports: [MatModule],
  templateUrl: './bank-information.html',
  styleUrl: './bank-information.scss',
})
export class BankInformation {
   bankForm!: FormGroup;
  logoPreview: string | null = null;
  faviconPreview: string | null = null;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.bankForm = this.fb.group({
      bankName: ['Global Trust Bank Limited', Validators.required],
      bankShortName: ['GTB', Validators.required],
      bankCode: ['GTB001', Validators.required],
      swiftCode: ['GTBLINBBXXX', Validators.required],
      ifscPrefix: ['GTBL000', Validators.required],
      bankRegistrationNumber: ['BRN123456789', Validators.required],
      taxIdNumber: ['TIN987654321', Validators.required]
    });
  }

  onLogoChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => this.logoPreview = reader.result as string;
      reader.readAsDataURL(file);
    }
  }

  onFaviconChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => this.faviconPreview = reader.result as string;
      reader.readAsDataURL(file);
    }
  }
}
