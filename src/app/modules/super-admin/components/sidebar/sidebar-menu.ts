import { SidebarMenuItem } from './side.model';

export const SIDEBAR_MENU: SidebarMenuItem[] = [

  // ===========================
  // Dashboard
  // ===========================
  {
    id: 1,
    title: 'Dashboard',
    icon: 'dashboard',
    route: '/super-admin/dashboard'
  },

  // ===========================
  // Organization
  // ===========================
  {
    id: 2,
    title: 'Organization',
    icon: 'apartment',
    expandable: true,
    expanded: false,
    children: [
      {
        id: 21,
        title: 'Branch Management',
        icon: 'account_balance',
        route: '/super-admin/branches'
      },
      {
        id: 22,
        title: 'Staff Management',
        icon: 'badge',
        route: '/super-admin/staff'
      },
      {
        id: 23,
        title: 'Roles & Permissions',
        icon: 'admin_panel_settings',
        route: '/super-admin/roles'
      }
    ]
  },

  // ===========================
  // Customer Management
  // ===========================
  {
    id: 3,
    title: 'Customer Management',
    icon: 'groups',
    expandable: true,
    expanded: false,
    children: [
      {
        id: 31,
        title: 'Customer Directory',
        icon: 'person',
        route: '/super-admin/customers'
      },
      {
        id: 32,
        title: 'Account Directory',
        icon: 'credit_card',
        route: '/super-admin/accounts'
      },
      {
        id: 33,
        title: 'KYC Verification',
        icon: 'verified_user',
        route: '/super-admin/kyc'
      }
    ]
  },

  // ===========================
  // Loan Management
  // ===========================
  {
    id: 4,
    title: 'Loan Management',
    icon: 'payments',
    expandable: true,
    expanded: false,
    children: [
      {
        id: 41,
        title: 'Loan Applications',
        icon: 'description',
        route: '/super-admin/loan-applications'
      },
      {
        id: 42,
        title: 'Loan Approvals',
        icon: 'task_alt',
        route: '/super-admin/loan-approvals'
      },
      {
        id: 43,
        title: 'EMI Schedule',
        icon: 'calendar_month',
        route: '/super-admin/emi'
      }
    ]
  },

  // ===========================
  // Banking
  // ===========================
  {
    id: 5,
    title: 'Banking',
    icon: 'account_balance_wallet',
    expandable: true,
    expanded: false,
    children: [
      {
        id: 51,
        title: 'Transactions',
        icon: 'swap_horiz',
        route: '/super-admin/transactions'
      },
      {
        id: 52,
        title: 'Card Management',
        icon: 'credit_score',
        route: '/super-admin/cards'
      },
      {
        id: 53,
        title: 'ATM Management',
        icon: 'atm',
        route: '/super-admin/atms'
      }
    ]
  },

  // ===========================
  // Reports
  // ===========================
  {
    id: 6,
    title: 'Reports',
    icon: 'analytics',
    expandable: true,
    expanded: false,
    children: [
      {
        id: 61,
        title: 'Reports',
        icon: 'assessment',
        route: '/super-admin/reports'
      },
      {
        id: 62,
        title: 'Analytics',
        icon: 'query_stats',
        route: '/super-admin/analytics'
      }
    ]
  },

  // ===========================
  // Configuration
  // ===========================
  {
    id: 7,
    title: 'Configuration',
    icon: 'settings',
    expandable: true,
    expanded: false,
    children: [
      {
        id: 71,
        title: 'Bank Settings',
        icon: 'settings_applications',
        route: '/super-admin/bank-settings'
      },
      {
        id: 72,
        title: 'Interest Rates',
        icon: 'trending_up',
        route: '/super-admin/interest-rates'
      },
      {
        id: 73,
        title: 'System Settings',
        icon: 'tune',
        route: '/super-admin/system-settings'
      }
    ]
  },

  // ===========================
  // Security
  // ===========================
  {
    id: 8,
    title: 'Security',
    icon: 'shield',
    expandable: true,
    expanded: false,
    children: [
      {
        id: 81,
        title: 'Audit Logs',
        icon: 'history',
        route: '/super-admin/audit-logs'
      },
      {
        id: 82,
        title: 'Login History',
        icon: 'login',
        route: '/super-admin/login-history'
      },
      {
        id: 83,
        title: 'Security Alerts',
        icon: 'warning',
        route: '/super-admin/security-alerts',
        badge: '3',
        badgeColor: 'warn'
      }
    ]
  },

  // ===========================
  // Notifications
  // ===========================
  {
    id: 9,
    title: 'Notifications',
    icon: 'notifications',
    route: '/super-admin/notifications',
    badge: '12',
    badgeColor: 'accent'
  },

  // ===========================
  // Help
  // ===========================
  {
    id: 10,
    title: 'Help & Support',
    icon: 'help',
    route: '/super-admin/help'
  },

  // ===========================
  // Logout
  // ===========================
  {
    id: 11,
    title: 'Logout',
    icon: 'logout',
    route: '/logout'
  }

];