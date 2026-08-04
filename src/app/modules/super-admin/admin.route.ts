import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard/dashboard';
import { AdminLayout } from './admin-layout/admin-layout';

import { Branchmanagement } from './pages/branch_managerment/branchmanagement/branchmanagement';
import { UserManagement } from './pages/user_management/user-management/user-management';
import { RoleAndPermission } from './pages/role_and_permission/role-and-permission/role-and-permission';
import { CustomerDirectory } from './pages/customer_directory/customer-directory/customer-directory';
import { AccountDirectory } from './pages/account_directory/account-directory/account-directory';
import { ReportAndAnalyticsLayout } from './pages/report_and_analytics/report-and-analytics-layout/report-and-analytics-layout';
import { BankSettingLayout } from './pages/bank-settings/bank-setting-layout/bank-setting-layout';
import { InterestRateSettings } from './pages/interest_rate/interest-rate-settings/interest-rate-settings';
import { AuditLog } from './pages/audit-log/audit-log/audit-log';
import { LoginHistory } from './pages/login_history/login-history/login-history';

export const Admin_Routs: Routes = [
    {
        path: '', component: AdminLayout,

        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: Dashboard },
            { path: 'branch-management', component: Branchmanagement },
            { path: 'user-management', component: UserManagement },
            { path: 'roles-permissions', component: RoleAndPermission },
            { path: 'customer-directory', component: CustomerDirectory },
            {path:'account-directory', component:AccountDirectory},
            {path:'report-analytics', component:ReportAndAnalyticsLayout},
            {path:'bank-settings', component:BankSettingLayout},
            {path:'interest-rate-settings', component:InterestRateSettings},
            {path:'audit-logs',component:AuditLog},
            {path:'login-history',component:LoginHistory}
        ]
    }

];