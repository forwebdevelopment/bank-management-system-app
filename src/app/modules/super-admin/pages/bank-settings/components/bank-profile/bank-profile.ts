import { Component } from '@angular/core';
import { ProfileStat } from '../../../../models/banck-settings';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-bank-profile',
  imports: [MatModule],
  templateUrl: './bank-profile.html',
  styleUrl: './bank-profile.scss',
})
export class BankProfile {

  bankName: string = 'Global Trust Bank Limited';
  systemVersion: string = 'v1.0.0';

  // Dataset mapping matching sidebar parameters
  profileStats: ProfileStat[] = [
    {
      label: 'Total Branches',
      value: '125',
      iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    },
    {
      label: 'Total Customers',
      value: '2,45,680',
      iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      label: 'Total Accounts',
      value: '3,78,910',
      iconPath: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
