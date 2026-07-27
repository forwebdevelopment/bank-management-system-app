import { Component } from '@angular/core';
import { CustomerHeader } from '../components/customer-header/customer-header';

@Component({
  selector: 'app-customer-directory',
  imports: [CustomerHeader],
  templateUrl: './customer-directory.html',
  styleUrl: './customer-directory.scss',
})
export class CustomerDirectory {}
