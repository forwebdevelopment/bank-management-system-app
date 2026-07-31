import { Component } from '@angular/core';
import { UploadItem } from '../../../../models/banck-settings';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-branding',
  imports: [MatModule],
  templateUrl: './branding.html',
  styleUrl: './branding.scss',
})
export class Branding {
 // Explicitly mapping initial uploaded preview image source data layers
  loginBgPreview: string | null = null;
  dashBannerPreview: string | null = null;
  emailHeaderPreview: string | null = null;
  pdfLogoPreview: string | null = null;

  constructor() { }

  ngOnInit(): void { }

  onFileChange(event: Event, type: string): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        if (type === 'loginBg') this.loginBgPreview = result;
        if (type === 'dashBanner') this.dashBannerPreview = result;
        if (type === 'emailHeader') this.emailHeaderPreview = result;
        if (type === 'pdfLogo') this.pdfLogoPreview = result;
      };
      reader.readAsDataURL(file);
    }
  }

}
