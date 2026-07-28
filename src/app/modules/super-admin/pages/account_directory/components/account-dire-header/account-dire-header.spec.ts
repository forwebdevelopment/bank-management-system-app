import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDireHeader } from './account-dire-header';

describe('AccountDireHeader', () => {
  let component: AccountDireHeader;
  let fixture: ComponentFixture<AccountDireHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountDireHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountDireHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
