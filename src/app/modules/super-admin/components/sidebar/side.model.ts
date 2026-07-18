/**
 * Sidebar Menu Item Model
 * Enterprise Banking Management System
 */

export interface SidebarMenuItem {

  /**
   * Unique menu id
   */
  id: number;

  /**
   * Display title
   */
  title: string;

  /**
   * Angular Material Icon
   * Example:
   * dashboard
   * groups
   * settings
   */
  icon: string;

  /**
   * Angular Route
   * Null when menu contains children only
   */
  route?: string;

  /**
   * Child Menus
   */
  children?: SidebarMenuItem[];

  /**
   * Whether menu is expandable
   */
  expandable?: boolean;

  /**
   * Expanded state
   */
  expanded?: boolean;

  /**
   * Badge Text
   * Example:
   * NEW
   * 5
   * 12
   */
  badge?: string;

  /**
   * Badge Color
   */
  badgeColor?: 'primary' | 'accent' | 'warn';

  /**
   * Hide menu
   */
  hidden?: boolean;

  /**
   * Disable menu
   */
  disabled?: boolean;

  /**
   * Roles allowed to view this menu
   */
  roles?: string[];

  /**
   * Permission keys
   * Used later for API-based permission management
   */
  permissions?: string[];

  /**
   * External URL
   */
  external?: boolean;

  /**
   * Opens in new tab
   */
  target?: '_self' | '_blank';

}