import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchStatusOverview } from './branch-status-overview';

describe('BranchStatusOverview', () => {
  let component: BranchStatusOverview;
  let fixture: ComponentFixture<BranchStatusOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchStatusOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(BranchStatusOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
