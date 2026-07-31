import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchPerformance } from './branch-performance';

describe('BranchPerformance', () => {
  let component: BranchPerformance;
  let fixture: ComponentFixture<BranchPerformance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchPerformance],
    }).compileComponents();

    fixture = TestBed.createComponent(BranchPerformance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
