export interface SidebarMenuItem {
  label: string;
  icon: string;
  route: string;
}

export interface SidebarMenuGroup {
  title?: string;
  items: SidebarMenuItem[];
}