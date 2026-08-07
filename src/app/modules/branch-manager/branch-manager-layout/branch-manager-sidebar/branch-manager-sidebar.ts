import { Component } from '@angular/core';
import { SidebarMenu } from '../../models/sidebar.model';
import { MatModule } from '../../../../shared/material.module';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-branch-manager-sidebar',
  imports: [MatModule ,RouterLink , RouterLinkActive],
  templateUrl: './branch-manager-sidebar.html',
  styleUrl: './branch-manager-sidebar.scss',
})
export class BranchManagerSidebar {


  isCollapsed = false;

  menuItems: SidebarMenu[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/branch-manager/dashboard'
    },
    {
      label: 'Customer',
      icon: 'group',
      children: [
        {
          label: 'Customer List',
          route: '/branch-manager/customers'
        },
        {
          label: 'Add Customer',
          route: '/branch-manager/customers/add'
        },
        {
          label: 'Customer Details',
          route: '/branch-manager/customers/details'
        }
      ]
    },
    {
      label: 'Account',
      icon: 'account_balance',
      children: [
        {
          label: 'Account List',
          route: '/branch-manager/accounts'
        },
        {
          label: 'Open Account',
          route: '/branch-manager/accounts/open'
        },
        {
          label: 'Close Account',
          route: '/branch-manager/accounts/close'
        }
      ]
    },
    {
      label: 'Transactions',
      icon: 'account_tree',
      children: [
        {
          label: 'Deposit',
          route: '/branch-manager/deposits'
        },
        {
          label: 'Withdrawal',
          route: '/branch-manager/withdrawals'
        },
        {
          label: 'Fund Transfer',
          route: '/branch-manager/fund-transfer'
        }
      ]
    },
    {
      label: 'Loan',
      icon: 'home_work',
      children: [
        {
          label: 'Loan Applications',
          route: '/branch-manager/loans'
        },
        {
          label: 'Loan Approval',
          route: '/branch-manager/approvals/loans'
        }
      ]
    },
    {
      label: 'ATM',
      icon: 'credit_card',
      children: [
        {
          label: 'ATM Card Requests',
          route: '/branch-manager/approvals/atm-card'
        }
      ]
    },
    {
      label: 'Cheque',
      icon: 'receipt_long',
      children: [
        {
          label: 'Cheque Book Requests',
          route: '/branch-manager/approvals/cheque-book'
        }
      ]
    },
    {
      label: 'Reports',
      icon: 'description',
      children: [
        {
          label: 'Daily Report',
          route: '/branch-manager/reports/daily'
        },
        {
          label: 'Monthly Report',
          route: '/branch-manager/reports/monthly'
        },
        {
          label: 'Custom Date Range Report',
          route: '/branch-manager/reports/custom'
        }
      ]
    },
    {
      label: 'Staff',
      icon: 'groups',
      children: [
        {
          label: 'Staff List',
          route: '/branch-manager/employees'
        },
        {
          label: 'Staff Performance',
          route: '/branch-manager/employees/performance'
        }
      ]
    },
    {
      label: 'Profile',
      icon: 'person',
      children: [
        {
          label: 'Profile Settings',
          route: '/branch-manager/profile'
        }
      ]
    }
  ];

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;

    if (this.isCollapsed) {
      this.menuItems.forEach(item => item.expanded = false);
    }
  }

  toggleMenu(selectedItem: SidebarMenu): void {
    if (!selectedItem.children) {
      return;
    }

    this.menuItems.forEach(item => {
      if (item !== selectedItem) {
        item.expanded = false;
      }
    });

    selectedItem.expanded = !selectedItem.expanded;
  }
}
