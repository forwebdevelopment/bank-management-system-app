import { Component, EventEmitter } from '@angular/core';
import { MatModule } from '../../../../shared/material.module';

@Component({
  selector: 'app-topbar',
  imports: [MatModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {

    toggleSidebar = new EventEmitter<void>();

  searchText = '';

}
