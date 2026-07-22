import { Component, EventEmitter, Output } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-user-details',
  imports: [MatModule],
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss',
})
export class UserDetails {

@Output() closeDetails = new EventEmitter<boolean>()

  close(){
    this.closeDetails.emit()
  }

}
