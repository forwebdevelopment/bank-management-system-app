import { Component  , ChangeDetectorRef} from '@angular/core';
import { AccountDireHeader } from '../components/account-dire-header/account-dire-header';
import { AccountDireSummaryCard } from '../components/account-dire-summary-card/account-dire-summary-card';
import { AccountDireAccountList } from '../components/account-dire-account-list/account-dire-account-list';
import { AccountDireAccountDetails } from '../components/account-dire-account-details/account-dire-account-details';
import { AccountRecord } from '../../../models/account_directory';

@Component({
  selector: 'app-account-directory',
  imports: [AccountDireHeader , AccountDireSummaryCard , AccountDireAccountList , AccountDireAccountDetails],
  templateUrl: './account-directory.html',
  styleUrl: './account-directory.scss',
})
export class AccountDirectory {
  constructor(private ch:ChangeDetectorRef){}
  accountDetials!:AccountRecord|null
showAccountDetails(AccountData:any) {
     this.accountDetials = AccountData
     this.ch.detectChanges();
}

 
}
