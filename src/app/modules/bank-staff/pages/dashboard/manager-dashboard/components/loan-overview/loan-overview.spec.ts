import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOverview } from './loan-overview';

describe('LoanOverview', () => {
  let component: LoanOverview;
  let fixture: ComponentFixture<LoanOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(LoanOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
