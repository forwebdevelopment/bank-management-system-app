import { Component, OnInit, DestroyRef, inject } from '@angular/core';
import { MatModule } from '../../../shared/material.module';
import { BranchManagerSidebar } from './branch-manager-sidebar/branch-manager-sidebar';
import { Topbar } from './topbar/topbar';
import { Footer } from './footer/footer';
import { ManagerDashboard } from '../pages/manager-dashboard/manager-dashboard';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-stafflayout',
  standalone: true,
  imports: [MatModule, RouterOutlet , BranchManagerSidebar,Topbar, Footer , ManagerDashboard],
  templateUrl: './branch-manger-layout.html',
  styleUrl: './branch-manger-layout.scss',
})
export class BranchMangerLayout {
 
}