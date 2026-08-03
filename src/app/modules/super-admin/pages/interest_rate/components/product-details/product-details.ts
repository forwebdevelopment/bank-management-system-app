import { Component, EventEmitter, Output } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-product-details',
  imports: [MatModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {

  @Output() close = new EventEmitter<any>()


}
