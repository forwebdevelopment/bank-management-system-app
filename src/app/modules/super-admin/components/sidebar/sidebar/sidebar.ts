import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { SidebarMenuItem } from '../side.model';
import { SIDEBAR_MENU } from '../sidebar-menu';
import { MatModule } from '../../../../../shared/material.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    // RouterLinkActive,
     MatModule
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {

  /**
   * Sidebar collapsed state
   */
  isCollapsed = signal(false);

  /**
   * Sidebar Menu
   */
  menuItems: SidebarMenuItem[] = SIDEBAR_MENU;

  constructor(private router: Router) { }

  /**
   * Toggle sidebar width
   */
  toggleSidebar(): void {
    this.isCollapsed.update(value => !value);
  }

  /**
   * Expand / Collapse parent menu
   */
  toggleMenu(menu: SidebarMenuItem): void {

    if (!menu.expandable) {
      return;
    }

    menu.expanded = !menu.expanded;

  }

  /**
   * Check active route
   */
  isActive(route?: string): boolean {

    if (!route) {
      return false;
    }

    return this.router.url.startsWith(route);

  }

}