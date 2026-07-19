import { Component, EventEmitter, Output } from '@angular/core';
import { MatModule } from '../../../../shared/material.module';

@Component({
  selector: 'app-topbar',
  imports: [MatModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {


   @Output() sidebarToggle = new EventEmitter<void>();

  notificationCount = 8;
  messageCount = 5;
  isDarkMode = false;

  readonly currentDate = new Date();

  onSidebarToggle(): void {
    this.sidebarToggle.emit();
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;

    document.body.classList.toggle(
      'dark-theme',
      this.isDarkMode
    );
  }

  logout(): void {
    console.log('Logout clicked');

    // Later:
    // this.authService.logout();
    // this.router.navigate(['/login']);
  }
}
