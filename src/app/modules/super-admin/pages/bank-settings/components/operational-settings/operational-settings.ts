import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownOption } from '../../../../models/banck-settings';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-operational-settings',
  imports: [MatModule],
  templateUrl: './operational-settings.html',
  styleUrl: './operational-settings.scss',
})
export class OperationalSettings {

  operationalForm!: FormGroup;
  openDropdownId: string | null = null;

  // Dropdown options matching Section 6 summary parameters
  timeOptions: DropdownOption[] = [
    { value: '08:00 AM', label: '08:00 AM' },
    { value: '09:00 AM', label: '09:00 AM' },
    { value: '10:00 AM', label: '10:00 AM' },
    { value: '04:30 PM', label: '04:30 PM' },
    { value: '05:30 PM', label: '05:30 PM' },
    { value: '06:30 PM', label: '06:30 PM' }
  ];

  workingDaysOptions: DropdownOption[] = [
    { value: 'Mon-Fri', label: 'Monday - Friday' },
    { value: 'Mon-Sat', label: 'Monday - Saturday' },
    { value: 'Mon-Sun', label: 'Everyday' }
  ];

  weekendOptions: DropdownOption[] = [
    { value: 'Sat-Sun', label: 'Saturday, Sunday' },
    { value: 'Sun', label: 'Sunday Only' },
    { value: 'None', label: 'No Weekends' }
  ];

  loginAttemptsOptions: DropdownOption[] = [
    { value: '3', label: '3 Attempts' },
    { value: '5', label: '5 Attempts' },
    { value: '10', label: '10 Attempts' }
  ];

  timeoutOptions: DropdownOption[] = [
    { value: '15', label: '15 Minutes' },
    { value: '30', label: '30 Minutes' },
    { value: '60', label: '60 Minutes' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    // Global listener to close dropdowns when clicking outside
    window.addEventListener('click', () => this.openDropdownId = null);
  }

  initForm(): void {
    this.operationalForm = this.fb.group({
      businessStartTime: ['09:00 AM', Validators.required],
      businessEndTime: ['05:30 PM', Validators.required],
      workingDays: ['Mon-Fri', Validators.required],
      weekendConfig: ['Sat-Sun', Validators.required],
      maxLoginAttempts: ['5', Validators.required],
      sessionTimeout: ['30', Validators.required]
    });
  }

  toggleDropdown(event: Event, id: string): void {
    event.stopPropagation();
    this.openDropdownId = this.openDropdownId === id ? null : id;
  }

  selectOption(controlName: string, option: DropdownOption): void {
    this.operationalForm.get(controlName)?.setValue(option.value);
    this.openDropdownId = null;
  }

  getSelectedLabel(controlName: string, options: DropdownOption[]): string {
    const value = this.operationalForm.get(controlName)?.value;
    const match = options.find(opt => opt.value === value);
    return match ? match.label : 'Select option';
  }
}
