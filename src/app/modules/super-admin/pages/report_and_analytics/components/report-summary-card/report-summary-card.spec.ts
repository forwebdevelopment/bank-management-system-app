import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSummaryCard } from './report-summary-card';

describe('ReportSummaryCard', () => {
  let component: ReportSummaryCard;
  let fixture: ComponentFixture<ReportSummaryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportSummaryCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportSummaryCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
