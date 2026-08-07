

export interface SidebarMenuItem {
  label: string;
  route: string;
  icon?: string;
}

export interface SidebarMenuGroup {
  title?: string;
  icon?: string; // Top-level parent icon (SecureBank style)
  items: SidebarMenuItem[];
}