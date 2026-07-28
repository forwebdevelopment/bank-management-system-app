import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDireAccountList } from './account-dire-account-list';

describe('AccountDireAccountList', () => {
  let component: AccountDireAccountList;
  let fixture: ComponentFixture<AccountDireAccountList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountDireAccountList],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountDireAccountList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
