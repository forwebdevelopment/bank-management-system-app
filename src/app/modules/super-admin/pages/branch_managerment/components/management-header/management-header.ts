import { Component } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-management-header',
  imports: [MatModule],
  templateUrl: './management-header.html',
  styleUrl: './management-header.scss',
})
export class ManagementHeader {
  constructor() {}

  ngOnInit(): void {}

  onAddBranch(): void {
    console.log('Add Branch clicked');
  }

  onExport(): void {
    console.log('Export data triggered');
  }

  onRefresh(): void {
    console.log('Refresh data triggered');
  }
}
