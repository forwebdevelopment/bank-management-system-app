import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminLayout } from './modules/super-admin/admin-layout/admin-layout';
import { BankStaffLayout } from './modules/branch-manager/branch-manager-layout/bankstafflayout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,BankStaffLayout ,AdminLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('banking-management-sytem');
}
