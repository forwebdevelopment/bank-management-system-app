import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentInterestRate } from './current-interest-rate';

describe('CurrentInterestRate', () => {
  let component: CurrentInterestRate;
  let fixture: ComponentFixture<CurrentInterestRate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentInterestRate],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentInterestRate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
