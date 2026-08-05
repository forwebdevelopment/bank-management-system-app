import { Component, EventEmitter, Output } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-page-header',
  imports: [MatModule],
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss',
})
export class PageHeader {
@Output() export = new EventEmitter<any>()
@Output() exportpdf = new EventEmitter<any>()
exportHistory(){
  this.export.emit()
}
}
