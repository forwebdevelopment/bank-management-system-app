export interface SidebarChild {
  label: string;
  route: string;
}

export interface SidebarMenu {
  label: string;
  icon: string;
  route?: string;
  expanded?: boolean;
  children?: SidebarChild[];
}
