import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyBankingPerformance } from './monthly-banking-performance';

describe('MonthlyBankingPerformance', () => {
  let component: MonthlyBankingPerformance;
  let fixture: ComponentFixture<MonthlyBankingPerformance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyBankingPerformance],
    }).compileComponents();

    fixture = TestBed.createComponent(MonthlyBankingPerformance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
