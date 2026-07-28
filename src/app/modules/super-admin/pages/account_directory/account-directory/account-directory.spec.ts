import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDirectory } from './account-directory';

describe('AccountDirectory', () => {
  let component: AccountDirectory;
  let fixture: ComponentFixture<AccountDirectory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountDirectory],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountDirectory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
