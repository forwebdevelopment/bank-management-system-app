import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDireAccountDetails } from './account-dire-account-details';

describe('AccountDireAccountDetails', () => {
  let component: AccountDireAccountDetails;
  let fixture: ComponentFixture<AccountDireAccountDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountDireAccountDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountDireAccountDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
