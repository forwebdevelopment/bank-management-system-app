import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink , Router , RouterLinkActive } from '@angular/router';
import { SidebarMenuGroup } from '../../models/sidemenubaritem.model';
import { MatModule } from '../../../../shared/material.module';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink ,RouterLinkActive , MatModule],
  templateUrl: './BankStaffSidebar.html',
  styleUrl: './BankStaffSidebar.scss',
})
export class BankStaffSidebar {
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
    title: 'Customer',
    icon: 'group',
    items: [
      { label: 'Customer List', route: '/bank-staff/customers' },
      { label: 'Add Customer', route: '/bank-staff/customers/add' },
      { label: 'Edit Customer', route: '/bank-staff/customers/edit' },
      { label: 'Customer Details', route: '/bank-staff/customers/details' }
    ]
  },
  {
    title: 'KYC',
    icon: 'verified_user',
    items: [
      { label: 'Upload Documents', route: '/bank-staff/kyc/upload' },
      { label: 'Verify KYC', route: '/bank-staff/kyc/verify' }
    ]
  },
  {
    title: 'Account',
    icon: 'account_balance',
    items: [
      { label: 'Account List', route: '/bank-staff/accounts' },
      { label: 'Open Account', route: '/bank-staff/accounts/open' },
      { label: 'Edit Account', route: '/bank-staff/accounts/edit' },
      { label: 'Account Details', route: '/bank-staff/accounts/details' }
    ]
  },
  {
    title: 'Transactions',
    icon: 'account_balance_wallet',
    items: [
      { label: 'Deposit', route: '/bank-staff/transactions/deposit' },
      { label: 'Withdrawal', route: '/bank-staff/transactions/withdrawal' },
      { label: 'Fund Transfer', route: '/bank-staff/transactions/fund-transfer' },
      { label: 'Transaction History', route: '/bank-staff/transactions/history' }
    ]
  },
  {
    title: 'ATM',
    icon: 'credit_card',
    items: [
      { label: 'ATM Card Issue', route: '/bank-staff/atm/card-issue' }
    ]
  },
  {
    title: 'Cheque',
    icon: 'subtitles',
    items: [
      { label: 'Cheque Book Issue', route: '/bank-staff/cheque/book-issue' }
    ]
  },
  {
    title: 'Loan',
    icon: 'real_estate_agent',
    items: [
      { label: 'Loan Application', route: '/bank-staff/loans/application' }
    ]
  },
  {
    title: 'FD/RD',
    icon: 'savings',
    items: [
      { label: 'Create Fixed Deposit', route: '/bank-staff/deposits/fixed-deposit' },
      { label: 'Create Recurring Deposit', route: '/bank-staff/deposits/recurring-deposit' }
    ]
  },
  {
    title: 'Reports',
    icon: 'description',
    items: [
      { label: 'Customer Report', route: '/bank-staff/reports/customer' },
      { label: 'Transaction Report', route: '/bank-staff/reports/transaction' }
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
