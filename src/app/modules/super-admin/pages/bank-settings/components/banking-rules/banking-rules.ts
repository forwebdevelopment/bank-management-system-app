import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatModule } from '../../../../../../shared/material.module';
@Component({
  selector: 'app-banking-rules',
  imports: [MatModule],
  templateUrl: './banking-rules.html',
  styleUrl: './banking-rules.scss',
})
export class BankingRules {
   rulesForm!: FormGroup;

  // Configuration parameter array mirroring your visual dashboard settings canvas map
  rulesList = [
    { key: 'internetBanking', label: 'Allow Internet Banking', description: 'Enable web portal login access for customers' },
    { key: 'mobileBanking', label: 'Allow Mobile Banking', description: 'Enable core platform access via smartphone applications' },
    { key: 'atmServices', label: 'Enable ATM Services', description: 'Allow active card processing over global network nodes' },
    { key: 'chequeBook', label: 'Enable Cheque Book', description: 'Permit issuing physical and digital clearing instruments' },
    { key: 'smsAlerts', label: 'Enable SMS Alerts', description: 'Push real-time transaction hooks to verified devices' },
    { key: 'emailAlerts', label: 'Enable Email Alerts', description: 'Dispatch legal electronic statements and login notifications' },
    { key: 'twoFactorAuth', label: 'Enable Two-Factor Authentication', description: 'Mandate step-up hardware token security layer verification' },
    { key: 'kycVerification', label: 'Enable KYC Verification', description: 'Block transactional clearance until verification steps pass' },
    { key: 'autoAccountGen', label: 'Enable Auto Account Number Generation', description: 'Automate ledger index naming parameters' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    // Dynamically creating a reactive controls matrix initialization loop
    const groupConfiguration: { [key: string]: any } = {};
    
    this.rulesList.forEach(rule => {
      // Defaulting all 9 parameters to 'true' (active blue toggle state) to match reference dashboard layout screen
      groupConfiguration[rule.key] = [true];
    });

    this.rulesForm = this.fb.group(groupConfiguration);

    // Dynamic stream listener to track runtime alterations
    this.rulesForm.valueChanges.subscribe(updatedMatrix => {
      console.log('Operational Rules Form Updated Matrix:', updatedMatrix);
    });
  }
}
