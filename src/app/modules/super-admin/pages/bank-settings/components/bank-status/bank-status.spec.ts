import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankStatus } from './bank-status';

describe('BankStatus', () => {
  let component: BankStatus;
  let fixture: ComponentFixture<BankStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankStatus],
    }).compileComponents();

    fixture = TestBed.createComponent(BankStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
