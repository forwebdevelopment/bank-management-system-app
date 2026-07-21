import { Component } from '@angular/core';
import { MatModule } from '../../../../../shared/material.module';
import { ManagementHeader } from '../components/management-header/management-header';
import { BrancheCard } from '../components/branche-card/branche-card';
import { Branches } from '../components/branches/branches';
import { BrancheDetails } from '../components/branche-details/branche-details';

@Component({
  selector: 'app-branchmanagement',
  imports: [MatModule , ManagementHeader , BrancheCard , Branches , BrancheDetails],
  templateUrl: './branchmanagement.html',
  styleUrl: './branchmanagement.scss',
})
export class Branchmanagement {

   // State variable determining whether Section 4 Detail Canvas Drawer panel view is open or closed
  isDetailsActive: boolean = true; 

  // Testing harness toggle execution utility routine hook
  toggleDetailsView(): void {
    this.isDetailsActive = !this.isDetailsActive;
  }
}
