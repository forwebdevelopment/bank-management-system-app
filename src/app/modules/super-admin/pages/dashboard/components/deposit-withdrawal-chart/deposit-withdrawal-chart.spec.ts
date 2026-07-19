import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositWithdrawalChart } from './deposit-withdrawal-chart';

describe('DepositWithdrawalChart', () => {
  let component: DepositWithdrawalChart;
  let fixture: ComponentFixture<DepositWithdrawalChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositWithdrawalChart],
    }).compileComponents();

    fixture = TestBed.createComponent(DepositWithdrawalChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
