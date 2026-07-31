import { Component } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-available-reports',
  imports: [MatModule],
  templateUrl: './available-reports.html',
  styleUrl: './available-reports.scss',
})
export class AvailableReports {

  // Array containing all 12 available shortcuts mapping icons and modern light color tones
  reportTypes = [
    { title: 'Customer Report', icon: 'person_outline', class: 'blue' },
    { title: 'Account Report', icon: 'assignment', class: 'teal' },
    { title: 'Transaction Report', icon: 'sync_alt', class: 'purple' },
    { title: 'Deposit Report', icon: 'arrow_downward', class: 'green' },
    { title: 'Withdrawal Report', icon: 'arrow_upward', class: 'red' },
    { title: 'Loan Report', icon: 'request_quote', class: 'orange' },
    { title: 'Fixed Deposit', icon: 'lock_open', class: 'indigo' },
    { title: 'Recurring Deposit', icon: 'replay', class: 'pink' },
    { title: 'Branch Perf.', icon: 'corporate_fare', class: 'cyan' },
    { title: 'Revenue Report', icon: 'analytics', class: 'emerald' },
    { title: 'Audit Logs', icon: 'shield_heart', class: 'amber' },
    { title: 'Employee Act.', icon: 'badge', class: 'slate' }
  ];

  constructor() { }

  ngOnInit(): void { }

  onShortcutClick(title: string): void {
    console.log(`Navigating to print frame for: ${title}`);
  }
}
