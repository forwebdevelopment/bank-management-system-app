import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingRules } from './banking-rules';

describe('BankingRules', () => {
  let component: BankingRules;
  let fixture: ComponentFixture<BankingRules>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingRules],
    }).compileComponents();

    fixture = TestBed.createComponent(BankingRules);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
