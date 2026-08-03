import { Component, HostListener } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-live-audit-monitor',
  imports: [MatModule],
  templateUrl: './live-audit-monitor.html',
  styleUrl: './live-audit-monitor.scss',
})
export class LiveAuditMonitor {


  // State Tracking Parameters
  isDropdownOpen: boolean = false;
  currentSelection: string = 'Critical Errors'; // Default baseline label seen on screen snippet

  ngOnInit(): void {}

  // Toggle active structural dropdown overlay panel visibility 
  toggleDropdown(event: Event): void {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Intercept option selected parameters shifting state caches
  selectOption(optionText: string): void {
    this.currentSelection = optionText;
    this.isDropdownOpen = false; // Collapse list panel overlay right away
    // Emit notification values outwards here if dependencies hook here
  }

  // Global window tracking hook: safely dismisses dropdown panels if users click completely away from menus
  @HostListener('document:click')
  closeDropdownFromOuterSpace(): void {
    this.isDropdownOpen = false;
  }
}
