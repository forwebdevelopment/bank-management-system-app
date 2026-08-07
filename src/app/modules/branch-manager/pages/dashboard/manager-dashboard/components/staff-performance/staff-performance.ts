import { Component } from '@angular/core';
import { StaffPerformanceModel } from '../../../../../models/staff-perfomance.model';
import { MatModule } from '../../../../../../../shared/material.module';

@Component({
  selector: 'app-staff-performance',
  imports: [MatModule],
  templateUrl: './staff-performance.html',
  styleUrl: './staff-performance.scss',
})
export class StaffPerformance {

   employees: StaffPerformanceModel[] = [
    {
      id: 1,
      name: 'Ankit Verma',
      designation: 'Senior Banking Officer',
      initials: 'AV',
      rating: 4.8,
      customersHandled: 156,
      transactionsCompleted: 356,
      performance: 92,
      status: 'Excellent'
    },
    {
      id: 2,
      name: 'Neha Singh',
      designation: 'Relationship Manager',
      initials: 'NS',
      rating: 4.6,
      customersHandled: 142,
      transactionsCompleted: 318,
      performance: 88,
      status: 'Excellent'
    },
    {
      id: 3,
      name: 'Rohit Kumar',
      designation: 'Cashier',
      initials: 'RK',
      rating: 4.3,
      customersHandled: 128,
      transactionsCompleted: 290,
      performance: 81,
      status: 'Good'
    },
    {
      id: 4,
      name: 'Priya Sharma',
      designation: 'Customer Service Officer',
      initials: 'PS',
      rating: 4.1,
      customersHandled: 119,
      transactionsCompleted: 265,
      performance: 76,
      status: 'Average'
    }
  ];

  getPerformanceIcon(status: StaffPerformanceModel['status']): string {
    switch (status) {
      case 'Excellent':
        return 'trending_up';
      case 'Good':
        return 'thumb_up';
      default:
        return 'remove';
    }
  }
}
