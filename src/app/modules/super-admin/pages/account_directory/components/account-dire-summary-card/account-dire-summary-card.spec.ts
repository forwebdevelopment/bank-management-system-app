import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDireSummaryCard } from './account-dire-summary-card';

describe('AccountDireSummaryCard', () => {
  let component: AccountDireSummaryCard;
  let fixture: ComponentFixture<AccountDireSummaryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountDireSummaryCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountDireSummaryCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
