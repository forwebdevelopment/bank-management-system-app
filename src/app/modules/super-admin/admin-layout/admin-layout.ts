import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar/sidebar';
import { Topbar } from './topbar/topbar';
import { Footer } from './footer/footer';
import { Dashboard } from '../pages/dashboard/dashboard/dashboard';
import { Branchmanagement } from '../pages/branch_managerment/branchmanagement/branchmanagement';
import { UserManagement } from '../pages/user_management/user-management/user-management';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet , SidebarComponent ,Topbar , Footer ,Dashboard , Branchmanagement , UserManagement],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {



   isSidebarCollapsed = false;

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
