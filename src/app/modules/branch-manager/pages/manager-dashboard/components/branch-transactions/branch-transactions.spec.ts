import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchTransactions } from './branch-transactions';

describe('BranchTransactions', () => {
  let component: BranchTransactions;
  let fixture: ComponentFixture<BranchTransactions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchTransactions],
    }).compileComponents();

    fixture = TestBed.createComponent(BranchTransactions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
