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
          icon: 'dashboard',
          route: '/bank-staff/dashboard'
        }
      ]
    },
    {
      title: 'Customer',
      items: [
        {
          label: 'Customer List',
          icon: 'group',
          route: '/bank-staff/customers'
        },
        {
          label: 'Add Customer',
          icon: 'person_add',
          route: '/bank-staff/customers/add'
        },
        {
          label: 'Edit Customer',
          icon: 'manage_accounts',
          route: '/bank-staff/customers/edit'
        },
        {
          label: 'Customer Details',
          icon: 'badge',
          route: '/bank-staff/customers/details'
        }
      ]
    },
    {
      title: 'KYC',
      items: [
        {
          label: 'Upload Documents',
          icon: 'upload_file',
          route: '/bank-staff/kyc/upload'
        },
        {
          label: 'Verify KYC',
          icon: 'verified_user',
          route: '/bank-staff/kyc/verify'
        }
      ]
    },
    {
      title: 'Account',
      items: [
        {
          label: 'Account List',
          icon: 'account_balance_wallet',
          route: '/bank-staff/accounts'
        },
        {
          label: 'Open Account',
          icon: 'add_card',
          route: '/bank-staff/accounts/open'
        },
        {
          label: 'Edit Account',
          icon: 'edit_note',
          route: '/bank-staff/accounts/edit'
        },
        {
          label: 'Account Details',
          icon: 'description',
          route: '/bank-staff/accounts/details'
        }
      ]
    },
    {
      title: 'Transactions',
      items: [
        {
          label: 'Deposit',
          icon: 'south_west',
          route: '/bank-staff/transactions/deposit'
        },
        {
          label: 'Withdrawal',
          icon: 'north_east',
          route: '/bank-staff/transactions/withdrawal'
        },
        {
          label: 'Fund Transfer',
          icon: 'swap_horiz',
          route: '/bank-staff/transactions/fund-transfer'
        },
        {
          label: 'Transaction History',
          icon: 'history',
          route: '/bank-staff/transactions/history'
        }
      ]
    },
    {
      title: 'ATM',
      items: [
        {
          label: 'ATM Card Issue',
          icon: 'credit_card',
          route: '/bank-staff/atm/card-issue'
        }
      ]
    },
    {
      title: 'Cheque',
      items: [
        {
          label: 'Cheque Book Issue',
          icon: 'menu_book',
          route: '/bank-staff/cheque/book-issue'
        }
      ]
    },
    {
      title: 'Loan',
      items: [
        {
          label: 'Loan Application',
          icon: 'request_quote',
          route: '/bank-staff/loans/application'
        }
      ]
    },
    {
      title: 'FD/RD',
      items: [
        {
          label: 'Create Fixed Deposit',
          icon: 'savings',
          route: '/bank-staff/deposits/fixed-deposit'
        },
        {
          label: 'Create Recurring Deposit',
          icon: 'event_repeat',
          route: '/bank-staff/deposits/recurring-deposit'
        }
      ]
    },
    {
      title: 'Reports',
      items: [
        {
          label: 'Customer Report',
          icon: 'assessment',
          route: '/bank-staff/reports/customer'
        },
        {
          label: 'Transaction Report',
          icon: 'analytics',
          route: '/bank-staff/reports/transaction'
        }
      ]
    },
    {
      title: 'Profile',
      items: [
        {
          label: 'Profile Settings',
          icon: 'settings',
          route: '/bank-staff/profile/settings'
        }
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
