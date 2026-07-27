import { Component } from '@angular/core';
import { CustomerHeader } from '../components/customer-header/customer-header';
import { SummaryCard } from '../components/summary-card/summary-card';
import { CustomerList } from '../components/customer-list/customer-list';
import { CustomerDetails } from '../components/customer-details/customer-details';
import { CustomerElement } from '../../../models/customerlist.model';

@Component({
  selector: 'app-customer-directory',
  imports: [CustomerHeader , SummaryCard , CustomerList , CustomerDetails],
  templateUrl: './customer-directory.html',
  styleUrl: './customer-directory.scss',
})
export class CustomerDirectory {
selectedCustomer: CustomerElement | null = null;

}
