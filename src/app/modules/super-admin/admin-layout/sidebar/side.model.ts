/**
 * Sidebar Menu Item Model
 * Enterprise Banking Management System
 */

export interface SidebarMenuItem {
label: string;
  icon: string;
  route: string;
  badge?: number;

}

export interface SidebarMenuGroup {
  title: string;
  items: SidebarMenuItem[];
}