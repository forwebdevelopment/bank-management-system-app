import { Component } from '@angular/core';
import { AuditLogItem } from '../../../../models/banck-settings';

@Component({
  selector: 'app-last-update-by',
  imports: [],
  templateUrl: './last-update-by.html',
  styleUrl: './last-update-by.scss',
})
export class LastUpdateBy {
// Hardcoded values matching the exact metadata logs from your image blueprint
  lastUpdatedTime: string = 'Jun 26, 2026 10:30 AM';
  updatedByUserName: string = 'Super Admin';

  constructor() { }

  ngOnInit(): void { }
}
