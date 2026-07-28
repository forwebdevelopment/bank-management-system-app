import { Component } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-account-dire-header',
  imports: [MatModule],
  templateUrl: './account-dire-header.html',
  styleUrl: './account-dire-header.scss',
})
export class AccountDireHeader {

    
  onExport(): void {
    console.log('Exporting account records...');
  }

  onPrint(): void {
    console.log('Opening print dialog...');
  }

  onRefresh(): void {
    console.log('Refreshing directory view...');
  }
}
