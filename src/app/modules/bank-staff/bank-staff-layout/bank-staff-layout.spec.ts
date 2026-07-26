import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankStaffLayout } from './bank-staff-layout';

describe('BankStaffLayout', () => {
  let component: BankStaffLayout;
  let fixture: ComponentFixture<BankStaffLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankStaffLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(BankStaffLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
