import { Component } from '@angular/core';
import { MatModule } from '../../../../../shared/material.module';
import { ContactInformation } from '../components/contact-information/contact-information';
import { BusinessConfiguration } from '../components/business-configuration/business-configuration';
import { ConfigurationSummary } from '../components/configuration-summary/configuration-summary';
import { LastUpdateBy } from '../components/last-update-by/last-update-by';
import { BankInformation } from '../components/bank-information/bank-information';
import { BankProfile } from '../components/bank-profile/bank-profile';
import { BankStatus } from '../components/bank-status/bank-status';
import { BankingRules } from '../components/banking-rules/banking-rules';
import { Branding } from '../components/branding/branding';
import { OperationalSettings } from '../components/operational-settings/operational-settings';
import { ResentSettingChanges } from '../components/resent-setting-changes/resent-setting-changes';

@Component({
  selector: 'app-bank-setting-layout',
  imports: [MatModule ,OperationalSettings,ResentSettingChanges,  ContactInformation,BusinessConfiguration ,Branding, ConfigurationSummary,LastUpdateBy,BankInformation,BankProfile , BankStatus , BankingRules],
  templateUrl: './bank-setting-layout.html',
  styleUrl: './bank-setting-layout.scss',
})
export class BankSettingLayout {}
