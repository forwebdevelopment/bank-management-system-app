import { Component } from '@angular/core';
import { Topbar } from './topbar/topbar';
import { CustomerSidebar } from './customer-sidebar/customer-sidebar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-customer-layout',
  imports: [Topbar , CustomerSidebar , Footer],
  templateUrl: './customer-layout.html',
  styleUrl: './customer-layout.css',
})
export class CustomerLayout {}
