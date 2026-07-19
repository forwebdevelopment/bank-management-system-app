import { Component } from '@angular/core';
import { MatModule } from '../../../../shared/material.module';

@Component({
  selector: 'app-footer',
  imports: [MatModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

   readonly currentYear = new Date().getFullYear();
  readonly applicationVersion = '1.0';
}
