import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BankStaffSidebar } from './sidebar/BankStaffSidebar';
import { Topbar } from './topbar/topbar';

@Component({
  selector: 'app-bank-staff-layout',
  imports: [RouterOutlet , BankStaffSidebar , Topbar],
  templateUrl: './bank-staff-layout.html',
  styleUrl: './bank-staff-layout.css',
})
export class BankStaffLayout {
toggleSidebar() {
throw new Error('Method not implemented.');
}

   sidebarCollapsed = false;

  onSidebarChange(collapsed: boolean): void {
    this.sidebarCollapsed = collapsed;
  }
}
