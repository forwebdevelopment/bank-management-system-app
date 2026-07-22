import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

    currentYear = new Date().getFullYear();

  systemStatus = 'All Systems Operational';
  version = 'v1.0.0';
}
