import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankProfile } from './bank-profile';

describe('BankProfile', () => {
  let component: BankProfile;
  let fixture: ComponentFixture<BankProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(BankProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
