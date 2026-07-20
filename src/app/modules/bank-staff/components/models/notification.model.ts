

























































































type NotificationType =
  | 'transaction'
  | 'approval'
  | 'customer'
  | 'system'
  | 'warning';

interface DashboardNotificationModel {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: string;
  type: NotificationType;
  isRead: boolean;
  route?: string;
}


