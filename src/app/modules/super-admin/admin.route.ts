import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard/dashboard';
import { AdminLayout } from './admin-layout/admin-layout';

import { Branchmanagement } from './pages/branch_managerment/branchmanagement/branchmanagement';
import { UserManagement } from './pages/user_management/user-management/user-management';
import { RoleAndPermission } from './pages/role_and_permission/role-and-permission/role-and-permission';
import { CustomerDirectory } from './pages/customer_directory/customer-directory/customer-directory';
import { AccountDirectory } from './pages/account_directory/account-directory/account-directory';

export const Admin_Routs: Routes = [
    {
        path: '', component: AdminLayout,

        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'branch-management', component: Branchmanagement },
            { path: 'user-management', component: UserManagement },
            { path: 'roles-permissions', component: RoleAndPermission },
            { path: 'customer-directory', component: CustomerDirectory },
            {path:'account-directory', component:AccountDirectory}
        ]
    }

];