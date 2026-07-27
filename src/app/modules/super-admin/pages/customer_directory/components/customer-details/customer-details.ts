import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomerElement } from '../../../../models/customerlist.model';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-customer-details',
  imports: [MatModule],
  templateUrl: './customer-details.html',
  styleUrl: './customer-details.scss',
})
export class CustomerDetails {

   @Input() customer: CustomerElement | null = null;
  @Output() closePanel = new EventEmitter<void>();

  onClosePanel() {
    this.closePanel.emit();
  }
}
