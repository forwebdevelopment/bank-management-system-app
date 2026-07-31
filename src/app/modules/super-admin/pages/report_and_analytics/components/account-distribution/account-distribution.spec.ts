import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDistribution } from './account-distribution';

describe('AccountDistribution', () => {
  let component: AccountDistribution;
  let fixture: ComponentFixture<AccountDistribution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountDistribution],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountDistribution);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
