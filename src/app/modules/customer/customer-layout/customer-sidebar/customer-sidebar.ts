import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarMenuGroup } from '../../../bank-staff/models/sidemenubaritem.model';
import { MatModule } from '../../../../shared/material.module';

@Component({
  selector: 'app-customer-sidebar',
  imports: [MatModule],
  templateUrl: './customer-sidebar.html',
  styleUrl: './customer-sidebar.scss',
})
export class CustomerSidebar {
  @Input() collapsed = false;

  @Output() collapsedChange = new EventEmitter<boolean>();

  readonly dashboardRoute = '/bank-staff/dashboard';

 menuGroups: SidebarMenuGroup[] = [
  {
    
    items: [
      {
        label: 'Dashboard',
        icon: 'grid_view',
        route: '/bank-staff/dashboard'
      }
    ]
  },
  {
    title: 'My Account',
    icon: 'group',
    items: [
      { label: 'Account Summary', route: '/bank-staff/customers' },
      { label: 'Account Statement', route: '/bank-staff/customers/add' },
     
    ]
  },
  {
    title: 'Transaction',
    icon: 'verified_user',
    items: [
      { label: 'Fund Transfer', route: '/bank-staff/kyc/upload' },
      { label: 'Benificiary Management', route: '/bank-staff/kyc/verify' },
      { label: 'Transaction History', route: '/bank-staff/kyc/verify' }
    ]
  },
  {
    title: 'Deposits',
    icon: 'savings',
    items: [
      { label: 'Fixed Deposit (FD)', route: '/bank-staff/accounts' },
      { label: 'Recurring Deposit (RD)', route: '/bank-staff/accounts/open' },
     
    ]
  },
  {
    title: 'Loan',
    icon: 'account_balance_wallet',
    items: [
      { label: 'My Loan', route: '/bank-staff/transactions/deposit' },
     
    ]
  },
  {
    title: 'ATM',
    icon: 'credit_card',
    items: [
      { label: 'ATM Card ', route: '/bank-staff/atm/card-issue' }
    ]
  },
  {
    title: 'Cheque',
    icon: 'subtitles',
    items: [
      { label: 'Cheque Book Request', route: '/bank-staff/cheque/book-issue' }
    ]
  },
 
  {
    title: 'Profile',
    icon: 'person',
    items: [
      { label: 'Profile Settings', route: '/bank-staff/profile/settings' }
    ]
  }
];
  constructor(private router: Router) {}

  toggleSidebar(): void {
    this.collapsed = !this.collapsed;
    this.collapsedChange.emit(this.collapsed);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.router.navigate(['/login']);
  }
}
