import { Component, Input, input } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';
import { AccountRecord } from '../../../../models/account_directory';

@Component({
  selector: 'app-account-dire-account-details',
  imports: [MatModule],
  templateUrl: './account-dire-account-details.html',
  styleUrl: './account-dire-account-details.scss',
})
export class AccountDireAccountDetails {


  @Input() AccountDetails!:AccountRecord|null
   // Mock data matching the layout details
  accountData = {
    accountInfo: {
      type: 'Savings Account',
      branch: 'Connaught Place',
      currency: 'INR',
      openingDate: '15 January 2024',
      status: 'Active'
    },
    customerInfo: {
      name: 'Rohan Sharma',
      id: 'CUST000123',
      mobile: '+91 98765 43210',
      email: 'rohan.sharma@email.com'
    },
    financialSummary: {
      availableBalance: 245678.50,
      totalDeposits: 845678.00,
      totalWithdrawals: 600000.00,
      lastTransactionAmount: -5000.00
    },
    activity: {
      lastDate: '26 June 2026, 10:24 AM',
      recentList: [
        'Fund Transfer to XYZ Co.',
        'UPI Payment to Amazon',
        'ATM Withdrawal'
      ],
      services: ['ATM Card', 'Cheque Book', 'Internet Banking']
    }
  };



  ngOninit(){
    console.log("lkaksjdf")
    console.log(this.AccountDetails)
  }
  mathAbs(val: number): number {
  return Math.abs(val);
}
}
