import { Component } from '@angular/core';
import { StatusService } from '../../../../models/banck-settings';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-bank-status',
  imports: [MatModule],
  templateUrl: './bank-status.html',
  styleUrl: './bank-status.scss',
})
export class BankStatus {

   // Mapping all 5 target bank platform services to positive healthy states
  servicesList: StatusService[] = [
    { name: 'Database Status', status: 'Healthy' },
    { name: 'API Status', status: 'Healthy' },
    { name: 'Email Server', status: 'Healthy' },
    { name: 'SMS Gateway', status: 'Healthy' },
    { name: 'Backup Service', status: 'Healthy' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
