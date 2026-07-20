
export interface TopbarNotification {
  id: number;
  title: string;
  message: string;
  time: string;
  icon: string;
  read: boolean;
}

export interface TopbarMessage {
  id: number;
  sender: string;
  message: string;
  time: string;
  image?: string;
  read: boolean;
}
