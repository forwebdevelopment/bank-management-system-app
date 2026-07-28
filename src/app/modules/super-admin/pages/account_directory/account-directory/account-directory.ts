import { Component } from '@angular/core';
import { AccountDireHeader } from '../components/account-dire-header/account-dire-header';
import { AccountDireSummaryCard } from '../components/account-dire-summary-card/account-dire-summary-card';
import { AccountDireAccountList } from '../components/account-dire-account-list/account-dire-account-list';

@Component({
  selector: 'app-account-directory',
  imports: [AccountDireHeader , AccountDireSummaryCard , AccountDireAccountList],
  templateUrl: './account-directory.html',
  styleUrl: './account-directory.scss',
})
export class AccountDirectory {

 
}
