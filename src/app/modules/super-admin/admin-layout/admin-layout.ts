import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar/sidebar';
import { Topbar } from './topbar/topbar';
import { Footer } from './footer/footer';
import { Dashboard } from '../pages/dashboard/dashboard/dashboard';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet , SidebarComponent ,Topbar , Footer ,Dashboard],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {



   isSidebarCollapsed = false;

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
