import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownOption } from '../../../../models/banck-settings';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-business-configuration',
  imports: [MatModule],
  templateUrl: './business-configuration.html',
  styleUrl: './business-configuration.scss',
})
export class BusinessConfiguration {
 businessForm!: FormGroup;

  // Active tracking state map to open/close individual custom dropdown cards
  openDropdownId: string | null = null;

  // Dropdown structured option maps
  currencyOptions: DropdownOption[] = [
    { value: 'INR', label: 'Indian Rupee (INR)' },
    { value: 'USD', label: 'US Dollar (USD)' },
    { value: 'EUR', label: 'Euro (EUR)' },
    { value: 'GBP', label: 'British Pound (GBP)' }
  ];

  languageOptions: DropdownOption[] = [
    { value: 'English', label: 'English' },
    { value: 'Hindi', label: 'Hindi' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'French', label: 'French' }
  ];

  dateOptions: DropdownOption[] = [
    { value: 'DD-MM-YYYY', label: 'DD-MM-YYYY' },
    { value: 'MM-DD-YYYY', label: 'MM-DD-YYYY' },
    { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD' }
  ];

  zoneOptions: DropdownOption[] = [
    { value: 'Kolkata', label: '(UTC+05:30) Asia/Kolkata' },
    { value: 'London', label: '(UTC+00:00) Europe/London' },
    { value: 'NewYork', label: '(UTC-05:00) America/New_York' }
  ];

  numberOptions: DropdownOption[] = [
    { value: '1,23,456.78', label: '1,23,456.78' },
    { value: '123,456.78', label: '123,456.78' },
    { value: '123.456,78', label: '123.456,78' }
  ];

  yearOptions: DropdownOption[] = [
    { value: 'April-March', label: 'April - March' },
    { value: 'January-December', label: 'January - December' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    // Global listener event to close open panels if clicking out of bounding frames
    window.addEventListener('click', () => this.openDropdownId = null);
  }

  initForm(): void {
    this.businessForm = this.fb.group({
      defaultCurrency: ['INR', Validators.required],
      currencySymbol: ['₹ (INR)', Validators.required],
      timeZone: ['Kolkata', Validators.required],
      financialYear: ['April-March', Validators.required],
      language: ['English', Validators.required],
      dateFormat: ['DD-MM-YYYY', Validators.required],
      numberFormat: ['1,23,456.78', Validators.required]
    });
  }

  toggleDropdown(event: Event, id: string): void {
    event.stopPropagation(); // Prevents instant global closure triggers
    this.openDropdownId = this.openDropdownId === id ? null : id;
  }

  selectOption(controlName: string, option: DropdownOption): void {
    this.businessForm.get(controlName)?.setValue(option.value);
    this.openDropdownId = null;
  }

  getSelectedLabel(controlName: string, options: DropdownOption[]): string {
    const value = this.businessForm.get(controlName)?.value;
    const match = options.find(opt => opt.value === value);
    return match ? match.label : 'Select option';
  }
  
}
