import { Component } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-loan-overview',
  imports: [MatModule],
  templateUrl: './loan-overview.html',
  styleUrl: './loan-overview.scss',
})
export class LoanOverview {


   totalLoans = 1256;

  loanCategories: LoanCategory[] = [
    {
      name: 'Home Loan',
      count: 440,
      percentage: 35,
      className: 'home-loan'
    },
    {
      name: 'Personal Loan',
      count: 314,
      percentage: 25,
      className: 'personal-loan'
    },
    {
      name: 'Vehicle Loan',
      count: 188,
      percentage: 15,
      className: 'vehicle-loan'
    },
    {
      name: 'Education Loan',
      count: 126,
      percentage: 10,
      className: 'education-loan'
    },
    {
      name: 'Business Loan',
      count: 188,
      percentage: 15,
      className: 'business-loan'
    }
  ];
}
