import { Component } from '@angular/core';
import {RecentActivityModel} from "../../../../models/recent-activity"
import { MatModule } from '../../../../../../shared/material.module';
@Component({
  selector: 'app-recent-activities',
  imports: [MatModule],
  templateUrl: './recent-activities.html',
  styleUrl: './recent-activities.css',
})
export class RecentActivities {


   readonly activities: RecentActivityModel[] = [
    {
      id: 1,
      title:
        'New branch "Green Park Branch" created successfully',
      time: '10:25 AM',
      icon: 'calendar_month',
      theme: 'blue',
    },
    {
      id: 2,
      title: 'User "John Smith" added to system',
      time: '09:45 AM',
      icon: 'person_outline',
      theme: 'purple',
    },
    {
      id: 3,
      title: 'Interest rates updated for all account types',
      time: '09:30 AM',
      icon: 'account_tree',
      theme: 'orange',
    },
    {
      id: 4,
      title: 'New customer "Rahul Kumar" registered',
      time: '09:15 AM',
      icon: 'badge',
      theme: 'green',
    },
    {
      id: 5,
      title: 'System backup completed successfully',
      time: '08:30 AM',
      icon: 'sync',
      theme: 'teal',
    },
  ];

  trackActivity(index: number, activity: RecentActivityModel): number {
    return activity.id;
  }
}
