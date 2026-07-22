import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminLayout } from './modules/super-admin/admin-layout/admin-layout';
import { BranchMangerLayout } from './modules/branch-manager/branch-manager-layout/branch-manger-layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,BranchMangerLayout ,AdminLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('banking-management-sytem');
}
