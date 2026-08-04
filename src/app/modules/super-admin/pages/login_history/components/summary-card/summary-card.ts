import { Component } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-summary-card',
  imports: [MatModule],
  templateUrl: './summary-card.html',
  styleUrl: './summary-card.scss',
})
export class SummaryCard {
  kpiData = [
    { title: 'Total Logins Today', value: '2,458', percent: '12.5%', isPositive: true, icon: 'groups', colorClass: 'blue' },
    { title: 'Successful Logins', value: '2,125', percent: '15.8%', isPositive: true, icon: 'check_circle', colorClass: 'green' },
    { title: 'Failed Logins', value: '178', percent: '8.3%', isPositive: false, icon: 'cancel', colorClass: 'red' },
    { title: 'Locked Accounts', value: '24', percent: '4.2%', isPositive: false, icon: 'lock', colorClass: 'orange' },
    { title: 'Active User Sessions', value: '326', percent: '11.3%', isPositive: true, icon: 'language', colorClass: 'blue' },
    { title: 'Unique Devices', value: '1,125', percent: '9.7%', isPositive: true, icon: 'desktop_windows', colorClass: 'purple' }
  ];
}
