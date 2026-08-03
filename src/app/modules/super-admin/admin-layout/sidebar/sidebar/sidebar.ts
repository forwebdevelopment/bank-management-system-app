import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { SidebarMenuItem } from '../side.model';
import {SidebarMenuGroup} from '../side.model';
import { MatModule } from '../../../../../shared/material.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
     RouterLinkActive,
     MatModule
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  @Input() collapsed = false;
    readonly menuGroups: SidebarMenuGroup[] = [
    {
      title: '',
      items: [
        {
          label: 'Dashboard',
          icon: 'home',
          route: '/super-admin/dashboard',
        },
      ],
    },
    {
      title: 'Organization',
      items: [
        {
          label: 'Branch Management',
          icon: 'account_balance',
          route: '/super-admin/branch-management',
        },
        {
          label: 'User Management',
          icon: 'group',
          route: '/super-admin/user-management',
        },
        {
          label: 'Role & Permissions',
          icon: 'manage_accounts',
          route: '/super-admin/roles-permissions',
        },
      ],
    },
    {
      title: 'Monitoring',
      items: [
        {
          label: 'Customer Directory',
          icon: 'badge',
          route: '/super-admin/customer-directory',
        },
        {
          label: 'Account Directory',
          icon: 'credit_card',
          route: '/super-admin/account-directory',
        },
      ],
    },
    {
      title: 'Reports',
      items: [
        {
          label: 'Reports & Analytics',
          icon: 'assessment',
          route: '/super-admin/report-analytics',
        },
      ],
    },
    {
      title: 'Configuration',
      items: [
        {
          label: 'Bank Settings',
          icon: 'settings',
          route: '/super-admin/bank-settings',
        },
        {
          label: 'Interest Rate Settings',
          icon: 'monitoring',
          route: '/super-admin/interest-rate-settings',
        },
       
      ],
    },
    {
      title: 'Security',
      items: [
        {
          label: 'Audit Logs',
          icon: 'article',
          route: '/super-admin/audit-logs',
        },
        {
          label: 'Login History',
          icon: 'schedule',
          route: '/super-admin/login-history',
        },
      ],
    },
  ];





  routerLinks(routerlink:any){
    console.log(routerlink)
  }


}