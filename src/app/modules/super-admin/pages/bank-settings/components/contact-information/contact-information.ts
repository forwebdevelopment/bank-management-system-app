import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-contact-information',
  imports: [MatModule],
  templateUrl: './contact-information.html',
  styleUrl: './contact-information.scss',
})
export class ContactInformation {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.contactForm = this.fb.group({
      email: ['info@globaltrustbank.com', [Validators.required, Validators.email]],
      customerCare: ['1800 123 4567', Validators.required],
      website: ['https://globaltrustbank.com', Validators.required],
      address: ['123 Financial District, Business Bay', Validators.required],
      city: ['Mumbai', Validators.required],
      state: ['Maharashtra', Validators.required],
      country: ['India', Validators.required],
      zipCode: ['400001', Validators.required]
    });
  }
}
