import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatModule } from '../../../../shared/material.module';
import { ChangeDetectorRef } from '@angular/core';
import { SharedService } from '../../../../shared/shared.service';

@Component({
  selector: 'app-topbar',
  imports: [MatModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {


   @Output() sidebarToggle = new EventEmitter<void>();
   sharedService = inject(SharedService)
   constructor(private cd:ChangeDetectorRef){
  
   }
  notificationCount = 8;
  messageCount = 5;
  isDarkMode = false;

  readonly currentDate = new Date();

  times: Date = new Date();
  intervalId:any
  ngOnInit(){
  this.currentTimes()
  }

    ngOnDestroy(): void {
    // Clear interval when component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
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

 currentTimes(): void {
 setInterval(() => {
    this.sharedService.currentDate = new Date(); // update property
      this.cd.detectChanges()
  }, 1000);
}
}
