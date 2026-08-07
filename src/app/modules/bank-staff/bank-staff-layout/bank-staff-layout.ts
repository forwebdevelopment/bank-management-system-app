import { Component, inject  , ChangeDetectorRef} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BankStaffSidebar } from './sidebar/BankStaffSidebar';
import { Topbar } from './topbar/topbar';
import { Footer } from './footer/footer';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-bank-staff-layout',
  imports: [RouterOutlet , BankStaffSidebar , Topbar , Footer],
  templateUrl: './bank-staff-layout.html',
  styleUrl: './bank-staff-layout.css',
})
export class BankStaffLayout {

  sharedService = inject(SharedService)
  constructor( private cd: ChangeDetectorRef){

  }
toggleSidebar() {

throw new Error('Method not implemented.');
}

   sidebarCollapsed = false;

  onSidebarChange(collapsed: boolean): void {
    this.sidebarCollapsed = collapsed;
  }



 
}
