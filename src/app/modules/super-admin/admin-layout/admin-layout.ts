import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar/sidebar';
import { Topbar } from './topbar/topbar';
import { Footer } from './footer/footer';
import { Dashboard } from '../pages/dashboard/dashboard/dashboard';
import { Branchmanagement } from '../pages/branch_managerment/branchmanagement/branchmanagement';
import { UserManagement } from '../pages/user_management/user-management/user-management';
import { RoleAndPermission } from '../pages/role_and_permission/role-and-permission/role-and-permission';
import { CustomerDirectory } from '../pages/customer_directory/customer-directory/customer-directory';

@Component({
  selector: 'app-admin-layout',
  imports: [ RouterOutlet, SidebarComponent ,Topbar , Footer , RoleAndPermission , CustomerDirectory , Branchmanagement ],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {



   isSidebarCollapsed = false;

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
